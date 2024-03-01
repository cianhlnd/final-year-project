import { Link } from 'react-router-dom';
import '../styles/Home.css'

function HomePage() {
  return (
    <div>
      <button className="register">
        <Link to="/registration" style={{ color: 'white', textDecoration: 'none' }}>
          Register
        </Link>
      </button>
      <button className="login">
        <Link to="/login" style={{ color: 'white', textDecoration: 'none' }}>
          Login
        </Link>
      </button>
    </div>
  );
}

export default HomePage;