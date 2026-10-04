import { defineCollection } from "astro:content";
import { glob } from "astro/loaders";
import { z } from "astro/zod";

function removeDupsAndLowerCase(array: string[]) {
	return [...new Set(array.map((str) => str.toLowerCase()))];
}

const titleSchema = z.string().max(60);

const baseSchema = z.object({
	title: titleSchema,
});

const post = defineCollection({
	loader: glob({ base: "./content/posts", pattern: "**/*.{md,mdx}" }),
	schema: ({ image }) =>
		baseSchema.extend({
			description: z.string(),
			coverImage: z
				.object({
					alt: z.string(),
					src: image(),
				})
				.optional(),
			draft: z.boolean().default(false),
			ogImage: z.string().optional(),
			tags: z.array(z.string()).default([]).transform(removeDupsAndLowerCase),
			publishDate: z
				.string()
				.or(z.date())
				.transform((val) => new Date(val)),
			updatedDate: z
				.string()
				.optional()
				.transform((str) => (str ? new Date(str) : undefined)),
			pinned: z.boolean().default(false),
		}),
});

const tag = defineCollection({
	loader: glob({ base: "./content/tags", pattern: "**/*.{md,mdx}" }),
	schema: z.object({
		title: titleSchema.optional(),
		description: z.string().optional(),
	}),
});

// Unlisted teaching pages: served under /teaching/, never linked from the nav,
// the homepage, the sitemap or search. `noindex` also keeps a page out of search engines.
const teaching = defineCollection({
	loader: glob({ base: "./content/teaching", pattern: "**/*.{md,mdx}" }),
	schema: baseSchema.extend({
		description: z.string(),
		// the course's own branding, shown beside steve.engineer's at the top of the page
		course: z.string().optional(),
		partnerLogo: z
			.object({ src: z.string(), alt: z.string(), href: z.string().optional() })
			.optional(),
		toc: z.boolean().default(false),
		noindex: z.boolean().default(false),
	}),
});

export const collections = { post, tag, teaching };
