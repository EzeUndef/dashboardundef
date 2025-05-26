import Lista from '../components/lista';

const fadenaCards = [
  {
    title: 'FFA',
    text: 'Facultad de la fuerza aérea',
    link: 'http://guarani.ffa.undef.edu.ar/app/',
    image: '/icons/ffa.svg',
            description: 'Gestión de usuarios',
  },
  {
    title: 'FFA',
    text: 'Facultad de la fuerza aérea',
    link: 'http://autogestion.ffa.undef.edu.ar/3w/',
    image: '/icons/ffa.svg',
            description: 'Autogestion Alumnos'

  },
  {
    title: 'FFA',
    text: 'Facultad de la fuerza aérea',
    link: 'http://moodle.ffa.undef.edu.ar/app/',
    image: '/icons/ffa.svg',
            description: 'Moodle FFA',
  },
  {
    title: 'FFA',
    text: 'Facultad de la fuerza aérea',
    link: 'http://preinscripcion.ffa.undef.edu.ar/p/',
    image: '/icons/ffa.svg',
            description: 'Preinscripcion alumnos',
  },
      {
    title: 'FFA',
    text: 'Facultad de la fuerza aérea',
    link: 'http://test.ffa.undef.edu.ar/app/',
    image: '/icons/ffa.svg',
            description: 'Testing',
  },  
     {
    title: 'esnm',
    text: 'Escuela Naval Militar',
    link: 'http://guarani.esnm.undef.edu.ar/app/',
    image: '/icons/enm.svg',
            description: 'Gestión de usuarios',
  },
    {
    title: 'esnm',
    text: 'Escuela Naval Militar',
    link: 'http://guarani.esnm.undef.edu.ar/app/',
    image: '/icons/enm.svg',
            description: 'Autogestión Alumnos',
  },
      {
    title: 'Escuela de ciencias del mar',
text: 'Escuela de ciencias del mar',
    link: 'http://guarani.escm.undef.ar/',
    image: '/icons/escm.svg',
            description: 'Gestión de usuarios',
  },
      {
    title: 'Escuela de ciencias del mar',
text: 'Escuela de ciencias del mar',
    link: 'http://autogestion.escm.undef.edu.ar/3w/',
    image: '/icons/escm.svg',
            description: 'Autogestión Alumnos',
  },
        {
    title: 'Escuela de ciencias del mar',
text: 'Escuela de ciencias del mar',
    link: 'http://preinscripcion.escm.undef.edu.ar/p/?__o=',
    image: '/icons/escm.svg',
            description: 'Preinscripcion alumnos',
  },
        {
    title: 'Escuela de ciencias del mar',
    text: 'Escuela de ciencias del mar',
    link: 'http://test.escm.undef.edu.ar/guarani/3.19/',
    image: '/icons/escm.svg',
            description: 'TEST ESCM',
    
  },
];

export default function FadenaPage() {
  return (
    <div className="px-4 py-8 grid-cols-3 grid-rows-3">
      <Lista cards={fadenaCards} />
    </div>
  );
}
