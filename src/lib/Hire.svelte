<script lang="ts">
  import SectionHeading from './SectionHeading.svelte';

  interface HireMode {
    kicker: string;
    kickerColor: string;
    title: string;
    description: string;
    accent: 'teal' | 'blue' | 'pink';
  }

  const modes: HireMode[] = [
    {
      kicker: '1P · Main quest',
      kickerColor: 'var(--arcade-teal)',
      title: 'Full-time role',
      description:
        "Senior full-stack developer or application architect. I show up for the boring parts too: planning, code review, mentoring, and the long-term structure that keeps a codebase alive.",
      accent: 'teal'
    },
    {
      kicker: '2P · Side quest',
      kickerColor: 'var(--arcade-blue)',
      title: 'Contract & freelance',
      description:
        'Scoped builds under the Creative Ad-Hoc Solutions name: APIs, integrations, internal tools, dashboards, and the app nobody else wants to inherit. Fixed scope, plain English, no agency markup.',
      accent: 'blue'
    },
    {
      kicker: 'Continue?',
      kickerColor: 'var(--arcade-pink)',
      title: 'Rescue missions',
      description:
        'Something inherited, undocumented, and on fire. Reverse engineering, bug triage, and migrations off whatever the last developer left behind. My favourite kind of puzzle.',
      accent: 'pink'
    }
  ];
</script>

<section id="hire" class="hire-section">
  <div class="hire-container">
    <SectionHeading kicker="Select mode" title="Ways to hire me" color="pink" />
    <div class="hire-grid">
      {#each modes as mode}
        <div class="hire-card accent-{mode.accent}">
          <p class="font-mono hire-kicker" style="color: {mode.kickerColor}">{mode.kicker}</p>
          <h3 class="font-pixel hire-title">{mode.title}</h3>
          <p class="hire-desc">{mode.description}</p>
        </div>
      {/each}
    </div>
    <p class="hire-method font-mono">Method: Learn the process → find the bottleneck → have big ideas → PoC → MVP</p>
  </div>
</section>

<style>
  .hire-section {
    border-top: 4px solid var(--arcade-border);
    background: rgba(6, 8, 18, 0.55);
  }
  .hire-container {
    max-width: 1180px;
    margin: 0 auto;
    padding: 78px 24px;
  }
  .hire-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(270px, 1fr));
    gap: 24px;
  }
  .hire-card {
    border: 4px solid var(--arcade-border);
    padding: 30px;
  }
  .hire-card.accent-teal {
    border-color: var(--arcade-teal);
    background: linear-gradient(165deg, rgba(78, 227, 211, 0.14), rgba(8, 10, 20, 0.2));
    box-shadow: 8px 8px 0 rgba(78, 227, 211, 0.18);
  }
  .hire-card.accent-blue {
    background: linear-gradient(165deg, rgba(43, 155, 255, 0.1), rgba(8, 10, 20, 0.2));
    box-shadow: 8px 8px 0 rgba(43, 155, 255, 0.14);
  }
  .hire-card.accent-pink {
    background: linear-gradient(165deg, rgba(255, 69, 142, 0.1), rgba(8, 10, 20, 0.2));
    box-shadow: 8px 8px 0 rgba(255, 69, 142, 0.14);
  }
  .hire-kicker {
    font-size: 12px;
    letter-spacing: 0.18em;
    text-transform: uppercase;
    margin: 0 0 12px;
  }
  .hire-title {
    font-size: 15px;
    line-height: 1.6;
    color: #ffffff;
    margin: 0 0 16px;
  }
  .hire-desc {
    margin: 0;
    color: #cfd8f0;
    line-height: 1.65;
    font-size: 16px;
  }
  .hire-method {
    font-size: 14px;
    color: var(--arcade-muted);
    margin: 34px 0 0;
  }
</style>
