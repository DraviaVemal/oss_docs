/**
 * Shared Astro content-collection wiring for the Starlight docs sites in this
 * repository (openxml-office, tauri-remote-ui, xml_rs).
 *
 * This is a TECHNICAL resource, not documentation content. Each project keeps a
 * thin `src/content.config.ts` that re-exports from here:
 *
 *  - Versioned sites (use `starlight-versions`) re-export `versionedCollections`.
 *  - Single-version sites re-export `collections`.
 *
 * Project-specific *content* still lives under each project's
 * `src/content/docs/**` and is intentionally NOT shared.
 */
import { defineCollection } from 'astro:content';
import { docsLoader } from '@astrojs/starlight/loaders';
import { docsSchema } from '@astrojs/starlight/schema';
import { docsVersionsLoader } from 'starlight-versions/loader';

/** Collections for a single-version Starlight site (no version dropdown). */
export const collections = {
	docs: defineCollection({ loader: docsLoader(), schema: docsSchema() }),
};

/** Collections for a Starlight site that uses the `starlight-versions` plugin. */
export const versionedCollections = {
	...collections,
	versions: defineCollection({ loader: docsVersionsLoader() }),
};
