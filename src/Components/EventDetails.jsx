import React from 'react';

const EventDetails = () => {
  // Replace with actual event data or fetch it from an API
  const event = {
    name: 'Sample Event',
    date: 'October 31, 2023',
    time: '6:00 PM - 10:00 PM',
    location: '123 Main Street, Cityville',
    description: 'Join us for a fantastic evening of fun and entertainment.',
    organizer: 'Event Planner Inc.',
    registrationLink: '#', // Replace with the actual registration link
    services: ['Catering', 'Live Music', 'Photo Booth'],
    agenda: [
      {
        time: '6:00 PM - 7:00 PM',
        session: 'Welcome Reception',
        speaker: 'John Doe',
      },
      // Add more agenda items as needed
    ],
    images: ['/event-image1.jpg', '/event-image2.jpg'], // Replace with image URLs
  };

  return (
    <div className="container mt-5">
      <h2 className="event-title">{event.name}</h2>
      <div className="event-info">
        <div className="event-info-item">
          <i className="far fa-calendar-alt"></i>
          <p className="event-detail">{event.date}</p>
        </div>
        <div className="event-info-item">
          <i className="far fa-clock"></i>
          <p className="event-detail">{event.time}</p>
        </div>
        <div className="event-info-item">
          <i className="fas fa-map-marker-alt"></i>
          <p className="event-detail">{event.location}</p>
        </div>
      </div>
      <p className="event-description">{event.description}</p>
      <p className="organizer">Organized by: {event.organizer}</p>
      <div className="services">
        <h3>Services</h3>
        <ul>
          {event.services.map((service, index) => (
            <li key={index}>{service}</li>
          ))}
        </ul>
      </div>
      <h3>Agenda</h3>
      <ul className="agenda">
        {event.agenda.map((item, index) => (
          <li key={index}>
            <span className="agenda-time">{item.time}</span>
            <span className="agenda-session">{item.session}</span>
            <span className="agenda-speaker">Speaker: {item.speaker}</span>
          </li>
        ))}
      </ul>
      <h3>Event Images</h3>
      <div className="event-images row">
        {event.images.map((image, index) => (
          <div className="col-md-6" key={index}>
            <img src={image} alt={`Event ${index + 1}`} className="img-fluid mb-3" />
          </div>
        ))}
      </div>
      <a href={event.registrationLink} className="btn btn-primary register-button">
        Register Now
      </a>
    </div>
  );
};

export default EventDetails;
