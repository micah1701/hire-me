<script lang="ts">
  import SectionHeading from "./SectionHeading.svelte";
  import SkillMeter from "./SkillMeter.svelte";

  const skills = [
    { name: "Object Oriented PHP", note: "since dial-up", pct: 96 },
    { name: "JavaScript / TypeScript / Node", note: "daily driver", pct: 93 },
    {
      name: "MS SQL, MySQL, Postgres",
      note: "queries, schemas, triggers, functions",
      pct: 92,
    },
    {
      name: "API design & integration",
      note: "REST, JWT, oAuth2, SAML",
      pct: 94,
    },
    { name: "Java / Spring", note: "six years in manufacturing", pct: 80 },
    { name: "React / Svelte front-ends", note: "both, happily", pct: 85 },
    {
      name: "DevOps — Docker, IIS, Nginx, cloud VMs",
      note: "enough to ship",
      pct: 74,
    },
    { name: "Python, Go, Rust, C#", note: "some, and learning", pct: 52 },
  ];
</script>

<section id="skills" class="skills-section">
  <div class="skills-container">
    <SectionHeading
      kicker="Stats screen"
      title="The stack, honestly rated"
      color="pink"
    />
    <div class="skills-grid">
      {#each skills as s}
        <SkillMeter name={s.name} note={s.note} pct={s.pct} />
      {/each}
    </div>
    <p class="skills-footnote font-mono">
      <span class="first_word">Plus:</span> Laravel · Next.js · Spring · · Azure
      · AWS · Docker · Cloudflare · Sage X3 · Salesforce · LDAP/SAML/OIDC · n8n
      · ETL pipelines · Jenkins · IAM ·
      <span style="color: orange; font-family: monospace">
        /*witty code comments*/
      </span>
      · Linux Command Line · Apache · Git · DNS Config · Blockchain · AI First Workflows
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
  .first_word {
    font-weight: 700;
    color: blueviolet;
    font-family: monospace;
    font-size: 1.2rem;
    line-height: 0.9em;
  }
</style>
