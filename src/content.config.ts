import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const blog = defineCollection({
	// Load Markdown and MDX files in the `src/content/blog/` directory.
	loader: glob({ base: './src/content/blog', pattern: '**/*.{md,mdx}' }),
	// Type-check frontmatter using a schema
	schema: ({ image }) =>
		z.object({
			title: z.string(),
			description: z.string(),
			// Transform string to Date object
			pubDate: z.coerce.date(),
			updatedDate: z.coerce.date().optional(),
			heroImage: image().optional(),
		}),
});

const reading = defineCollection({
	loader: glob({ base: './src/content/reading', pattern: '**/*.{md,mdx}' }),
	schema: z.object({
		title: z.string(),
		author: z.string(),
		finishedDate: z.coerce.date().optional(),
		rating: z.number().min(1).max(5).optional(),
		category: z.enum(['non-fiction', 'fantasy', 'sci-fi', 'fiction']).optional(),
		status: z.enum(['reading', 'finished']).default('finished'),
	}),
});

export const collections = { blog, reading };
