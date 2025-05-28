import Lista from '../components/lista';

const fadenaCards = [
  {
    title: 'FADARA',
    text: 'Sistema Guaraní',
    link: 'http://guarani.fadara.undef.edu.ar/app/',
    image: '/icons/fadara.svg',
    description: 'FADARA',
  },
  {
    title: 'FADARA',
    text: 'Autogestión',
    link: 'http://autogestion.fadara.undef.edu.ar/3w/',
    image: '/icons/fadara.svg',
    description: 'FADARA',
  },
  {
    title: 'FADARA',
    text: 'Historia institucional',
    link: 'https://fadara.armada.mil.ar/Institucional/Historia',
    image: '/icons/fadara.svg',
    description: 'FADARA',
  },
  {
    title: 'FADARA',
    text: 'Preinscripción',
    link: 'http://preinscripcion.fadara.undef.edu.ar/p/',
    image: '/icons/fadara.svg',
    description: 'FADARA',
  },
  {
    title: 'FADARA',
    text: 'Testing',
    link: 'http://test.fadara.undef.edu.ar/app/',
    image: '/icons/fadara.svg',
    description: 'FADARA',
  },  
    {
    title: 'esnm',
    text: 'Gestión de usuarios',
    link: 'http://guarani.esnm.undef.edu.ar/app/',
    image: '/icons/enm.svg',
    description: 'Escuela Naval Militar',
  },
  {
    title: 'esnm',
    text: 'Autogestión Alumnos',
    link: 'http://guarani.esnm.undef.edu.ar/app/',
    image: '/icons/enm.svg',
    description: 'Escuela Naval Militar',
  },
  {
    title: 'Escuela de ciencias del mar',
    text: 'Gestión de usuarios',
    link: 'http://guarani.escm.undef.ar/',
    image: '/icons/escm.svg',
    description: 'Escuela de ciencias del mar',
  },
  {
    title: 'Escuela de ciencias del mar',
    text: 'Autogestión Alumnos',
    link: 'http://autogestion.escm.undef.edu.ar/3w/',
    image: '/icons/escm.svg',
    description: 'Escuela de ciencias del mar',
  },
  {
    title: 'Escuela de ciencias del mar',
    text: 'Preinscripcion alumnos',
    link: 'http://preinscripcion.escm.undef.edu.ar/p/?__o=',
    image: '/icons/escm.svg',
    description: 'Escuela de ciencias del mar',
  },
  {
    title: 'Escuela de ciencias del mar',
    text: 'Testing',
    link: 'http://test.escm.undef.edu.ar/guarani/3.19/',
    image: '/icons/escm.svg',
    description: 'Escuela de ciencias del mar',
    
  },
];

export default function FadenaPage() {
  const sortedCards = [...fadenaCards].sort((a, b) => {
    const descCompare = a.description.localeCompare(b.description);
    if (descCompare !== 0) return descCompare;
    return a.text.localeCompare(b.text);
  });

  return (
    <div className="px-4 py-8 grid-cols-3 grid-rows-3">
      <Lista cards={sortedCards} />
    </div>
  );
}

