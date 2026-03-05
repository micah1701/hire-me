<script lang="ts">
  let menuOpen = false;

  function toggleMenu() {
    menuOpen = !menuOpen;
  }

  function scrollToSection(e: Event, id: string) {
    e.preventDefault();
    menuOpen = false;
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }
</script>

<header class="site-header">
  <div class="nav-container">
    <h1 class="logo">
      Micah J. Murray
      <div>Web Application Software Developer</div>
    </h1>
    <nav class="nav">
      <div class="menu-toggle" on:click={toggleMenu}>&#9776;</div>
      <ul class="nav-links" class:active={menuOpen}>
        <li><a href="#work" on:click={(e) => scrollToSection(e, 'work')}>Work</a></li>
        <li><a href="#about" on:click={(e) => scrollToSection(e, 'about')}>About</a></li>
        <li><a href="#resume" on:click={(e) => scrollToSection(e, 'resume')}>Resume</a></li>
        <li><a href="#contact" on:click={(e) => scrollToSection(e, 'contact')}>Contact</a></li>
      </ul>
    </nav>
  </div>
</header>
