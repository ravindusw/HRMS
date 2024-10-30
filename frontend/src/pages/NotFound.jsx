import { Link } from 'react-router-dom';
import './NotFound.css';

const NotFound = () => {
  return (
    <div className="not-found-container">
      <h1 className="not-found-title">404</h1>
      <p className="not-found-message">Oops! The page you are looking for does not exist.</p>
      <Link to="/dashboard" className="not-found-link">Go Back Home</Link>
    </div>
  );
};

export default NotFound;