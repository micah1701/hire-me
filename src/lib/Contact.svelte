<script lang="ts">
  import Icon from './Icon.svelte';
</script>

<section id="contact" class="contact-section">
  <p class="kicker" style="justify-content: center; display: flex;">Multiplayer</p>
  <h2 class="font-pixel contact-title">Let's connect</h2>
  <p class="contact-lead">If you need a developer who can plan, build, and adapt, I'd love to hear from you.</p>

  <div class="contact-links font-mono">
    <a href="https://linkedin.com/in/micahmurray" target="_blank" rel="noopener noreferrer" class="contact-link">
      <Icon name="linkedin" size={22} /> LinkedIn
    </a>
    <a href="https://github.com/micah1701" target="_blank" rel="noopener noreferrer" class="contact-link">
      <Icon name="github" size={22} /> GitHub
    </a>
    <a href="http://discord.gg/5yuRpXYAM" target="_blank" rel="noopener noreferrer" class="contact-link">
      <Icon name="discord" size={22} /> Discord
    </a>
  </div>

  <img src="/discord_micah.png" alt="Join the Discord" class="contact-discord-banner" />
</section>

<style>
  .contact-section {
    border-top: 4px solid var(--arcade-border);
    padding: 4rem 1.5rem;
    text-align: center;
  }
  .contact-title {
    font-size: clamp(20px, 2.6vw, 30px);
    line-height: 1.4;
    color: #ffffff;
    margin: 0 0 1rem;
  }
  .contact-lead {
    font-size: 1.1rem;
    color: var(--arcade-muted);
    margin-bottom: 2rem;
  }
  .contact-links {
    display: flex;
    justify-content: center;
    gap: 2rem;
    flex-wrap: wrap;
  }
  .contact-link {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    color: var(--arcade-teal);
    font-size: 1rem;
  }
  .contact-link:hover {
    color: var(--arcade-pink);
  }
  .contact-discord-banner {
    max-width: 256px;
    width: 100%;
    margin-top: 2rem;
  }
</style>
