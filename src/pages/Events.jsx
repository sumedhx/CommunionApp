import React from "react";
import "../styles/Events.css"; // Where you'll style everything
import EventForm from "../components/EventForm";
import EventList from "../components/EventList";

const Events = () => {
  return (
    <div className="events-page">
      <h1 className="events-page-title">Events</h1>
      
      {/* Add Event Form */}
      <EventForm />

      {/* Event Listing */}
      <EventList />
    </div>
  );
};

export default Events;

