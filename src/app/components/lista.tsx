import FacultyCard from './Cards'; // ajusta el path si está en otra carpeta
import 'bootstrap/dist/css/bootstrap.min.css';

function Dashboard() {
  const faculties = [
    {
      title: 'Autogestion EAM',
      text: 'Programas de grado y posgrado en ingeniería y tecnología.',
      image: 'images/fadena.png',
      link: 'http://autogestion.eam.undef.edu.ar/3w/',
    },
    {
      title: 'Autogestion EAM',
      text: 'Formación médica con enfoque en investigación y salud pública.',
      image: 'images/fadena.png',
      link: '',
    },
    {
      title: 'Autogestion EAM',
      text: 'Estudios jurídicos y programas en leyes y justicia.',
      image: 'images/fadena.png',
            link: '',
    },
        {
      title: 'Autogestion EAM',
      text: 'Estudios jurídicos y programas en leyes y justicia.',
      image: 'images/fadena.png',
            link: '',
    },
        {
      title: 'Autogestion EAM',
      text: 'Estudios jurídicos y programas en leyes y justicia.',
      image: 'images/fadena.png',
            link: '',
    },
            {
      title: 'Autogestion EAM',
      text: 'Estudios jurídicos y programas en leyes y justicia.',
      image: 'images/fadena.png',
            link: '',
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
  link={faculty.link || '#'}
/>

      ))}
    </div>
  );
}

export default Dashboard;
