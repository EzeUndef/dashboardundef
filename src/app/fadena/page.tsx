import Lista from '../components/lista';

const fadenaCards = [
  {
    title: 'Fadena',
    text: 'Sistema Guaraní',
    link: 'http://guarani.fadena.undef.edu.ar/app/',
image: '/images/fadena.png',
    description: 'Fadena',
  },
  {
    title: 'Fadena',
    text: 'Autogestión Alumnos',
    link: 'http://autogestion.fadena.undef.edu.ar/3w/',
image: '/images/fadena.png',
    description: 'Fadena',
  },
  {
    title: 'Fadena',
    text: 'Campus Fadena',
    link: 'https://campus.fadena.undef.edu.ar/',
image: '/images/fadena.png',
    description: 'Fadena',
  },
  {
    title: 'Fadena',
    text: 'Preinscripción Fadena',
    link: 'http://preinscripcion.fadena.undef.edu.ar/p/',
image: '/images/fadena.png',
    description: 'Fadena',
  },
  {
    title: 'Fadena',
    text: 'Preinscripción Rectorado',
    link: 'http://preinscripcion.rectorado.undef.edu.ar/p/',
image: '/images/fadena.png',
    description: 'Fadena',
  },
  {
    title: 'Fadena',
    text: 'Sistemas Fadena',
    link: 'http://sistemas.fadena.undef.edu.ar/',
image: '/images/fadena.png',
    description: 'Fadena',
  },
  {
    title: 'Fadena',
    text: 'Testing',
    link: 'http://test.fadena.undef.edu.ar/app/',
image: '/images/fadena.png',
    description: 'Fadena',
  },
  {
    title: 'Fadena',
    text: 'Autogestión Rectorado',
    link: 'http://autogestion.rectorado.undef.edu.ar/3w/',
image: '/images/fadena.png',
    description: 'Fadena',
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

