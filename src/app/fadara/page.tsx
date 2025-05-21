import Lista from '../components/lista';

const fadenaCards = [
  {
    title: 'Fadara',
    text: 'Gestión de usuarios',
    link: 'http://guarani.fadara.undef.edu.ar/app/',
    image: '/images/fadara.png',
  },
  {
    title: 'Fadara',
    text: 'Autogestion Alumnos',
    link: 'http://autogestion.fadara.undef.edu.ar/3w/',
    image: '/images/fadara.png'
  },
  {
    title: 'Fadara',
    text: 'Sobre Fadara',
    link: 'https://fadara.armada.mil.ar/Institucional/Historia',
    image: '/images/fadara.png'
  },
  {
    title: 'Fadara',
    text: 'Preinscripcion alumnos',
    link: 'http://preinscripcion.fadara.undef.edu.ar/p/',
    image: '/images/fadara.png'
  },
      {
    title: 'Fadara',
    text: 'Test Fadara',
    link: 'http://test.fadara.undef.edu.ar/app/',
    image: '/images/fadara.png'
  },  
];

export default function FadenaPage() {
  return (
    <div className="px-4 py-8 grid-cols-3 grid-rows-3">
      <Lista cards={fadenaCards} />
    </div>
  );
}
