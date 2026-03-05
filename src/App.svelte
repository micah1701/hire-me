<script lang="ts">
  import Header from './lib/Header.svelte';
  import Hero from './lib/Hero.svelte';
  import Work from './lib/Work.svelte';
  import About from './lib/About.svelte';
  import Contact from './lib/Contact.svelte';
  import Footer from './lib/Footer.svelte';
  import ProjectModal from './lib/ProjectModal.svelte';

  let activeModal: string | null = null;

  function openModal(projectId: string) {
    activeModal = projectId;
  }

  function closeModal() {
    activeModal = null;
  }
</script>

<Header />
<Hero />
<Work on:openModal={(e) => openModal(e.detail)} />
<About />
<Contact />
<Footer />

{#if activeModal === 'analytics'}
  <ProjectModal projectId="analytics" on:close={closeModal} />
{:else if activeModal === 'hodl'}
  <ProjectModal projectId="hodl" on:close={closeModal} />
{:else if activeModal === 'api'}
  <ProjectModal projectId="api" on:close={closeModal} />
{/if}

