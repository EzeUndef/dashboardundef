import Lista from '../components/lista';

const fadenaCards = [
  {
    title: 'FFA',
    text: 'Gestión de usuarios',
    link: 'http://guarani.ffa.undef.edu.ar/app/',
    image: '/images/ffa.png',
  },
  {
    title: 'FFA',
    text: 'Autogestion Alumnos',
    link: 'http://autogestion.ffa.undef.edu.ar/3w/',
    image: '/images/ffa.png',
  },
  {
    title: 'FFA',
    text: 'Moodle FFA',
    link: 'http://moodle.ffa.undef.edu.ar/app/',
    image: '/images/ffa.png',
  },
  {
    title: 'FFA',
    text: 'Preinscripcion alumnos',
    link: 'http://preinscripcion.ffa.undef.edu.ar/p/',
    image: '/images/ffa.png',
  },
      {
    title: 'FFA',
    text: 'Test FFA',
    link: 'http://test.ffa.undef.edu.ar/app/',
    image: '/images/ffa.png',
  },  
];

export default function FadenaPage() {
  return (
    <div className="px-4 py-8 grid-cols-3 grid-rows-3">
      <Lista cards={fadenaCards} />
    </div>
  );
}
