import React from 'react';

const EventListing = () => {
  // Dummy event data (you can replace this with real data from an API or database)
  const events = [
    {
      id: 1,
      name: 'Glamour Gala',
      date: '2023-10-20',
      time: '6:00 PM',
      location: 'Elegant Ballroom',
      description:
        'Experience a night of elegance and glamour at our annual gala event.',
      image: 'event1.jpg',
    },
    // Add more event objects here
  ];

  return (
    <div className="container mt-5">
      <h2 className="text-center mb-4">Upcoming Events</h2>
      <div className="row">
        {events.map((event) => (
          <div className="col-md-4 mb-4" key={event.id}>
            <div className="card rounded-lg shadow-lg">
              <img
                src={event.image}
                className="card-img-top rounded-top"
                alt={event.name}
              />
              <div className="card-body">
                <h5 className="card-title text-primary">{event.name}</h5>
                <p className="card-text">
                  <strong>Date:</strong> {event.date} <br />
                  <strong>Time:</strong> {event.time} <br />
                  <strong>Location:</strong> {event.location}
                </p>
                <p className="card-text">{event.description}</p>
                <a href="#" className="btn btn-primary btn-block">
                  Learn More
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default EventListing;
