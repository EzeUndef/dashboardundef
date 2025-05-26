import Lista from '../components/lista';

const fadenaCards = [
  {
    title: 'FFA',
    text: 'Gestión de usuarios',
    link: 'http://guarani.ffa.undef.edu.ar/app/',
    image: '/icons/ffa.svg',
    description: 'Facultad de la fuerza aérea',
  },
  {
    title: 'FFA',
    text: 'Autogestion Alumnos',
    link: 'http://autogestion.ffa.undef.edu.ar/3w/',
    image: '/icons/ffa.svg',
    description: 'Facultad de la fuerza aérea',
  },
  {
    title: 'FFA',
    text: 'Moodle FFA',
    link: 'http://moodle.ffa.undef.edu.ar/app/',
    image: '/icons/ffa.svg',
    description: 'Facultad de la fuerza aérea',
  },
  {
    title: 'FFA',
    text: 'Preinscripcion alumnos',
    link: 'http://preinscripcion.ffa.undef.edu.ar/p/',
    image: '/icons/ffa.svg',
    description: 'Facultad de la fuerza aérea',
  },
  {
    title: 'FFA',
    text: 'Testing',
    link: 'http://test.ffa.undef.edu.ar/app/',
    image: '/icons/ffa.svg',
    description: 'Facultad de la fuerza aérea',
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
    text: 'TEST ESCM',
    link: 'http://test.escm.undef.edu.ar/guarani/3.19/',
    image: '/icons/escm.svg',
    description: 'Escuela de ciencias del mar',
  },
];

export default function FadenaPage() {
  return (
    <div className="px-4 py-8 grid-cols-3 grid-rows-3">
      <Lista cards={fadenaCards} />
    </div>
  );
}
