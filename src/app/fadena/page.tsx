import Lista from '../components/lista';

const fadenaCards = [
  {
    title: 'Fadena',
    text: 'Fadena',
    link: 'http://guarani.fadena.undef.edu.ar/app/',
    image: '/icons/fadena.svg',
        description: 'Sistema Guaraní',
  },
  {
    title: 'Fadena',
    text: 'Fadena',
    link: 'http://autogestion.fadena.undef.edu.ar/3w/',
    image: '/icons/fadena.svg',
        description: 'Autogestión Alumnos',
  },
  {
    title: 'Fadena',
    text: 'Fadena',
    link: 'https://campus.fadena.undef.edu.ar/',
    image: '/icons/fadena.svg',
        description: 'Campus Fadena',
  },
  {
    title: 'Fadena',
    text: 'Fadena',
    link: 'http://preinscripcion.fadena.undef.edu.ar/p/',
    image: '/icons/fadena.svg',
        description: 'Preinscripción Fadena',
  },
  {
    title: 'Fadena',
    text: 'Fadena',
    link: 'http://preinscripcion.rectorado.undef.edu.ar/p/',
    image: '/icons/fadena.svg',
        description: 'Preinscripción Rectorado Fadena',
  },
  {
    title: 'Fadena',
    text: 'Fadena',
    link: 'http://sistemas.fadena.undef.edu.ar/',
    image: '/icons/fadena.svg',
        description: 'Sistemas Fadena',
  },
    {
    title: 'Fadena',
    text: 'Fadena',
    link: 'http://test.fadena.undef.edu.ar/app/',
    image: '/icons/fadena.svg',
        description: 'Testing',
  },
      {
    title: 'Fadena',
    text: 'Fadena',
    link: 'http://autogestion.rectorado.undef.edu.ar/3w/',
    image: '/icons/fadena.svg',
        description: 'Autogestión Rectorado',
  },  
];

export default function FadenaPage() {
  return (
    <div className="px-4 py-8 grid-cols-3 grid-rows-3">
      <Lista cards={fadenaCards} />
    </div>
  );
}
