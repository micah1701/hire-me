<script lang="ts">
  import { createEventDispatcher } from 'svelte';
  import ProjectCard from './ProjectCard.svelte';

  const dispatch = createEventDispatcher();

  function openModal(projectId: string) {
    dispatch('openModal', projectId);
  }
</script>

<section id="work" class="work">
  <h2>Recent Projects</h2>
  <div class="project-grid">
    <ProjectCard
      projectId="vision"
      image="/img/ad-hoc-analytics.png"
      imgClass=""
      title="Ad‑Hoc Vision: Facial Recognition Prototype"
      subtitle="Lightweight, privacy‑first facial recognition—proof that computer vision can be secure, ethical, and elegant."
      description="A proof‑of‑concept browser‑based facial recognition system built with Svelte, MediaPipe, and face‑api.js. All processing runs locally in the browser using vector embeddings. No raw images stored, while OpenAI‑powered tools handle image cleanup and OCR for ID scanning."
      techStack={['react', 'supabase']}
      on:click={() => openModal('vision')}
    />
    
    <ProjectCard
      projectId="analytics"
      image="/img/ad-hoc-analytics.png"
      imgClass=""
      title="Ad‑Hoc Analytics"
      subtitle="a lightweight, privacy‑focused alternative to big‑tech analytics."
      description="A privacy‑first website analytics app built with React and Supabase. It tracks real‑time visits, top pages, and link activity—without using cookies or invasive tracking—making setup and maintenance refreshingly simple."
      techStack={['react', 'supabase']}
      on:click={() => openModal('analytics')}
    />

    <ProjectCard
      projectId="hodl"
      image="/img/hodl-homepage.png"
      imgClass="img-contain"
      title="ALGO Hodl"
      subtitle="Trustless peer‑to‑peer trading built on Algorand."
      description="A decentralized P2P trading platform that uses Algorand smart‑contract escrows to execute secure, trustless cryptocurrency trades. Simplicity, transparency, and privacy are built in—no intermediaries, no cookies, no tracking—just fast, verifiable transactions."
      techStack={['algorand', 'svelte', 'vite', 'walletconnect']}
      on:click={() => openModal('hodl')}
    />

    <ProjectCard
      projectId="api"
      image="/img/node1-postman-get-token.png"
      imgClass=""
      title="Node1 API Framework"
      subtitle="Build secure, modular APIs without the overhead."
      description="A modern Node.js and TypeScript foundation for building secure REST APIs with JWT authentication, comprehensive logging, and encrypted storage. It's engineered for clarity and security, not complexity—helping you spin up well‑structured backends fast."
      techStack={['nodejs', 'typescript']}
      on:click={() => openModal('api')}
    />
  </div>
</section>
