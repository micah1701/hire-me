<script lang="ts">
  import RetroButton from './RetroButton.svelte';

  let menuOpen = false;

  function toggleMenu() {
    menuOpen = !menuOpen;
  }

  function scrollToSection(e: Event, id: string) {
    e.preventDefault();
    menuOpen = false;
    const element = document.getElementById(id);
    if (element) {
      const header = document.querySelector('.site-header') as HTMLElement;
      const headerHeight = header ? header.offsetHeight : 0;
      const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
      window.scrollTo({ top: elementPosition - headerHeight - 20, behavior: 'smooth' });
    }
  }
</script>

<header class="site-header">
  <div class="nav-container">
    <a href="#top" class="brand" on:click={(e) => scrollToSection(e, 'top')}>
      <img src="/logo.png" alt="Creative Ad-Hoc Solutions" class="brand-logo" />
      <span class="brand-wordmark font-mono">Micah Murray<br />is Creative Ad-Hoc Solutions</span>
    </a>

    <div
      class="menu-toggle font-pixel"
      on:click={toggleMenu}
      on:keydown={(e) => (e.key === 'Enter' || e.key === ' ') && toggleMenu()}
      role="button"
      tabindex="0"
      aria-label="Toggle menu"
    >
      ☰
    </div>

    <nav class="nav-links font-mono" class:active={menuOpen}>
      <a href="#work" on:click={(e) => scrollToSection(e, 'work')}>Work</a>
      <a href="#hire" on:click={(e) => scrollToSection(e, 'hire')}>Hire</a>
      <a href="#skills" on:click={(e) => scrollToSection(e, 'skills')}>Stack</a>
      <a href="#about" on:click={(e) => scrollToSection(e, 'about')}>About</a>
      <RetroButton href="#resume" variant="primary">Résumé ↓</RetroButton>
    </nav>
  </div>
</header>

<style>
  .site-header {
    position: sticky;
    top: 0;
    z-index: 50;
    background: rgba(8, 10, 20, 0.82);
    backdrop-filter: blur(8px);
    border-bottom: 4px solid var(--arcade-border);
  }

  .nav-container {
    max-width: 1180px;
    margin: 0 auto;
    padding: 14px 24px;
    display: flex;
    align-items: center;
    gap: 24px;
    flex-wrap: wrap;
  }

  .brand {
    display: flex;
    align-items: center;
    gap: 12px;
    min-width: 0;
  }

  .brand-logo {
    height: 54px;
    width: auto;
    display: block;
  }

  .brand-wordmark {
    font-size: 11px;
    letter-spacing: 0.18em;
    text-transform: uppercase;
    color: var(--arcade-muted);
    line-height: 1.5;
    display: block;
  }

  .menu-toggle {
    display: none;
    flex-shrink: 0;
    margin-left: auto;
    font-size: 22px;
    cursor: pointer;
    color: var(--arcade-text);
  }

  .nav-links {
    margin-left: auto;
    display: flex;
    align-items: center;
    gap: 22px;
    flex-wrap: wrap;
    font-size: 13px;
    letter-spacing: 0.08em;
    text-transform: uppercase;
  }

  .nav-links a:not(.btn-pixel) {
    color: #cfd8f0;
  }
  .nav-links a:not(.btn-pixel):hover {
    color: var(--arcade-teal);
  }

  @media (max-width: 480px) {
    .brand-wordmark {
      display: none;
    }
  }

  @media (max-width: 720px) {
    .menu-toggle {
      display: block;
    }
    .nav-links {
      display: none;
      width: 100%;
      margin-left: 0;
      flex-direction: column;
      align-items: flex-start;
      gap: 16px;
      padding-top: 12px;
    }
    .nav-links.active {
      display: flex;
    }
  }
</style>
