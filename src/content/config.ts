import { z, defineCollection } from "astro:content";

const blog = defineCollection({
  schema: z.object({
    title: z.string(),
    date: z.date(),
    author: z.enum(["Anna Dixon", "Victoria Greenfelder", "Darnell McClure", "Luz Biggie"]),
    image: z.object({
      src: z.string(),
      alt: z.string(),
    }),
    description: z
      .string()
      .max(
        160,
        "For best SEO results, please keep the description under 160 characters."
      ),
    draft: z.boolean().default(false),
    category: z.enum(["CSS", "Reference Docs", "Astro", "General", "Nourish the Liver", "Tonify the Qi", "Syndromes"]),
  }),
});

const syndromes = defineCollection({
  schema: z.object({
    title: z.string(),
    date: z.date(),
    author: z.enum(["Anna Dixon", "Victoria Greenfelder", "Darnell McClure", "Luz Biggie"]),
    image: z.object({
      src: z.string(),
      alt: z.string(),
    }),
    description: z
      .string()
      .max(
        160,
        "For best SEO results, please keep the description under 160 characters."
      ),
    draft: z.boolean().default(false),
    category: z.enum(["CSS", "Reference Docs", "Astro", "General", "Nourish the Liver", "Tonify the Qi", "Syndromes"]),
  }),
});

export const collections = { blog, syndromes };
