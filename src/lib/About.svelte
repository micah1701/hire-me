<script lang="ts">
  import SectionHeading from './SectionHeading.svelte';
  import StatCard from './StatCard.svelte';
</script>

<section id="about" class="about-section">
  <div class="about-grid">
    <div>
      <SectionHeading kicker="Character bio" title="About me" color="teal" />
      <p class="about-p">
        I've been developing for the web since the late '90s, through every major shift in technology. My
        specialty isn't just knowing the tools — it's knowing how to plan and apply them effectively, balancing
        long-term structure with creative problem-solving.
      </p>
      <p class="about-p">
        I call my approach <em class="about-em">Creative Ad-Hoc Solutions</em>: smart, pragmatic fixes that work
        and scale. It's the name on the domain, the invoices, and the side projects — but there's no agency
        behind it. It's me.
      </p>
      <p class="about-p">
        Most recently I spent six years building manufacturing, compliance, and integration systems for a
        pharmaceutical manufacturer, where "it mostly works" was never an acceptable answer to an auditor.
      </p>
    </div>
    <div class="about-stats">
      <StatCard number="23 yrs" color="teal" description="Shipping for the web professionally — agencies, non-profits, banks, and regulated manufacturing." />
      <div class="about-photo">
        <img
          src="/img/IT-consultant-headshot.png"
          alt="Micah Murray"
          class="about-photo-img"
        />
      </div>
    </div>
  </div>
</section>

<style>
  .about-section {
    border-top: 4px solid var(--arcade-border);
  }
  .about-grid {
    max-width: 1180px;
    margin: 0 auto;
    padding: 78px 24px;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(290px, 1fr));
    gap: 52px;
    align-items: start;
  }
  .about-p {
    font-size: 18px;
    line-height: 1.7;
    color: #cfd8f0;
    margin: 0 0 18px;
    max-width: 54ch;
  }
  .about-em {
    color: var(--arcade-teal);
    font-style: normal;
  }
  .about-stats {
    display: grid;
    gap: 16px;
  }
  .about-photo {
    border: 4px solid var(--arcade-border);
    background: rgba(9, 12, 26, 0.6);
    padding: 12px;
  }
  .about-photo-img {
    display: block;
    width: 100%;
    height: auto;
  }
</style>
