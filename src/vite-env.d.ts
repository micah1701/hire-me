/// <reference types="svelte" />
/// <reference types="vite/client" />

interface Window {
  analytics?: {
    trackDownload: (path: string, label: string) => void;
  };
}
