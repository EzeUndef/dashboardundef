import Lista from '../components/lista';

const fadenaCards = [
  {
    title: 'EAM',
    text: 'Gestión de usuarios',
    link: 'http://guarani.eam.undef.edu.ar/app/',
    image: '/images/eam.png',
  },
  {
    title: 'EAM',
    text: 'Autogestion Alumnos',
    link: 'http://autogestion.eam.undef.edu.ar/3w/',
    image: '/images/eam.png',
  },
  {
    title: 'EAM',
    text: 'Preinscripcion alumnos',
    link: 'http://preinscripcion.eam.undef.edu.ar/p/',
    image: '/images/eam.png',
  },
    {
    title: 'esnm',
    text: 'Gestión de usuarios',
    link: 'http://guarani.esnm.undef.edu.ar/app/',
    image: '/images/esnm.jpg',
  },
    {
    title: 'esnm',
    text: 'Autogestion Alumnos',
    link: 'http://guarani.esnm.undef.edu.ar/app/',
    image: '/images/esnm.jpg',
  },
      {
    title: 'ESCM',
    text: 'Gestión de usuarios',
    link: '#',
    image: '/images/escm.png',
  },
      {
    title: 'ESCM',
    text: 'Autogestion Alumnos',
    link: '#',
    image: '/images/escm.png',
  },
        {
    title: 'ESCM',
    text: 'Preinscripcion alumnos',
    link: '#',
    image: '/images/escm.png',
  },
        {
    title: 'ESCM',
    text: 'TEST ESCM',
    link: '#',
    image: '/images/escm.png',
    
  },
];

export default function FadenaPage() {
  return (
    <div className="px-4 py-8 grid-cols-3 grid-rows-3">
      <Lista cards={fadenaCards} />
    </div>
  );
}
