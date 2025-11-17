<template>
  <div class="legal-page">
    <section class="page-hero">
      <div class="container">
        <h1 class="page-title">Impressum</h1>
      </div>
    </section>

    <section class="legal-content">
      <div class="container">
        <div class="content-box card">
          <h2>Angaben gemäß § 5 TMG</h2>
          <p>
            GRÜNE HECKE<br>
            Grüner Daumen Osnabrück e.V.<br>
            Am Speicher 1<br>
            49090 Osnabrück
          </p>

          <h3>Vertreten durch den Vorstand:</h3>
          <p>Joel Schwegmann, Leonardo Swadzba</p>

          <h3>Kontakt:</h3>
          <p>
            E-Mail: info@gruenehecke.com
          </p>

          <h3>Registereintrag:</h3>
          <p>
            Eintragung im Vereinsregister<br>
            Registergericht: Amtsgericht Osnabrück<br>
            Registernummer: VR 202580
          </p>

          <h3>Verantwortlich für den Inhalt nach § 55 Abs. 2 RStV:</h3>
          <p>
            Grüner Daumen Invest UG (haftungsbeschränkt)<br>
            Joel Schwegmann<br>
            Am Speicher 1<br>
            49090 Osnabrück
          </p>

          <h3>EU-Streitschlichtung</h3>
          <p>
            Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit:
            <a href="https://ec.europa.eu/consumers/odr" target="_blank" rel="noopener noreferrer">
              https://ec.europa.eu/consumers/odr
            </a>
          </p>

          <h3>Haftungsausschluss</h3>
          <h4>Haftung für Inhalte</h4>
          <p>
            Als Diensteanbieter sind wir gemäß § 7 Abs.1 TMG für eigene Inhalte auf diesen Seiten nach den 
            allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 TMG sind wir als Diensteanbieter jedoch nicht 
            verpflichtet, übermittelte oder gespeicherte fremde Informationen zu überwachen oder nach Umständen 
            zu forschen, die auf eine rechtswidrige Tätigkeit hinweisen.
          </p>

          <h4>Haftung für Links</h4>
          <p>
            Unser Angebot enthält Links zu externen Websites Dritter, auf deren Inhalte wir keinen Einfluss haben. 
            Deshalb können wir für diese fremden Inhalte auch keine Gewähr übernehmen. Für die Inhalte der verlinkten 
            Seiten ist stets der jeweilige Anbieter oder Betreiber der Seiten verantwortlich.
          </p>

          <h4>Urheberrecht</h4>
          <p>
            Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen dem deutschen 
            Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der 
            Grenzen des Urheberrechtes bedürfen der schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers.
          </p>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
// SEO
useHead({
  title: 'Impressum - Grüne Hecke',
  meta: [
    { name: 'robots', content: 'noindex, nofollow' }
  ]
})
</script>

<style scoped lang="scss">
.legal-page {
  min-height: 100vh;
}

.page-hero {
  padding: 60px 0 40px;
  text-align: center;
  background: rgba(0, 0, 0, 0.2);
  border-bottom: 2px solid rgba(144, 238, 144, 0.3);
}

.page-title {
  font-size: clamp(2.5rem, 6vw, 4rem);
  color: #90EE90;
}

.legal-content {
  padding: 80px 0;
}

.content-box {
  max-width: 900px;
  margin: 0 auto;
  padding: 50px;
  
  h2 {
    color: #90EE90;
    margin-bottom: 30px;
    font-size: 2rem;
  }
  
  h3 {
    color: #90EE90;
    margin-top: 40px;
    margin-bottom: 15px;
    font-size: 1.5rem;
  }
  
  h4 {
    color: #b8e6b8;
    margin-top: 30px;
    margin-bottom: 10px;
    font-size: 1.25rem;
  }
  
  p {
    margin-bottom: 20px;
    line-height: 1.8;
    color: #f5f5f5;
  }
  
  a {
    color: #90EE90;
    text-decoration: underline;
    
    &:hover {
      color: #b8e6b8;
    }
  }
}

@media (max-width: 768px) {
  .content-box {
    padding: 30px 20px;
  }
  
  .legal-content {
    padding: 40px 0;
  }
}
</style>
