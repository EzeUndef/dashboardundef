/* eslint-disable @next/next/no-img-element */
interface FacultyCardProps {
  title: string;
  text: string;
  image: string;
  link: string;
}

function FacultyCard({ title, text, image, link }: FacultyCardProps) {
  return (
    <a href={link} className="no-underline">
      <div className="bg-gray-100 dark:bg-neutral-800 text-black dark:text-white rounded-xl border border-gray-300 dark:border-neutral-700 shadow-2xl p-4 hover:scale-105 transition-transform duration-200">
        {/* Icono pequeño */}
        <img src={image} alt={title} className="w-16 h-16 mx-auto mb-2" />

        {/* Nombre de la escuela */}
        <h3 className="text-center text-sm font-semibold">{title}</h3>

        {/* Descripción */}
        <p className="text-center text-xs mt-2">{text}</p>
      </div>
    </a>
  );
}

export default FacultyCard;
