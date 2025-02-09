import { Link } from "react-router-dom";

const LinksSection = ({ title, links }) => {
  return (
    <div>
      <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-wider">
        {title}
      </h3>
      <ul className="mt-4 space-y-3">
        {links.map((link) => (
          <li key={link.text}>
            <Link
              to={link.href}
              className="text-base text-gray-300 hover:text-white"
            >
              {link.text}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default LinksSection;
