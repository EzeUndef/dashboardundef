import Lista from '../components/lista';

const fadenaCards = [
  {
    title: 'UNDEF',
    text: 'Diaguita',
    link: 'http://diaguita.undef.ar/diaguita/',
    image: '/images/undef.png',
  },
  {
    title: 'UNDEF',
    text: 'Campus',
    link: 'https://campus.undef.edu.ar/',
    image: '/images/undef.png',
  },
  {
    title: 'UNDEF',
    text: 'Koha',
    link: 'http://koha.undef.edu.ar/',
    image: '/images/undef.png',
  },
  {
    title: 'UNDEF',
    text: 'Mantenimiento',
    link: 'https://mantenimiento.undef.edu.ar/app/',
    image: '/images/undef.png',
  },
      {
    title: 'UNDEF',
    text: 'Mapuche',
    link: 'https://mapuche.undef.ar/mapuche/',
    image: '/images/undef.png',
  },
        {
    title: 'UNDEF',
    text: 'Soporte',
    link: 'https://soporte.undef.edu.ar/app/',
    image: '/images/undef.png',
  },
          {
    title: 'UNDEF',
    text: 'Titulación',
    link: 'http://titulacion.undef.edu.ar/app/',
    image: '/images/undef.png',
  }, 
            {
    title: 'UNDEF',
    text: 'SDA',
    link: 'http://sda.undef.ar/sda/',
    image: '/images/undef.png',
  }, 
              {
    title: 'UNDEF',
    text: 'MediFamilia',
    link: 'https://medifamilia.sksolution.ar/',
    image: '/images/undef.png',
  }, 
];

export default function FadenaPage() {
  return (
    <div className="px-4 py-8 grid-cols-3 grid-rows-3">
      <Lista cards={fadenaCards} />
    </div>
  );
}
