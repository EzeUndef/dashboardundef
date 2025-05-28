import Lista from '../components/lista';

const fadenaCards = [
  {
    title: 'UNDEF',
    text: 'Campus',
    link: 'https://campus.undef.edu.ar/',
image: '/images/undef.png',
    description: 'UNDEF',
  },
  {
    title: 'UNDEF',
    text: 'Koha',
    link: 'http://koha.undef.edu.ar/',
image: '/images/undef.png',
    description: 'UNDEF',
  },
  {
    title: 'UNDEF',
    text: 'Mantenimiento',
    link: 'https://mantenimiento.undef.edu.ar/app/',
image: '/images/undef.png',
    description: 'UNDEF',
  },
  {
    title: 'UNDEF',
    text: 'Soporte',
    link: 'https://soporte.undef.edu.ar/app/',
image: '/images/undef.png',
    description: 'UNDEF',
  },
  {
    title: 'UNDEF',
    text: 'Titulación',
    link: 'http://titulacion.undef.edu.ar/app/',
image: '/images/undef.png',
    description: 'UNDEF',
  },
  {
    title: 'UNDEF',
    text: 'Secretaría de Administración',
    link: 'http://sda.undef.ar/sda/',
image: '/images/undef.png',
    description: 'UNDEF',
  },
];

export default function FadenaPage() {
  const sortedCards = [...fadenaCards].sort((a, b) => {
    const descCompare = a.description.localeCompare(b.description);
    if (descCompare !== 0) return descCompare;
    return a.text.localeCompare(b.text);
  });

  return (
    <div className="px-4 py-8 grid-cols-3 grid-rows-3">
      <Lista cards={sortedCards} />
    </div>
  );
}

