<script lang="ts">
  import SectionHeading from './SectionHeading.svelte';
  import SkillMeter from './SkillMeter.svelte';

  const skills = [
    { name: 'PHP / Laravel', note: 'since dial-up', pct: 96 },
    { name: 'JavaScript / TypeScript / Node', note: 'daily driver', pct: 93 },
    { name: 'SQL — MySQL, MS SQL, Postgres', note: 'queries and schemas', pct: 92 },
    { name: 'API design & integration', note: 'REST, JWT, oAuth2, SAML', pct: 94 },
    { name: 'Java / Spring', note: 'six years in manufacturing', pct: 80 },
    { name: 'React / Svelte front-ends', note: 'both, happily', pct: 85 },
    { name: 'DevOps — Docker, IIS, Nginx, cloud VMs', note: 'enough to ship', pct: 74 },
    { name: 'Python, Go, Rust', note: 'some, and learning', pct: 52 }
  ];
</script>

<section id="skills" class="skills-section">
  <div class="skills-container">
    <SectionHeading kicker="Stats screen" title="The stack, honestly rated" color="pink" />
    <div class="skills-grid">
      {#each skills as s}
        <SkillMeter name={s.name} note={s.note} pct={s.pct} />
      {/each}
    </div>
    <p class="skills-footnote font-mono">
      Also on the cartridge: Laravel · Next.js · Spring · .NET · Azure · AWS · Docker · Cloudflare · Sage X3 ·
      Salesforce · LDAP/SAML/OIDC · n8n · ETL pipelines · /* witty code comments */
    </p>
  </div>
</section>

<style>
  .skills-section {
    border-top: 4px solid var(--arcade-border);
    background: rgba(6, 8, 18, 0.55);
  }
  .skills-container {
    max-width: 1180px;
    margin: 0 auto;
    padding: 78px 24px;
  }
  .skills-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 30px 52px;
  }
  .skills-footnote {
    font-size: 14px;
    color: var(--arcade-muted);
    margin: 40px 0 0;
    line-height: 1.7;
  }
</style>
