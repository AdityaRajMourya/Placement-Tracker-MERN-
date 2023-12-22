
import React from 'react';
import { Link} from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { useMediaQuery } from 'react-responsive';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';

const Header = () => {
  const { logout, isAuthenticated } = useAuth();
  const user = JSON.parse(localStorage.getItem('user'));

  const [menuOpen, setMenuOpen] = React.useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };


  const isMobile = useMediaQuery({ maxWidth: 767 });

  return (
    <header className="bg-red-800 text-white p-4 relative">
      <div className="container mx-auto flex items-center justify-between">
        <div className="flex items-center">
          <Link to="/" className="text-2xl flex font-bold text-white">
            <img src='./images/logo.png' alt='logo' className="h-8 w-auto" />
            &nbsp; Placement Tracker
          </Link>
        </div>
        {isMobile && (
          <>
            <div className="md:hidden flex items-center">
              <button onClick={toggleMenu} className="text-white">
                <FontAwesomeIcon icon={menuOpen ? faTimes : faBars} />
              </button>
            </div>
            {menuOpen && (
              <div className="fixed top-16 right-0 h-screen bg-gray-800 bg-opacity-90 text-white p-4 overflow-y-scroll z-50 transform translate-x-0 transition-transform duration-300 ease-in-out">
                <div className="flex flex-col space-y-4">
                  <Link to="/about" onClick={toggleMenu}>
                    About
                  </Link>
                  <Link to="/faq" onClick={toggleMenu}>
                    FAQ
                  </Link>
                  <Link to="/contact" onClick={toggleMenu}>
                    Contact
                  </Link>
                  {isAuthenticated && (
                    <Link to="/dashboard" onClick={toggleMenu}>
                      Dashboard
                    </Link>
                  )}
                  {user ? (
                    <>
                      <p className="text-[#FF9EB3]">Hey, {user.name}</p>
                      <button
                        onClick={() => {
                          logout();
                          toggleMenu();
                        }}
                        className="bg-red-500 text-white px-4 py-2 rounded"
                      >
                        Logout
                      </button>
                    </>
                  ) : (
                    <>
                      <Link to="/login" onClick={toggleMenu}>
                        <button className="bg-blue-500 text-white px-4 py-2 rounded">Login</button>
                      </Link>
                      <Link to="/signup" onClick={toggleMenu}>
                        <button className="bg-green-500 text-white px-4 py-2 rounded">Signup</button>
                        </Link>
                      </>
                  )}
                </div>
              </div>
            )}
          </>
        )}

        {!isMobile && (
          <div className="flex flex-col md:flex-row md:items-center md:space-x-8">
            <Link to="/about">About</Link>
            <Link to="/faq">FAQ</Link>
            <Link to="/contact">Contact</Link>
            {isAuthenticated && (
              <Link to="/dashboard" className="text-white">
                Dashboard
              </Link>
            )}
            <div className="flex items-center space-x-4">
              {user ? (
                <>
                  <p className="text-[#FF9EB3]">Hey, {user.name}</p>
                  <button
                    onClick={logout}
                    className="bg-red-500 text-white px-4 py-2 rounded"
                  >
                    Logout
                  </button>
                </>
              ) : (
                <>
                  <Link to="/login">
                    <button className="bg-orange-500 text-white px-4 py-2 rounded">Login</button>
                  </Link>
                  <Link to="/signup">
                    <button className="bg-white text-red-500 px-4 py-2 rounded">Signup</button>
                  </Link>
                </>
              )}
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
