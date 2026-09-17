<script lang="ts">
  import { createEventDispatcher } from "svelte";
  import ImageSlider from "./ImageSlider.svelte";

  export let projectId: string;

  const dispatch = createEventDispatcher();

  interface ProjectData {
    title: string;
    tagline?: string;
    description: string[];
    images: string[];
    links?: { text: string; url: string }[];
  }

  const projects: Record<string, ProjectData> = {
    vision: {
      title: "Ad-Hoc Vision",
      tagline: "Facial Recognition Prototype",
      description: [
        "Ad‑Hoc Vision is an experimental prototype demonstrating a new approach to facial recognition—one centered on privacy, transparency, and modern web technology. Unlike conventional identity systems that rely on cloud‑hosted image analysis, this proof‑of‑concept runs entirely client‑side in the browser. Using GPU‑accelerated landmark detection via MediaPipe FaceLandmarker and face‑api.js, it captures facial geometry as compact 128‑dimensional vector embeddings that are stored securely—never the user’s actual photo.",
        "The prototype operates across six distinct modes, from live capture and recognition to static image and government‑ID scanning. Its design prioritizes liveness challenges (blink, head turn, mouth movement) to resist spoofing and ensure real‑person interaction. When scanning IDs, the app leverages OpenAI APIs to clean up card images, normalize lighting, and run AI‑based OCR, turning complex card visuals into structured, machine‑readable data—entirely within a controlled, user‑consented flow.",
        "This demonstration showcases the union of browser‑native computation and ethical data handling. By pairing vector embeddings with direct‑in‑browser processing, it proves that facial recognition doesn’t have to compromise security or privacy. Instead, it can remain transparent and user‑centric—an embodiment of the Creative Ad‑Hoc Solutions philosophy: smart, minimal, practical innovation built around real‑world constraints.",
      ],
      images: [
        "/img/face-static-rec.png",
        "/img/face-license-capture.jpg",
        "/img/face-capture.jpg",
        "/img/face-admin.jpg",
      ],
    },

    analytics: {
      title: "Ad‑Hoc Analytics",
      description: [
        "A minimalist, privacy‑first analytics tool. It delivers real‑time visitor and page metrics without cookies, tracking pixels, or dependency on big‑tech services.",
        "Built with React, Typescript, Postgres and cloud-edge functions, it stores your data securely and lets you retain full ownership. Its simple dashboard focuses only on what matters: visits, pages, referrers, clicks and downloads - so you can understand your traffic instantly without sifting through overwhelming datasets or privacy concerns.",
        "Installation is as easy as dropping one lightweight script tag onto your site. For developers and small teams who value autonomy and simplicity, Ad‑Hoc Analytics is analytics done right: fast, ethical, and maintenance‑free.",
      ],
      images: [
        "/img/ad-hoc-analytics.png",
        "/img/ad-hoc-analytics-session-timeline.png",
        "/img/ad-hoc-analytics-manage-site-1-code.png",
        "/img/ad-hoc-analytics-manage-site-3-delete.png",
        "/img/ad-hoc-analytics-link-activity.png",
      ],
      links: [
        {
          text: "Github Readme file",
          url: "https://github.com/micah1701/ad-hoc-analytics/blob/main/README.md",
        },
      ],
    },
    hodl: {
      title: "Ad‑Hoc Hodl",
      tagline: "Trustless peer‑to‑peer trading built on Algorand.",
      description: [
        "Ad‑Hoc Hodl is a decentralized P2P platform that lets users trade cryptocurrency directly through Algorand smart‑contract escrows — no centralized authority, no third‑party custody.",
        "It features encrypted wallet authentication, multi‑wallet integration, and live market pricing while preserving user privacy and autonomy. Every action is verifiable on‑chain, promoting trust through transparency rather than compliance bureaucracy.",
        "Designed with the same pragmatic mindset behind the entire Creative Ad‑Hoc Solutions suite, this project pairs blockchain security with web‑app simplicity: fast to deploy, easy to maintain, and aligned with the principles of open, user‑owned technology.",
      ],
      images: [
        "/img/hodl-dashboard.png",
        "/img/hodl-marketplace.png",
        "/img/hodl-offer-long.png",
        "/img/hodl-homepage.png",
      ],
    },
    api: {
      title: "Node1 API Framework",
      description: [
        "A secure, modular Node.js and TypeScript foundation designed to make backend development straightforward and future‑proof.",
        "It provides ready‑to‑use components for JWT authentication, role‑based access, encrypted key storage, request validation, and integrations with MySQL or Supabase. With clean separation between core and app layers, it encourages maintainable design and clear boundaries while keeping complexity low.",
        "Where many enterprise frameworks overwhelm developers with features and configuration, Node1 API Framework delivers an elegant, security‑first baseline. It's the backend architecture you can actually understand — designed for developers who value control, clarity, and creative problem‑solving.",
      ],
      images: [
        "/img/node1-postman-get-token.png",
        "/img/node1-github-sample.png",
        "/img/node1-postman-view-log.png",
      ],
      links: [
        {
          text: "documentation on Github",
          url: "https://github.com/micah1701/Node1/",
        },
      ],
    },
    verify: {
      title: "Ad‑Hoc Verify",
      tagline:
        "Live identity verification with a blockchain-anchored certificate of proof.",
      description: [
        "Ad‑Hoc Verify is a browser‑based identity verification service built for the moments when you need to know someone is really who they say they are — onboarding a contractor, signing a contract, granting access to something sensitive — without signing up for an enterprise KYC contract to do it. Send a person a unique link, they scan their driver's license and snap a selfie on their phone, and you get a real‑time result back through a webhook. No app to install, no account to create.",
        "Every check runs a live facial comparison between the ID photo and the selfie, cross‑validates the license's barcode against its printed data, and requires liveness challenges — a blink, a head turn — to keep bots and photos‑of‑photos out. All of it happens in the user's browser: the driver's license image never touches a server, and any optional personal details they share are encrypted in transit and auto‑purged, with true end‑to‑end encryption available for teams that supply their own RSA keys.",
        "Each completed check produces a shareable certificate at a permanent URL, with a cryptographic fingerprint anchored to the Algorand blockchain — proof that a verification happened, without exposing what was verified. It's the same instinct behind every Creative Ad‑Hoc Solutions build: solve the real trust problem, skip the bureaucracy, and don't make the user install anything to prove they're human.",
      ],
      images: [
        "/img/ad-hoc-verify-landingpage.png",
        "/img/ad-hoc-verify-phoneview.png",
        "/img/ad-hoc-verify-result-with-photo.png",
        "/img/ad-hoc-verify-certified.jpg",
      ],
      links: [
        {
          text: "live site at adhocverify.com",
          url: "https://adhocverify.com?from=creativeadhocsolutions-project-card",
        },
      ],
    },
    humblee: {
      title: "Humblee",
      tagline: "The lightweight PHP framework with a CMS built in.",
      description: [
        "Humblee is a lightweight PHP framework with a full content‑management system built directly into it — not bolted on as an afterthought. Developers get routing, controller dispatch, a readable database query layer, and encryption helpers to start from; content teams get a visual page editor, unlimited revision history, and role‑based publishing. There's deliberately no plugin marketplace: extending Humblee means writing plain PHP, not hunting for a plugin and hoping it's still maintained.",
        "Under the hood it pairs Idiorm for injection‑safe database access with libsodium's authenticated encryption — media files in storage can be encrypted individually, each with its own nonce, so decryption never depends on a database lookup. Page templates support named \"content block slots,\" letting the same block type appear multiple times in a layout without touching code, and the admin UI itself is themeable through Bulma's CSS custom properties.",
        "Open source and MIT‑licensed since 2017, Humblee is built for developers who'd rather write a controller than configure one — a clean, security‑first baseline with a CMS that doesn't get in the way, echoing the same philosophy behind Node1: architecture you can actually read.",
      ],
      images: [
        "/img/CMS-homepage.png",
        "/img/CMS-page-properties.png",
        "/img/CMS-editor-seo.png",
        "/img/CMS-media-manager.png",
        "/img/CMS-blocks-tool.png",
      ],
      links: [
        {
          text: "Github Readme file",
          url: "https://github.com/micah1701/humblee",
        },
      ],
    },
  };

  const project = projects[projectId];

  function handleClose() {
    dispatch("close");
  }

  function handleBackgroundClick(event: MouseEvent) {
    if (event.target === event.currentTarget) {
      handleClose();
    }
  }
