/// <reference types="vite/client" />

declare module '*.jpg' {
    const content: string;
    export default content;
  }
  
  declare module '*.mp3' {
    const content: string;
    export default content;
  }