import Lista from '../components/lista';

const fadenaCards = [
  {
    title: 'UNDEF',
    text: 'UNDEF',
    link: 'http://diaguita.undef.ar/diaguita/',
    image: '/icons/undef.svg',
    description: 'Diaguita',
    
  },
  {
    title: 'UNDEF',
    text: 'UNDEF',
    link: 'https://campus.undef.edu.ar/',
    image: '/icons/undef.svg',
    description: 'Campus',
  },
  {
    title: 'UNDEF',
    text: 'UNDEF',
    link: 'http://koha.undef.edu.ar/',
    image: '/icons/undef.svg',
    description: 'Koha',
  },
  {
    title: 'UNDEF',
    text: 'UNDEF',
    link: 'https://mantenimiento.undef.edu.ar/app/',
    image: '/icons/undef.svg',
    description: 'Mantenimiento',
  },
      {
    title: 'UNDEF',
    text: 'UNDEF',
    link: 'https://mapuche.undef.ar/mapuche/',
    image: '/icons/undef.svg',
    description: 'Mapuche',
  },
        {
    title: 'UNDEF',
    text: 'UNDEF',
    link: 'https://soporte.undef.edu.ar/app/',
    image: '/icons/undef.svg',
    description: 'Soporte',
  },
          {
    title: 'UNDEF',
    text: 'UNDEF',
    link: 'http://titulacion.undef.edu.ar/app/',
    image: '/icons/undef.svg',
    description: 'Titulación',
  }, 
            {
    title: 'UNDEF',
    text: 'UNDEF',
    link: 'http://sda.undef.ar/sda/',
    image: '/icons/undef.svg',
    description: 'Secretaría de Administración',
  }, 
              {
    title: 'UNDEF',
    text: 'UNDEF',
    link: 'https://medifamilia.sksolution.ar/',
    image: '/icons/undef.svg',
    description: 'MediFamilia',
  }, 
];

export default function FadenaPage() {
  return (
    <div className="px-4 py-8 grid-cols-3 grid-rows-3">
      <Lista cards={fadenaCards} />
    </div>
  );
}
