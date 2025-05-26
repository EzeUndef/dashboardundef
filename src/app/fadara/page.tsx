import Lista from '../components/lista';

const fadenaCards = [
  {
    title: 'FADARA',
    text: 'FADARA',
    link: 'http://guarani.fadara.undef.edu.ar/app/',
    image: '/icons/fadara.svg',
    description: 'Sistema Guaraní',
  },
  {
    title: 'FADARA',
    text: 'FADARA',
    link: 'http://autogestion.fadara.undef.edu.ar/3w/',
    image: '/icons/fadara.svg',
        description: 'Autogestión',
  },
  {
    title: 'FADARA',
    text: 'FADARA',
    link: 'https://fadara.armada.mil.ar/Institucional/Historia',
    image: '/icons/fadara.svg',
        description: 'Historia institucional',
  },
  {
    title: 'FADARA',
    text: 'FADARA',
    link: 'http://preinscripcion.fadara.undef.edu.ar/p/',
    image: '/icons/fadara.svg',
        description: 'Preinscripción',
  },
  {
    title: 'FADARA',
    text: 'FADARA',
    link: 'http://test.fadara.undef.edu.ar/app/',
    image: '/icons/fadara.svg',
        description: 'Testing',
  },  
  {
    title: 'EAM',
    text: 'Escuela de Aviación Militar',
    link: 'http://guarani.eam.undef.edu.ar/app/',
    image: '/icons/eam.svg',
        description: 'Sistema Guaraní',
  },
  {
    title: 'EAM',
    text: 'Escuela de Aviación Militar',
    link: 'http://autogestion.eam.undef.edu.ar/3w/',
    image: '/icons/eam.svg',
        description: 'Autogestión',
  },
  {
    title: 'EAM',
    text: 'Escuela de Aviación Militar',
    link: 'http://preinscripcion.eam.undef.edu.ar/p/',
    image: '/icons/eam.svg',
        description: 'Preinscripción',
  },
];

export default function FadenaPage() {
  return (
    <div className="px-4 py-8">
      <Lista cards={fadenaCards} />
    </div>
  );
}
