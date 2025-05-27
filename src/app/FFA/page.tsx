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
    <div className="px-4 py-8 grid-cols-3 grid-rows-3">
      <Lista cards={fadenaCards} />
    </div>
  );
}
