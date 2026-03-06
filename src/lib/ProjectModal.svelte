<script lang="ts">
  import { createEventDispatcher } from 'svelte';
  import ImageSlider from './ImageSlider.svelte';

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
    vision : {
      title: 'Ad-Hoc Vision',
      tagline: 'Facial Recognition Prototype',
      description: [
        'Ad‑Hoc Vision is an experimental prototype demonstrating a new approach to facial recognition—one centered on privacy, transparency, and modern web technology. Unlike conventional identity systems that rely on cloud‑hosted image analysis, this proof‑of‑concept runs entirely client‑side in the browser. Using GPU‑accelerated landmark detection via MediaPipe FaceLandmarker and face‑api.js, it captures facial geometry as compact 128‑dimensional vector embeddings that are stored securely—never the user’s actual photo.',
        'The prototype operates across six distinct modes, from live capture and recognition to static image and government‑ID scanning. Its design prioritizes liveness challenges (blink, head turn, mouth movement) to resist spoofing and ensure real‑person interaction. When scanning IDs, the app leverages OpenAI APIs to clean up card images, normalize lighting, and run AI‑based OCR, turning complex card visuals into structured, machine‑readable data—entirely within a controlled, user‑consented flow.',
        'This demonstration showcases the union of browser‑native computation and ethical data handling. By pairing vector embeddings with direct‑in‑browser processing, it proves that facial recognition doesn’t have to compromise security or privacy. Instead, it can remain transparent and user‑centric—an embodiment of the Creative Ad‑Hoc Solutions philosophy: smart, minimal, practical innovation built around real‑world constraints.'
      ],
      images: ['/img/face-static-rec.png',
               '/img/face-license-capture.jpg'
              ],
      links: [],
    },
    
    analytics: {
      title: 'Ad‑Hoc Analytics',
      description: [
        'A minimalist, privacy‑first analytics tool. It delivers real‑time visitor and page metrics without cookies, tracking pixels, or dependency on big‑tech services.',
        'Built with React, Typescript, Postgres and cloud-edge functions, it stores your data securely and lets you retain full ownership. Its simple dashboard focuses only on what matters: visits, pages, referrers, clicks and downloads - so you can understand your traffic instantly without sifting through overwhelming datasets or privacy concerns.',
        'Installation is as easy as dropping one lightweight script tag onto your site. For developers and small teams who value autonomy and simplicity, Ad‑Hoc Analytics is analytics done right: fast, ethical, and maintenance‑free.'
      ],
      images: [
        '/img/ad-hoc-analytics.png',
        '/img/ad-hoc-analytics-session-timeline.png',
        '/img/ad-hoc-analytics-manage-site-1-code.png',
        '/img/ad-hoc-analytics-manage-site-3-delete.png',
        '/img/ad-hoc-analytics-link-activity.png'
      ],
      links: [
        { text: 'Github Readme file', url: 'https://github.com/micah1701/ad-hoc-analytics/blob/main/README.md' }
      ]
    },
    hodl: {
      title: 'Ad‑Hoc Hodl',
      tagline: 'Trustless peer‑to‑peer trading built on Algorand.',
      description: [
        'Ad‑Hoc Hodl is a decentralized P2P platform that lets users trade cryptocurrency directly through Algorand smart‑contract escrows — no centralized authority, no third‑party custody.',
        'It features encrypted wallet authentication, multi‑wallet integration, and live market pricing while preserving user privacy and autonomy. Every action is verifiable on‑chain, promoting trust through transparency rather than compliance bureaucracy.',
        'Designed with the same pragmatic mindset behind the entire Creative Ad‑Hoc Solutions suite, this project pairs blockchain security with web‑app simplicity: fast to deploy, easy to maintain, and aligned with the principles of open, user‑owned technology.'
      ],
      images: [
        '/img/hodl-dashboard.png',
        '/img/hodl-marketplace.png',
        '/img/hodl-offer-long.png',
        '/img/hodl-homepage.png'
      ]
    },
    api: {
      title: 'Node1 API Framework',
      description: [
        'A secure, modular Node.js and TypeScript foundation designed to make backend development straightforward and future‑proof.',
        'It provides ready‑to‑use components for JWT authentication, role‑based access, encrypted key storage, request validation, and integrations with MySQL or Supabase. With clean separation between core and app layers, it encourages maintainable design and clear boundaries while keeping complexity low.',
        'Where many enterprise frameworks overwhelm developers with features and configuration, Node1 API Framework delivers an elegant, security‑first baseline. It\'s the backend architecture you can actually understand — designed for developers who value control, clarity, and creative problem‑solving.'
      ],
      images: [
        '/img/node1-postman-get-token.png',
        '/img/node1-github-sample.png',
        '/img/node1-postman-view-log.png'
      ],
      links: [
        { text: 'documentation on Github', url: 'https://github.com/micah1701/Node1/' }
      ]
    }
  };

  const project = projects[projectId];

  function handleClose() {
    dispatch('close');
  }

  function handleBackgroundClick(event: MouseEvent) {
    if (event.target === event.currentTarget) {
      handleClose();
    }
  }
</script>

<div class="modal" on:click={handleBackgroundClick}>
  <div class="modal-content">
    <span class="close-btn" on:click={handleClose}>&times;</span>

    <h2>{project.title}</h2>
    {#if project.tagline}
      <p class="tagline">{project.tagline}</p>
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
            {#if i > 0}, {/if}
            in the <a href={link.url} target="_blank">{link.text}</a>
          {/each}.
          
        </p>
      {/if}
    </div>
  </div>
</div>
