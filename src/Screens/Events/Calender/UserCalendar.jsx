import React, { useState, useEffect } from "react";
import "./Calendar.css";
import { formatDate } from "@fullcalendar/core";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";
import { Link } from "react-router-dom";
import Header from "../../../Components/header";
import Navbar from "../../../Components/Navbar";
import Footer from "../../../Components/Footer";

const LOCAL_STORAGE_KEY = "calendarEvents";

export default function Calendar2() {
  const [currentEvents, setCurrentEvents] = useState(() => {
    // Load events from localStorage on page load
    const savedEvents = localStorage.getItem(LOCAL_STORAGE_KEY);
    return savedEvents ? JSON.parse(savedEvents) : [];
  });

  useEffect(() => {
    // Synchronize events with localStorage to ensure users see the latest data
    const savedEvents = localStorage.getItem(LOCAL_STORAGE_KEY);
    if (savedEvents) {
      setCurrentEvents(JSON.parse(savedEvents));
    }
  }, []);

  return (
    <div>
      <Header />
      <Navbar />
      <div className="demo-app">
        <Sidebar currentEvents={currentEvents} />
        <div className="demo-app-main">
          <FullCalendar
            plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
            headerToolbar={{
              left: "prev,next today",
              center: "title",
              right: "dayGridMonth,timeGridWeek,timeGridDay",
            }}
            initialView="dayGridMonth"
            selectable={false} // Users cannot select dates
            editable={false} // Events are not editable
            events={currentEvents} // Load events from localStorage
            eventContent={renderEventContent} // Custom render function
          />
        </div>
      </div>
      <Footer />
    </div>
  );
}

// Render event titles as links
function renderEventContent(eventInfo) {
  return (
    <>
      <b>{eventInfo.timeText}</b>
      <i>
        <Link to="/event-list" className="title">{eventInfo.event.title}</Link>
      </i>
    </>
  );
}

// Sidebar component to display all events in a list format
function Sidebar({ currentEvents }) {
  return (
    <div className="demo-app-sidebar">
      <div className="demo-app-sidebar-section">
        <h2>All Events ({currentEvents.length})</h2>
        <ul>
          {currentEvents.map((event) => (
            <SidebarEvent key={event.id} event={event} />
          ))}
        </ul>
      </div>
    </div>
  );
}

function SidebarEvent({ event }) {
  return (
    <li key={event.id}>
      <b>
        {formatDate(event.start, {
          year: "numeric",
          month: "short",
          day: "numeric",
        })}
      </b>{" "}
      <i>{event.title}</i>
    </li>
  );
}
