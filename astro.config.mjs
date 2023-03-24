import { defineConfig } from 'astro/config';
import node from "@astrojs/node";
import { loadEnv } from 'vite';
import auth from '@pietervdwerk/auth-astro';
import GitHub from '@auth/core/providers/github';
const env = loadEnv('production', process.cwd(), '');


// https://astro.build/config
export default defineConfig({
  output: "server",
  adapter: node({
    mode: 'standalone'
  }),
  integrations: [auth({
    providers: [GitHub({
      clientId: env.GITHUB_CLIENT_ID,
      clientSecret: env.GITHUB_CLIENT_SECRET
    })]
  })]
});