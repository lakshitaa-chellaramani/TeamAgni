import React, { Component } from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showEventModal: false,
      eventTitle: '',
      eventDate: '',
      eventTime: '',
      events: [],
    };
  }

  handleDateClick = (arg) => {
    this.setState({
      showEventModal: true,
      eventDate: arg.dateStr,
    });
  };

  handleEventModalClose = () => {
    this.setState({
      showEventModal: false,
      eventTitle: '',
      eventDate: '',
      eventTime: '',
    });
  };

  handleEventSave = () => {
    const { eventTitle, eventDate, eventTime } = this.state;
    const newEvent = {
      title: eventTitle,
      start: `${eventDate}T${eventTime}`,
    };
    this.setState((prevState) => ({
      events: [...prevState.events, newEvent],
    }));
    this.handleEventModalClose();
  };

  render() {
    return (
      <div className="App">
        <FullCalendar
          plugins={[dayGridPlugin]}
          initialView="dayGridMonth"
          headerToolbar={{
            left: 'prev,next today',
            center: 'title',
            right: 'dayGridMonth,dayGridWeek,dayGridDay',
          }}
          editable={true}
          eventLimit={true}
          events={this.state.events}
          dateClick={this.handleDateClick}
        />

        <Modal show={this.state.showEventModal} onHide={this.handleEventModalClose}>
          <Modal.Header closeButton>
            <Modal.Title>Create Event</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form>
              <Form.Group controlId="eventTitle">
                <Form.Label>Event Title</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter event title"
                  value={this.state.eventTitle}
                  onChange={(e) => this.setState({ eventTitle: e.target.value })}
                />
              </Form.Group>
              <Form.Group controlId="eventTime">
                <Form.Label>Event Time</Form.Label>
                <Form.Control
                  type="time"
                  placeholder="Enter event time"
                  value={this.state.eventTime}
                  onChange={(e) => this.setState({ eventTime: e.target.value })}
                />
              </Form.Group>
            </Form>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={this.handleEventModalClose}>
              Cancel
            </Button>
            <Button variant="primary" onClick={this.handleEventSave}>
              Save Event
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
    );
  }
}

export default App;
