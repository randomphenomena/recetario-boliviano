declare module 'astro:content' {
	interface RenderResult {
		Content: import('astro/runtime/server/index.js').AstroComponentFactory;
		headings: import('astro').MarkdownHeading[];
		remarkPluginFrontmatter: Record<string, any>;
	}
	interface Render {
		'.md': Promise<RenderResult>;
	}

	export interface RenderedContent {
		html: string;
		metadata?: {
			imagePaths: Array<string>;
			[key: string]: unknown;
		};
	}
}

declare module 'astro:content' {
	type Flatten<T> = T extends { [K: string]: infer U } ? U : never;

	export type CollectionKey = keyof AnyEntryMap;
	export type CollectionEntry<C extends CollectionKey> = Flatten<AnyEntryMap[C]>;

	export type ContentCollectionKey = keyof ContentEntryMap;
	export type DataCollectionKey = keyof DataEntryMap;

	type AllValuesOf<T> = T extends any ? T[keyof T] : never;
	type ValidContentEntrySlug<C extends keyof ContentEntryMap> = AllValuesOf<
		ContentEntryMap[C]
	>['slug'];

	/** @deprecated Use `getEntry` instead. */
	export function getEntryBySlug<
		C extends keyof ContentEntryMap,
		E extends ValidContentEntrySlug<C> | (string & {}),
	>(
		collection: C,
		// Note that this has to accept a regular string too, for SSR
		entrySlug: E,
	): E extends ValidContentEntrySlug<C>
		? Promise<CollectionEntry<C>>
		: Promise<CollectionEntry<C> | undefined>;

	/** @deprecated Use `getEntry` instead. */
	export function getDataEntryById<C extends keyof DataEntryMap, E extends keyof DataEntryMap[C]>(
		collection: C,
		entryId: E,
	): Promise<CollectionEntry<C>>;

	export function getCollection<C extends keyof AnyEntryMap, E extends CollectionEntry<C>>(
		collection: C,
		filter?: (entry: CollectionEntry<C>) => entry is E,
	): Promise<E[]>;
	export function getCollection<C extends keyof AnyEntryMap>(
		collection: C,
		filter?: (entry: CollectionEntry<C>) => unknown,
	): Promise<CollectionEntry<C>[]>;

	export function getEntry<
		C extends keyof ContentEntryMap,
		E extends ValidContentEntrySlug<C> | (string & {}),
	>(entry: {
		collection: C;
		slug: E;
	}): E extends ValidContentEntrySlug<C>
		? Promise<CollectionEntry<C>>
		: Promise<CollectionEntry<C> | undefined>;
	export function getEntry<
		C extends keyof DataEntryMap,
		E extends keyof DataEntryMap[C] | (string & {}),
	>(entry: {
		collection: C;
		id: E;
	}): E extends keyof DataEntryMap[C]
		? Promise<DataEntryMap[C][E]>
		: Promise<CollectionEntry<C> | undefined>;
	export function getEntry<
		C extends keyof ContentEntryMap,
		E extends ValidContentEntrySlug<C> | (string & {}),
	>(
		collection: C,
		slug: E,
	): E extends ValidContentEntrySlug<C>
		? Promise<CollectionEntry<C>>
		: Promise<CollectionEntry<C> | undefined>;
	export function getEntry<
		C extends keyof DataEntryMap,
		E extends keyof DataEntryMap[C] | (string & {}),
	>(
		collection: C,
		id: E,
	): E extends keyof DataEntryMap[C]
		? Promise<DataEntryMap[C][E]>
		: Promise<CollectionEntry<C> | undefined>;

	/** Resolve an array of entry references from the same collection */
	export function getEntries<C extends keyof ContentEntryMap>(
		entries: {
			collection: C;
			slug: ValidContentEntrySlug<C>;
		}[],
	): Promise<CollectionEntry<C>[]>;
	export function getEntries<C extends keyof DataEntryMap>(
		entries: {
			collection: C;
			id: keyof DataEntryMap[C];
		}[],
	): Promise<CollectionEntry<C>[]>;

	export function render<C extends keyof AnyEntryMap>(
		entry: AnyEntryMap[C][string],
	): Promise<RenderResult>;

