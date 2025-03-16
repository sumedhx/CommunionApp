import React, { useState } from "react";
import { collection, addDoc } from "firebase/firestore";
import { db } from "../firebase";

const EventForm = () => {
  const [title, setTitle] = useState("");
  const [date, setDate] = useState("");
  const [location, setLocation] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("Religious");

  const handleSubmit = async (e) => {
    e.preventDefault();
    await addDoc(collection(db, "events"), {
      title,
      date,
      location,
      description,
      category,
    });

    // Reset fields
    setTitle("");
    setDate("");
    setLocation("");
    setDescription("");
    setCategory("Religious");
  };

  return (
    <form onSubmit={handleSubmit} className="add-event-form">
      <h2 className="add-event-title">Add New Event</h2>

      <input
        type="text"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        required
        className="add-event-input"
      />

      <input
        type="date"
        value={date}
        onChange={(e) => setDate(e.target.value)}
        required
        className="add-event-input"
      />

      <input
        type="text"
        placeholder="Location"
        value={location}
        onChange={(e) => setLocation(e.target.value)}
        required
        className="add-event-input"
      />

      <textarea
        placeholder="Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        required
        className="add-event-textarea"
      />

      <select
        value={category}
        onChange={(e) => setCategory(e.target.value)}
        className="add-event-select"
      >
        <option value="Religious">Religious</option>
        <option value="Social">Social</option>
        <option value="Charity">Charity</option>
      </select>

      <button type="submit" className="add-event-button">Add Event</button>
    </form>
  );
};

export default EventForm;
