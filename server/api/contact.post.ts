import nodemailer from 'nodemailer'

interface ContactFormData {
  name: string
  email: string
  phone?: string
  message: string
  type: 'contact' | 'reservation'
  location?: string
  date?: string
  time?: string
  guests?: number
}

export default defineEventHandler(async (event) => {
  const config = useRuntimeConfig()
  
  try {
    const body: ContactFormData = await readBody(event)
    
    // Validierung
    if (!body.name || !body.email || !body.message) {
      throw createError({
        statusCode: 400,
        statusMessage: 'Bitte fülle alle Pflichtfelder aus.'
      })
    }

    // Email-Validierung
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(body.email)) {
      throw createError({
        statusCode: 400,
        statusMessage: 'Bitte gib eine gültige E-Mail-Adresse ein.'
      })
    }

    // SMTP Transporter erstellen
    const transporter = nodemailer.createTransport({
      host: config.smtpHost,
      port: parseInt(config.smtpPort),
      secure: false, // true für 465, false für andere Ports
      auth: {
        user: config.smtpUser,
        pass: config.smtpPass
      },
      tls: {
        rejectUnauthorized: false
      }
    })

    // E-Mail Inhalt je nach Typ
    let emailSubject = ''
    let emailHtml = ''

    if (body.type === 'reservation') {
      emailSubject = `Neue Reservierungsanfrage von ${body.name}`
      emailHtml = `
        <!DOCTYPE html>
        <html>
        <head>
          <style>
            body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
            .container { max-width: 600px; margin: 0 auto; padding: 20px; }
            .header { background: linear-gradient(135deg, #1a4d2e 0%, #2d5f3f 100%); color: white; padding: 20px; text-align: center; border-radius: 10px 10px 0 0; }
            .content { background: #f9f9f9; padding: 30px; border-radius: 0 0 10px 10px; }
            .info-row { margin: 15px 0; padding: 10px; background: white; border-left: 4px solid #90EE90; }
            .label { font-weight: bold; color: #2d5f3f; }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <h1>🌿 Neue Reservierungsanfrage</h1>
            </div>
            <div class="content">
              <div class="info-row">
                <span class="label">Name:</span> ${body.name}
              </div>
              <div class="info-row">
                <span class="label">E-Mail:</span> ${body.email}
              </div>
              ${body.phone ? `<div class="info-row"><span class="label">Telefon:</span> ${body.phone}</div>` : ''}
              ${body.location ? `<div class="info-row"><span class="label">Standort:</span> ${body.location}</div>` : ''}
              ${body.date ? `<div class="info-row"><span class="label">Datum:</span> ${body.date}</div>` : ''}
              ${body.time ? `<div class="info-row"><span class="label">Uhrzeit:</span> ${body.time}</div>` : ''}
              ${body.guests ? `<div class="info-row"><span class="label">Anzahl Gäste:</span> ${body.guests}</div>` : ''}
              <div class="info-row">
                <span class="label">Nachricht:</span><br/>
                ${body.message.replace(/\n/g, '<br/>')}
              </div>
            </div>
          </div>
        </body>
        </html>
      `
    } else {
      emailSubject = `Neue Kontaktanfrage von ${body.name}`
      emailHtml = `
        <!DOCTYPE html>
        <html>
        <head>
          <style>
            body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
            .container { max-width: 600px; margin: 0 auto; padding: 20px; }
            .header { background: linear-gradient(135deg, #1a4d2e 0%, #2d5f3f 100%); color: white; padding: 20px; text-align: center; border-radius: 10px 10px 0 0; }
            .content { background: #f9f9f9; padding: 30px; border-radius: 0 0 10px 10px; }
            .info-row { margin: 15px 0; padding: 10px; background: white; border-left: 4px solid #90EE90; }
            .label { font-weight: bold; color: #2d5f3f; }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <h1>🌿 Neue Kontaktanfrage</h1>
            </div>
            <div class="content">
              <div class="info-row">
                <span class="label">Name:</span> ${body.name}
              </div>
              <div class="info-row">
                <span class="label">E-Mail:</span> ${body.email}
              </div>
              ${body.phone ? `<div class="info-row"><span class="label">Telefon:</span> ${body.phone}</div>` : ''}
              <div class="info-row">
                <span class="label">Nachricht:</span><br/>
                ${body.message.replace(/\n/g, '<br/>')}
              </div>
            </div>
          </div>
        </body>
        </html>
      `
    }

    // E-Mail senden
    const info = await transporter.sendMail({
      from: `"Grüne Hecke Website" <${config.emailFrom}>`,
      to: config.emailTo,
      replyTo: body.email,
      subject: emailSubject,
      html: emailHtml
    })

    console.log('Email sent: %s', info.messageId)

    // Bestätigungs-E-Mail an den Absender
    await transporter.sendMail({
      from: `"Grüne Hecke" <${config.emailFrom}>`,
      to: body.email,
      subject: body.type === 'reservation' 
        ? 'Deine Reservierungsanfrage bei Grüne Hecke' 
        : 'Deine Nachricht an Grüne Hecke',
      html: `
        <!DOCTYPE html>
        <html>
        <head>
          <style>
            body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
            .container { max-width: 600px; margin: 0 auto; padding: 20px; }
            .header { background: linear-gradient(135deg, #1a4d2e 0%, #2d5f3f 100%); color: white; padding: 20px; text-align: center; border-radius: 10px 10px 0 0; }
            .content { background: #f9f9f9; padding: 30px; border-radius: 0 0 10px 10px; }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <h1>🌿 Vielen Dank für deine Nachricht!</h1>
            </div>
            <div class="content">
              <p>Hallo ${body.name},</p>
              <p>vielen Dank für deine ${body.type === 'reservation' ? 'Reservierungsanfrage' : 'Nachricht'}. Wir haben deine Anfrage erhalten und werden uns schnellstmöglich bei dir melden.</p>
              <p>Bei Fragen kannst du uns jederzeit kontaktieren:</p>
              <p>
                E-Mail: info@gruenehecke.de<br/>
                Telefon: +49 30 12345678
              </p>
              <p>Beste Grüße,<br/>Dein Grüne Hecke Team</p>
            </div>
          </div>
        </body>
        </html>
      `
    })

    return {
      success: true,
      message: 'E-Mail erfolgreich versendet!'
    }

  } catch (error: any) {
    console.error('Email error:', error)
    
    throw createError({
      statusCode: 500,
      statusMessage: error.message || 'Fehler beim Versenden der E-Mail'
    })
  }
})