	export function reference<C extends keyof AnyEntryMap>(
		collection: C,
	): import('astro/zod').ZodEffects<
		import('astro/zod').ZodString,
		C extends keyof ContentEntryMap
			? {
					collection: C;
					slug: ValidContentEntrySlug<C>;
				}
			: {
					collection: C;
					id: keyof DataEntryMap[C];
				}
	>;
	// Allow generic `string` to avoid excessive type errors in the config
	// if `dev` is not running to update as you edit.
	// Invalid collection names will be caught at build time.
	export function reference<C extends string>(
		collection: C,
	): import('astro/zod').ZodEffects<import('astro/zod').ZodString, never>;

	type ReturnTypeOrOriginal<T> = T extends (...args: any[]) => infer R ? R : T;
	type InferEntrySchema<C extends keyof AnyEntryMap> = import('astro/zod').infer<
		ReturnTypeOrOriginal<Required<ContentConfig['collections'][C]>['schema']>
	>;

	type ContentEntryMap = {
		"glosario": {
"achachairu.md": {
	id: "achachairu.md";
  slug: "achachairu";
  body: string;
  collection: "glosario";
  data: InferEntrySchema<"glosario">
} & { render(): Render[".md"] };
"aji-amarillo.md": {
	id: "aji-amarillo.md";
  slug: "aji-amarillo";
  body: string;
  collection: "glosario";
  data: InferEntrySchema<"glosario">
} & { render(): Render[".md"] };
"charque.md": {
	id: "charque.md";
  slug: "charque";
  body: string;
  collection: "glosario";
  data: InferEntrySchema<"glosario">
} & { render(): Render[".md"] };
"chuno.md": {
	id: "chuno.md";
  slug: "chuno";
  body: string;
  collection: "glosario";
  data: InferEntrySchema<"glosario">
} & { render(): Render[".md"] };
"huminta.md": {
	id: "huminta.md";
  slug: "huminta";
  body: string;
  collection: "glosario";
  data: InferEntrySchema<"glosario">
} & { render(): Render[".md"] };
"llajwa.md": {
	id: "llajwa.md";
  slug: "llajwa";
  body: string;
  collection: "glosario";
  data: InferEntrySchema<"glosario">
} & { render(): Render[".md"] };
"locoto.md": {
	id: "locoto.md";
  slug: "locoto";
  body: string;
  collection: "glosario";
  data: InferEntrySchema<"glosario">
} & { render(): Render[".md"] };
"mani.md": {
	id: "mani.md";
  slug: "mani";
  body: string;
  collection: "glosario";
  data: InferEntrySchema<"glosario">
} & { render(): Render[".md"] };
"mote.md": {
	id: "mote.md";
  slug: "mote";
  body: string;
  collection: "glosario";
  data: InferEntrySchema<"glosario">
} & { render(): Render[".md"] };
"quinua.md": {
	id: "quinua.md";
  slug: "quinua";
  body: string;
  collection: "glosario";
  data: InferEntrySchema<"glosario">
} & { render(): Render[".md"] };
"quirquina.md": {
	id: "quirquina.md";
  slug: "quirquina";
  body: string;
  collection: "glosario";
  data: InferEntrySchema<"glosario">
} & { render(): Render[".md"] };
"singani.md": {
	id: "singani.md";
  slug: "singani";
  body: string;
  collection: "glosario";
  data: InferEntrySchema<"glosario">
} & { render(): Render[".md"] };
};
"recetas": {
"lomo-saltado.md": {
	id: "lomo-saltado.md";
  slug: "lomo-saltado";
  body: string;
  collection: "recetas";
  data: InferEntrySchema<"recetas">
} & { render(): Render[".md"] };
"pique-macho.md": {
	id: "pique-macho.md";
  slug: "pique-macho";
  body: string;
  collection: "recetas";
  data: InferEntrySchema<"recetas">
} & { render(): Render[".md"] };
"saltena.md": {
	id: "saltena.md";
  slug: "saltena";
  body: string;
  collection: "recetas";
  data: InferEntrySchema<"recetas">
} & { render(): Render[".md"] };
"silpancho.md": {
	id: "silpancho.md";
  slug: "silpancho";
  body: string;
  collection: "recetas";
  data: InferEntrySchema<"recetas">
} & { render(): Render[".md"] };
"tacu-tacu.md": {
	id: "tacu-tacu.md";
  slug: "tacu-tacu";
  body: string;
  collection: "recetas";
  data: InferEntrySchema<"recetas">
} & { render(): Render[".md"] };
};

	};

	type DataEntryMap = {
		
	};

	type AnyEntryMap = ContentEntryMap & DataEntryMap;

	export type ContentConfig = typeof import("./../../src/content/config.js");
}
