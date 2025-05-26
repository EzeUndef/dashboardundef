import Lista from '../components/lista';

const fadenaCards = [
  {
    title: 'FMC',
    text: 'Facultad militar conjunta',
    link: 'http://guarani.fmc.undef.edu.ar/app/',
    image: '/icons/fmc.svg',
            description: 'Gestión de usuarios',
  },
  {
    title: 'FMC',
    text: 'Facultad militar conjunta',
    link: 'http://autogestion.fmc.undef.edu.ar/3w/',
    image: '/icons/fmc.svg',
            description: 'Autogestion Alumnos',
  },
  {
    title: 'FMC',
    text: 'Facultad militar conjunta',
    link: 'http://preinscripcion.fmc.undef.edu.ar/p/',
    image: '/icons/fmc.svg',
            description: 'Preinscripcion alumnos',
  },
      {
    title: 'FMC',
    text: 'Facultad militar conjunta',
    link: 'http://test.fmc.undef.edu.ar/app/',
        image: '/icons/fmc.svg',
            description: 'Test FMC',
  },  
];

export default function FadenaPage() {
  return (
    <div className="px-4 py-8 grid-cols-3 grid-rows-3">
      <Lista cards={fadenaCards} />
    </div>
  );
}
