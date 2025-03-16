import React, { useState, useEffect } from "react";
import { collection, onSnapshot, query, orderBy } from "firebase/firestore";
import { db } from "../firebase";

const EventList = () => {
  const [events, setEvents] = useState([]);
  const [filteredEvents, setFilteredEvents] = useState([]);
  const [category, setCategory] = useState("All");

  useEffect(() => {
    const q = query(collection(db, "events"), orderBy("date", "asc"));

    const unsubscribe = onSnapshot(q, (snapshot) => {
      const eventList = snapshot.docs.map((doc) => {
        const eventData = doc.data();
        return {
          id: doc.id,
          ...eventData,
          date:
            eventData.date instanceof Object && eventData.date.toDate
              ? eventData.date.toDate()
              : new Date(eventData.date),
        };
      });

      setEvents(eventList);
      setFilteredEvents(eventList);
    });

    return () => unsubscribe();
  }, []);

  const filterEvents = (cat) => {
    setCategory(cat);
    if (cat === "All") {
      setFilteredEvents(events);
    } else {
      setFilteredEvents(events.filter((event) => event.category === cat));
    }
  };

  return (
    <div className="event-list-container">
      <div className="filter-buttons">
        <button onClick={() => filterEvents("All")} className="filter-btn">
          All
        </button>
        <button onClick={() => filterEvents("Religious")} className="filter-btn">
          Religious
        </button>
        <button onClick={() => filterEvents("Social")} className="filter-btn">
          Social
        </button>
        <button onClick={() => filterEvents("Charity")} className="filter-btn">
          Charity
        </button>
      </div>

      <div className="event-list">
        {filteredEvents.map((event) => (
          <div className="event-card" key={event.id}>
            <h3 className="event-title">{event.title}</h3>
            <p className="event-date-location">
              {event.date.toLocaleDateString()} - {event.location}
            </p>
            <p className="event-description">{event.description}</p>
            <p className="event-category">Category: {event.category}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default EventList;