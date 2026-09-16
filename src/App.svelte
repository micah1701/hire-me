<script lang="ts">
  import Header from './lib/Header.svelte';
  import Hero from './lib/Hero.svelte';
  import Hire from './lib/Hire.svelte';
  import Work from './lib/Work.svelte';
  import Skills from './lib/Skills.svelte';
  import About from './lib/About.svelte';
  import Resume from './lib/Resume.svelte';
  import Contact from './lib/Contact.svelte';
  import Footer from './lib/Footer.svelte';
  import ProjectModal from './lib/ProjectModal.svelte';
  import ScanlineOverlay from './lib/ScanlineOverlay.svelte';
  import ScrollBuddy from './lib/ScrollBuddy.svelte';
  import KonamiEasterEgg from './lib/KonamiEasterEgg.svelte';

  let activeModal: string | null = null;

  function openModal(projectId: string) {
    activeModal = projectId;
  }

  function closeModal() {
    activeModal = null;
  }
</script>

<ScanlineOverlay />

<Header />
<Hero />
<Hire />
<Work on:openModal={(e) => openModal(e.detail)} />
<Skills />
<About />
<Resume />
<Contact />
<Footer />

{#if activeModal}
  <ProjectModal projectId={activeModal} on:close={closeModal} />
{/if}

<ScrollBuddy />
<KonamiEasterEgg />
