import Card from 'react-bootstrap/Card';
import 'bootstrap/dist/css/bootstrap.min.css';

interface FacultyCardProps {
  title: string;
  text: string;
  image: string;
  link: string;
}

function FacultyCard({ title, text, image, link }: FacultyCardProps) {
  return (
    <a href={link} className="no-underline">
      <div className="transition duration-150 hover:scale-105 shadow-xl bg-white dark:bg-neutral-900 text-black dark:text-white rounded-md overflow-hidden max-w-sm m-2">
        <Card className="bg-transparent border-0">
          <Card.Img variant="top" src={image} alt={title} />
          <Card.Body>
            <Card.Title className="text-xl font-bold">{title}</Card.Title>
            <Card.Text className="text-sm">{text}</Card.Text>
          </Card.Body>
        </Card>
      </div>
    </a>
  );
}


export default FacultyCard;
