import Lista from '../components/lista';

const fadenaCards = [
  {
    title: 'Fadena',
    text: 'Gestión de usuarios',
    link: 'http://guarani.fadena.undef.edu.ar/app/',
    image: '/images/fadena.png',
  },
  {
    title: 'Fadena',
    text: 'Autogestion Alumnos',
    link: 'http://autogestion.fadena.undef.edu.ar/3w/',
    image: '/images/fadena.png'
  },
  {
    title: 'Fadena',
    text: 'Autogestion Rectorado',
    link: 'http://autogestion.rectorado.undef.edu.ar/3w/',
    image: '/images/fadena.png'
  },
  {
    title: 'Fadena',
    text: 'Sobre Fadena',
    link: 'https://campus.fadena.undef.edu.ar/',
    image: '/images/fadena.png'
  },
  {
    title: 'Fadena',
    text: 'Preinscripcion alumnos',
    link: 'http://preinscripcion.fadena.undef.edu.ar/p/',
    image: '/images/fadena.png'
  },
  {
    title: 'Fadena',
    text: 'Preinscripcion Rectorado',
    link: 'http://preinscripcion.rectorado.undef.edu.ar/p/',
    image: '/images/fadena.png'
  },
    {
    title: 'Fadena',
    text: 'Sistemas Fadena',
    link: 'http://sistemas.fadena.undef.edu.ar/',
    image: '/images/fadena.png'
  },
      {
    title: 'Fadena',
    text: 'Test Fadena',
    link: 'http://test.fadena.undef.edu.ar/app/',
    image: '/images/fadena.png'
  },  
];

export default function FadenaPage() {
  return (
    <div className="px-4 py-8 grid-cols-3 grid-rows-3">
      <Lista cards={fadenaCards} />
    </div>
  );
}
