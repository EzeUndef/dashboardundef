import Lista from '../components/lista';

const fadenaCards = [
  {
    title: 'FMC',
    text: 'Gestión de usuarios',
    link: 'http://guarani.fmc.undef.edu.ar/app/',
    image: '/icons/fmc.svg',
    description: 'Facultad militar conjunta',
  },
  {
    title: 'FMC',
    text: 'Autogestion Alumnos',
    link: 'http://autogestion.fmc.undef.edu.ar/3w/',
    image: '/icons/fmc.svg',
    description: 'Facultad militar conjunta',
  },
  {
    title: 'FMC',
    text: 'Preinscripcion alumnos',
    link: 'http://preinscripcion.fmc.undef.edu.ar/p/',
    image: '/icons/fmc.svg',
    description: 'Facultad militar conjunta',
  },
  {
    title: 'FMC',
    text: 'Test FMC',
    link: 'http://test.fmc.undef.edu.ar/app/',
    image: '/icons/fmc.svg',
    description: 'Facultad militar conjunta',
  },  
];

export default function FadenaPage() {
  return (
    <div className="px-4 py-8 grid-cols-3 grid-rows-3">
      <Lista cards={fadenaCards} />
    </div>
  );
}