</script>

<div
  class="project-modal"
  role="button"
  tabindex="0"
  on:click={handleBackgroundClick}
  on:keydown={(e) => e.key === "Escape" && handleClose()}
>
  <div class="project-modal-content retro-panel">
    <button
      type="button"
      class="modal-close-btn"
      on:click={handleClose}
      aria-label="Close">&times;</button
    >

    <h2 class="font-pixel modal-title">{project.title}</h2>
    {#if project.tagline}
      <p class="modal-tagline font-mono">{project.tagline}</p>
    {/if}

    <ImageSlider images={project.images} alt={project.title} />

    <div class="modal-text">
      {#each project.description as paragraph}
        <p>{paragraph}</p>
      {/each}
      {#if project.links}
        <p>
          Learn more
          {#each project.links as link, i}
            {#if i > 0},
            {/if}
            in the <a href={link.url} target="_blank">{link.text}</a>
          {/each}.
        </p>
      {/if}
    </div>
  </div>
</div>

<style>
  .project-modal {
    display: block;
    position: fixed;
    z-index: 99;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    overflow-y: auto;
    background-color: rgba(4, 6, 14, 0.88);
  }

  .project-modal-content {
    background: #0a0e1e;
    color: var(--arcade-text);
    margin: 3rem auto;
    max-width: 800px;
    padding: 1.5rem 2rem 2rem;
    position: relative;
    box-shadow: 10px 10px 0 rgba(78, 227, 211, 0.18);
  }

  .modal-close-btn {
    position: absolute;
    top: 12px;
    right: 20px;
    font-size: 1.8rem;
    color: var(--arcade-muted);
    cursor: pointer;
    background: none;
    border: none;
    line-height: 1;
    padding: 0;
  }
  .modal-close-btn:hover {
    color: var(--arcade-teal);
  }

  .modal-title {
    font-size: 18px;
    color: #ffffff;
    margin: 0.5rem 0 0.5rem;
  }
  .modal-tagline {
    color: var(--arcade-teal);
    font-size: 13px;
    margin-bottom: 1rem;
  }

  .modal-text p {
    margin-bottom: 1rem;
    line-height: 1.6;
    color: #cfd8f0;
  }

  @media (max-width: 600px) {
    .project-modal-content {
      margin: 2rem 1rem;
      padding: 1rem;
    }
  }
</style>
