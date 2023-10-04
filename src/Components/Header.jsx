import React from 'react';
import { Link } from 'react-router-dom'; // Assuming you're using React Router

const Header = () => {
  // Replace these with your branding/logo and navigation links
  const logoUrl = ('https://unsplash.com/photos/a-purple-light-is-shining-on-a-black-background-wjUlA0Dp8g4');
  const navLinks = [
    { title: 'Home', url: '/' },
    { title: 'Events', url: '/events' },
    { title: 'Vendors', url: '/vendors' },
    { title: 'Profile', url: '/profile' },
  ];

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
      <div className="container">
        {/* Logo/Branding */}
        <Link to="/" className="navbar-brand">
          <img src={logoUrl} alt="EventPlanner Logo" className="logo" />
        </Link>

        {/* Hamburger Menu (for small screens) */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Navigation Links */}
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            {navLinks.map((link, index) => (
              <li className="nav-item" key={index}>
                <Link to={link.url} className="nav-link">
                  {link.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;
