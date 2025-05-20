import FacultyCard from './Cards'; // ajusta el path si está en otra carpeta
import 'bootstrap/dist/css/bootstrap.min.css';

function Dashboard() {
  const faculties = [
    {
      title: 'Facultad de la Defensa',
      text: 'Programas de grado y posgrado en ingeniería y tecnología.',
      image: 'images/fadena.png',
    },
    {
      title: 'Facultad del Ejército',
      text: 'Formación médica con enfoque en investigación y salud pública.',
      image: 'images/fadena.png',
    },
    {
      title: 'Facultad de la Fuerza Aérea',
      text: 'Estudios jurídicos y programas en leyes y justicia.',
      image: 'images/fadena.png',
    },
        {
      title: 'Facultad Militar Conjunta',
      text: 'Estudios jurídicos y programas en leyes y justicia.',
      image: 'images/fadena.png',
    },
        {
      title: 'Centro Regional Universitario Córdoba - IUA',
      text: 'Estudios jurídicos y programas en leyes y justicia.',
      image: 'images/fadena.png',
    },
            {
      title: 'Facultad de Ingeniería del Ejército',
      text: 'Estudios jurídicos y programas en leyes y justicia.',
      image: 'images/fadena.png',
    },
  ];

  return (
    <div className="d-flex flex-wrap justify-content-center">
      {faculties.map((faculty, index) => (
        <FacultyCard
          key={index}
          title={faculty.title}
          text={faculty.text}
          image={faculty.image}
        />
      ))}
    </div>
  );
}

export default Dashboard;
