<script lang="ts">
  import RetroButton from "./RetroButton.svelte";
  import Icon from "./Icon.svelte";
</script>

<section id="top" class="hero-section">
  <div class="hero-grid">
    <div>
      <p class="kicker">
        Player 1 · Available now<span class="blink-cursor">_</span>
      </p>
      <h1 class="font-pixel gradient-text hero-title">
        Hire me for web stuff.
      </h1>
      <p class="hero-lead">
        23 years of building things that work — and fixing things that didn't. I
        architect, build, and problem-solve for the web with a focus on clarity,
        planning, and
        <strong style="color: #ffffff;">creative ad-hoc solutions</strong>.
      </p>
      <p class="hero-sub">
        Actively looking for a permanent senior full-stack role. Also taking on
        contract and freelance builds while waiting for the right full-time
        position.
      </p>
      <div class="hero-ctas">
        <RetroButton href="#hire" variant="primary">Press Start</RetroButton>
        <RetroButton href="#resume" variant="outline">Select Resume</RetroButton
        >
      </div>
      <div class="hero-links font-mono">
        <a
          href="https://github.com/micah1701"
          target="_blank"
          rel="noopener"
          class="hero-link"><Icon name="github" size={16} /> GitHub</a
        >
        <a
          href="https://linkedin.com/in/micahmurray"
          target="_blank"
          rel="noopener"
          class="hero-link"><Icon name="linkedin" size={16} /> LinkedIn</a
        >
        <span class="hero-location">Longmeadow, MA · remote-ready</span>
      </div>
    </div>
    <div class="hero-art">
      <div class="hero-art-panel"></div>
      <div class="hero-art-grid"></div>
      <img
        src="/micah-sprite.png"
        alt="8-bit pixel avatar of Micah Murray holding a laptop"
        class="hero-sprite pixel-art sprite-bob"
      />
    </div>
  </div>
</section>

<style>
  .hero-section {
    max-width: 1180px;
    margin: 0 auto;
    padding: 84px 24px 96px;
  }

  .hero-grid {
    display: grid;
    grid-template-columns: minmax(0, 1.35fr) minmax(0, 0.85fr);
    gap: 56px;
    align-items: center;
  }

  .hero-title {
    font-size: clamp(30px, 5.4vw, 62px);
    line-height: 1.28;
    margin: 0 0 28px;
    letter-spacing: -0.01em;
    text-wrap: balance;
  }

  .hero-lead {
    font-size: clamp(18px, 2vw, 22px);
    line-height: 1.6;
    color: #cfd8f0;
    max-width: 46ch;
    margin: 0 0 18px;
  }

  .hero-sub {
    font-size: 17px;
    line-height: 1.65;
    color: var(--arcade-muted);
    max-width: 46ch;
    margin: 0 0 36px;
  }

  .hero-ctas {
    display: flex;
    flex-wrap: wrap;
    gap: 16px;
    align-items: center;
  }

  .hero-links {
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
    align-items: center;
    margin-top: 34px;
    font-size: 13px;
    letter-spacing: 0.06em;
  }

  .hero-link {
    display: inline-flex;
    align-items: center;
    gap: 6px;
    color: var(--arcade-muted);
  }
  .hero-link:hover {
    color: var(--arcade-teal);
  }

  .hero-location {
    color: #4a5578;
  }

  .hero-art {
    position: relative;
    display: flex;
    justify-content: center;
  }

  .hero-art-panel {
    position: absolute;
    inset: 8% 6% 12%;
    background: linear-gradient(
      160deg,
      rgba(78, 227, 211, 0.16),
      rgba(255, 69, 142, 0.14)
    );
    border: 4px solid var(--arcade-border);
  }

  .hero-art-grid {
    position: absolute;
    inset: 8% 6% 12%;
    background-image: linear-gradient(
        rgba(255, 255, 255, 0.05) 1px,
        transparent 1px
      ),
      linear-gradient(90deg, rgba(255, 255, 255, 0.05) 1px, transparent 1px);
    background-size: 16px 16px;
  }

  .hero-sprite {
    position: relative;
    width: 100%;
    max-width: 330px;
    height: auto;
  }

  @media (max-width: 860px) {
    .hero-grid {
      grid-template-columns: 1fr;
    }
    .hero-art {
      order: -1;
    }
  }
</style>
