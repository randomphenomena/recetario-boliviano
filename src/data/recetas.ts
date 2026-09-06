export interface Receta {
  slug: string;
  numero: string;
  titulo: string;
  region: string;
  dificultad: string;
  tiempo: string;
}

export const recetas: Receta[] = [
  { slug: 'silpancho', numero: '014', titulo: 'Silpancho', region: 'Valles', dificultad: 'Media', tiempo: '40 min' },
  { slug: 'pique-macho', numero: '013', titulo: 'Pique Macho', region: 'Valles', dificultad: 'Media', tiempo: '60 min' },
  { slug: 'sopa-de-mani', numero: '012', titulo: 'Sopa de Maní', region: 'Valles', dificultad: 'Alta', tiempo: '90 min' },
  { slug: 'saltena', numero: '011', titulo: 'Salteña', region: 'Altiplano', dificultad: 'Alta', tiempo: '120 min' },
  { slug: 'api-con-pastel', numero: '010', titulo: 'Api con Pastel', region: 'Altiplano', dificultad: 'Baja', tiempo: '30 min' },
  { slug: 'tacu-tacu', numero: '009', titulo: 'Tacu Tacu', region: 'Amazonía', dificultad: 'Media', tiempo: '40 min' },
  { slug: 'fricassee', numero: '008', titulo: 'Fricassee', region: 'Valles', dificultad: 'Media', tiempo: '50 min' },
  { slug: 'sonso', numero: '007', titulo: 'Sonso', region: 'Valles', dificultad: 'Baja', tiempo: '35 min' },
  { slug: 'huminta', numero: '006', titulo: 'Huminta', region: 'Valles', dificultad: 'Media', tiempo: '45 min' },
  { slug: 'chairo', numero: '005', titulo: 'Chairo', region: 'Valles', dificultad: 'Media', tiempo: '55 min' },
  { slug: 'lomo-saltado', numero: '004', titulo: 'Lomo Saltado', region: 'Valles', dificultad: 'Media', tiempo: '25 min' },
  { slug: 'aji-de-frijol', numero: '003', titulo: 'Ají de Frijol', region: 'Valles', dificultad: 'Baja', tiempo: '50 min' },
  { slug: 'charquekan', numero: '002', titulo: 'Charquekan', region: 'Altiplano', dificultad: 'Media', tiempo: '30 min' },
  { slug: 'papa-a-la-huancaína', numero: '001', titulo: 'Papa a la Huancaína', region: 'Valles', dificultad: 'Baja', tiempo: '35 min' },
];
