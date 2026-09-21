<script lang="ts">
  import { onMount, onDestroy } from "svelte";
  import RetroButton from "./RetroButton.svelte";
  import Icon from "./Icon.svelte";

  const HERO_WORDS = [
    "PHP",
    "JavaScript",
    "TypeScript",
    "SQL Server",
    "API",
    "CI/CD",
    "Blockchain",
    "GIT",
    "OpenAI",
    "Linux",
    "Node.JS",
    "Coding",
    "Web",
    "Software",
    "Internet",
    "SSL",
    "DNS",
    "Cloudflare",
    "IAM",
    "Encrypting",
    "Docker",
    "MySQL",
  ];
  const GLITCH_CHARS = "!<>-_\\/[]{}=+*^?#01";
  const HOLD_MS = 1800;
  const SCRAMBLE_FRAME_MS = 35;
  const SCRAMBLE_FRAMES = 7;

  function shuffle(list: string[]): string[] {
    const copy = [...list];
    for (let i = copy.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [copy[i], copy[j]] = [copy[j], copy[i]];
    }
    return copy;
  }

  let queue = shuffle(HERO_WORDS);
  let displayWord = queue[0];
  let isScrambling = false;
  let holdTimer: ReturnType<typeof setInterval>;
  let scrambleTimer: ReturnType<typeof setInterval>;
  let resizeTimer: ReturnType<typeof setTimeout>;
  let reduceMotion = false;

  // Each of the three heading lines gets fit to its own column width by
  // measuring actual rendered text width (the pixel font is ~1em/char,
  // wider than typical fonts) rather than guessing from character count.
  let line1El: HTMLElement;
  let line3El: HTMLElement;
  let wordLineEl: HTMLElement;
  let scaleFixed1 = 1;
  let scaleFixed3 = 1;
  let wordScale = 1;
  let measureCtx: CanvasRenderingContext2D | null = null;

  function measureTextWidth(text: string, font: string): number {
    if (!measureCtx) {
      measureCtx = document.createElement("canvas").getContext("2d");
    }
    if (!measureCtx) return 0;
    measureCtx.font = font;
    return measureCtx.measureText(text).width;
  }

  function fitScale(el: HTMLElement | undefined, text: string): number {
    if (!el) return 1;
    const cs = getComputedStyle(el);
    const font = `${cs.fontStyle} ${cs.fontWeight} ${cs.fontSize} ${cs.fontFamily}`;
    const needed = measureTextWidth(text, font);
    const available = el.clientWidth;
    if (!needed || !available || needed <= available) return 1;
    return Math.max(0.55, available / needed);
  }

  function refitWord() {
    wordScale = fitScale(wordLineEl, displayWord);
  }

  function refitFixedLines() {
    scaleFixed1 = fitScale(line1El, "Hire me for");
    scaleFixed3 = fitScale(line3El, "stuff.");
  }

  function nextWord() {
    if (queue.length <= 1) queue = shuffle(HERO_WORDS);
    const upcoming = queue.shift() as string;
    if (upcoming === displayWord && queue.length) {
      queue.push(upcoming);
      return nextWord();
    }
    return upcoming;
  }

  function scrambleTo(target: string) {
    if (reduceMotion) {
      displayWord = target;
      refitWord();
      return;
    }
    isScrambling = true;
    let frame = 0;
    clearInterval(scrambleTimer);
    scrambleTimer = setInterval(() => {
      frame++;
      const revealCount = Math.round((frame / SCRAMBLE_FRAMES) * target.length);
      let next = "";
      for (let i = 0; i < target.length; i++) {
        if (i < revealCount || target[i] === " ") {
          next += target[i];
        } else {
          next += GLITCH_CHARS[Math.floor(Math.random() * GLITCH_CHARS.length)];
        }
      }
      displayWord = next;
      if (frame === 1) refitWord();
      if (frame >= SCRAMBLE_FRAMES) {
        clearInterval(scrambleTimer);
        displayWord = target;
        isScrambling = false;
      }
    }, SCRAMBLE_FRAME_MS);
  }

  function handleResize() {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(() => {
      refitFixedLines();
      refitWord();
    }, 120);
  }

  onMount(() => {
    reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    const ready = (document as any).fonts?.ready ?? Promise.resolve();
    ready.then(() => {
      refitFixedLines();
      refitWord();
    });

    window.addEventListener("resize", handleResize);
    if (reduceMotion) return;
    holdTimer = setInterval(() => scrambleTo(nextWord()), HOLD_MS);
  });

  onDestroy(() => {
    clearInterval(holdTimer);
    clearInterval(scrambleTimer);
    clearTimeout(resizeTimer);
    if (typeof window !== "undefined") {
      window.removeEventListener("resize", handleResize);
    }
  });
</script>

<section id="top" class="hero-section">
  <div class="hero-grid">
    <div>
      <p class="kicker">
        Player 1 · Available now<span class="blink-cursor">_</span>
      </p>
      <h1 class="font-pixel gradient-text hero-title">
        <span aria-hidden="true">
          <span class="hero-line" bind:this={line1El}
            ><span class="hero-line-text" style="font-size: {scaleFixed1}em"
              >Hire me for</span
            ></span
          >
          <span class="hero-line" bind:this={wordLineEl}
            ><span
              class="hero-word"
              class:is-scrambling={isScrambling}
              style="font-size: {wordScale}em">{displayWord}</span
            ></span
          >
          <span class="hero-line" bind:this={line3El}
            ><span class="hero-line-text" style="font-size: {scaleFixed3}em"
              >stuff.</span
            ></span
          >
        </span>
        <span class="sr-only"
          >Hire me for web, software, and full-stack development stuff.</span
        >
      </h1>
      <p class="hero-lead">
        23 years of building things that work and fixing things that didn't. I
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
    font-size: clamp(30px, 5.4vw, 58px);
    line-height: 1.28;
    margin: 0 0 28px;
    letter-spacing: -0.01em;
  }

  .hero-line {
    display: block;
    white-space: nowrap;
  }

  .hero-line-text {
    display: inline-block;
  }

  .hero-word {
    display: inline-block;
    white-space: nowrap;
    transition: font-size 0.15s ease-out;
  }

  .hero-word.is-scrambling {
    text-shadow:
      -2px 0 var(--arcade-pink),
      2px 0 var(--arcade-blue);
  }

  .sr-only {
    position: absolute;
    width: 1px;
    height: 1px;
    padding: 0;
    margin: -1px;
    overflow: hidden;
    clip: rect(0, 0, 0, 0);
    white-space: nowrap;
    border: 0;
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
