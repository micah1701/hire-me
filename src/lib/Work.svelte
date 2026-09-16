<script lang="ts">
  import { createEventDispatcher } from 'svelte';
  import ProjectCard from './ProjectCard.svelte';
  import SectionHeading from './SectionHeading.svelte';

  const dispatch = createEventDispatcher();

  function openModal(projectId: string) {
    dispatch('openModal', projectId);
  }
</script>

<section id="work" class="work-section">
  <div class="work-container">
    <SectionHeading kicker="Level select" title="Recent projects" color="teal" />
    <div class="work-grid">
      <ProjectCard
        projectId="vision"
        image="/img/face-license-capture.jpg"
        title="Ad-Hoc Vision"
        subtitle="Facial recognition prototype"
        description="Browser-based motion tracking, face matching, and photo-ID reading. Everything runs client-side as 128-dimension vector embeddings — no raw images stored."
        techStack={['svelte', 'mediapipe', 'openai', 'supabase']}
        on:click={() => openModal('vision')}
      />

      <ProjectCard
        projectId="analytics"
        image="/img/ad-hoc-analytics.png"
        imgClass="img-contain"
        title="Ad-Hoc Analytics"
        subtitle="Privacy-first traffic stats"
        description="Real-time visits, top pages, and link activity with no cookies and no big-tech dependency. One script tag to install, and you keep the data."
        techStack={['react', 'typescript', 'supabase']}
        on:click={() => openModal('analytics')}
      />

      <ProjectCard
        projectId="hodl"
        image="/img/hodl-homepage.png"
        imgClass="img-contain"
        title="ALGO Hodl"
        subtitle="Trustless P2P trading"
        description="Algorand smart-contract escrows executing peer-to-peer crypto trades. Encrypted wallet auth, live pricing, every action verifiable on-chain. No intermediaries."
        techStack={['algorand', 'svelte', 'walletconnect']}
        on:click={() => openModal('hodl')}
      />

      <ProjectCard
        projectId="api"
        image="/img/node1-postman-get-token.png"
        title="Node1 API"
        subtitle="Secure, modular API framework"
        description="A Node and TypeScript foundation with JWT auth, role-based access, encrypted key storage, and real logging. Backend architecture you can actually read."
        techStack={['nodejs', 'typescript', 'vite']}
        on:click={() => openModal('api')}
      />
    </div>
  </div>
</section>

<style>
  .work-section {
    border-top: 4px solid var(--arcade-border);
  }
  .work-container {
    max-width: 1180px;
    margin: 0 auto;
    padding: 78px 24px;
  }
  .work-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
    gap: 30px;
  }
</style>
