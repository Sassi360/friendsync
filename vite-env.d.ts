/// <reference types="vite/client" />

interface Envs {
  readonly VITE_SUPABASE_ANON_KEY: string;
  readonly VITE_SUPABASE_URL: string;
  readonly VITE_SENTRY_KEY: string;
  readonly VITE_SENTRY_ENV: string;
  readonly VITE_SENTRY_AUTH_TOKEN: string;

  PORT: string;
  NODE_ENV: "development" | "staging" | "production";
  ANALYZE?: "true";
}

interface ImportMetaEnv extends Envs {}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}

declare namespace NodeJS {
  export interface ProcessEnv extends Envs {}
}
