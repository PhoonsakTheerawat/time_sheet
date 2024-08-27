import { Link } from "react-router-dom";

const LinkPage = ({text, link}) => {
    return (
      <Link
        className="bg-neutral-900 text-white rounded-3xl px-6 py-2"
        to={link}
      >
        {text}
      </Link>
    );
  };
  
  export default LinkPage;
  