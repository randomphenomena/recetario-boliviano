import { defineCollection, z } from 'astro:content';

const recetasCollection = defineCollection({
  type: 'content',
  schema: z.object({
    numero: z.string(),
    titulo: z.string(),
    subtitulo: z.string(),
    tiempo: z.string(),
    porciones: z.string(),
    ingredientes: z.array(z.object({
      name: z.string(),
      amount: z.string(),
    })),
    metodo: z.array(z.object({
      text: z.string(),
    })),
    sustitutos: z.array(z.object({
      original: z.string(),
      substitute: z.string(),
    })).optional().default([]),
    notas: z.string().optional(),
  }),
});

const glosarioCollection = defineCollection({
  type: 'content',
  schema: z.object({
    termino: z.string(),
    sustituto: z.string().optional(),
  }),
});

export const collections = {
  recetas: recetasCollection,
  glosario: glosarioCollection,
};
