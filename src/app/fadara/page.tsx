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
    title: 'EAM',
    text: 'Sistema Guaraní',
    link: 'http://guarani.eam.undef.edu.ar/app/',
    image: '/icons/eam.svg',
    description: 'Escuela de Aviación Militar',
  },
  {
    title: 'EAM',
    text: 'Autogestión',
    link: 'http://autogestion.eam.undef.edu.ar/3w/',
    image: '/icons/eam.svg',
    description: 'Escuela de Aviación Militar',
  },
  {
    title: 'EAM',
    text: 'Preinscripción',
    link: 'http://preinscripcion.eam.undef.edu.ar/p/',
    image: '/icons/eam.svg',
    description: 'Escuela de Aviación Militar',
  },
];

export default function FadenaPage() {
  return (
    <div className="px-4 py-8">
      <Lista cards={fadenaCards} />
    </div>
  );
}
