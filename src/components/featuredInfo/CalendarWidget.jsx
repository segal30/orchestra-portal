import React from "react";
import "./calendarWidget.css";
import { formatDate } from "@fullcalendar/core";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";
import { INITIAL_EVENTS, createEventId } from "../pages/calendar/event-utils";
import googleCalendarPlugin from "@fullcalendar/google-calendar";

class CalendarWidget extends React.Component {
  state = {
    weekendsVisible: true,
    currentEvents: [],
  };

  render() {
    return (
      <div className="calendarWidget">
        <div className="calendarWidget-main">
          <FullCalendar
            plugins={[
              dayGridPlugin,
              timeGridPlugin,
              interactionPlugin,
              googleCalendarPlugin,
            ]}
            googleCalendarApiKey="AIzaSyBGnFdnQd_cr5s0eU-rOJj83ZDHEpT3ZR0"
            events={{
              googleCalendarId: "orchestraportal@gmail.com",
              className: "portal-events",
            }}
            headerToolbar={{
              left: "prev,next today",
              center: "title",
              right: "",
            }}
            height={320}
            initialView="dayGrid"
            editable={false}
            selectable={true}
            selectMirror={true}
            dayMaxEvents={true}
            weekends={this.state.weekendsVisible}
            initialEvents={INITIAL_EVENTS} // alternatively, use the `events` setting to fetch from a feed
            select={this.handleDateSelect}
            eventContent={renderEventContent} // custom render function
            eventClick={this.handleEventClick}
            eventsSet={this.handleEvents} // called after events are initialized/added/changed/removed
            /* you can update a remote database when these fire:
            eventAdd={function(){}}
            eventChange={function(){}}
            eventRemove={function(){}}
            */
          />
        </div>
      </div>
    );
  }

  handleWeekendsToggle = () => {
    this.setState({
      weekendsVisible: !this.state.weekendsVisible,
    });
  };

  //   handleDateSelect = (selectInfo) => {
  //     let title = prompt("Please enter a new title for your event");
  //     let calendarApi = selectInfo.view.calendar;

  //     calendarApi.unselect(); // clear date selection

  //     if (title) {
  //       calendarApi.addEvent({
  //         id: createEventId(),
  //         title,
  //         start: selectInfo.startStr,
  //         end: selectInfo.endStr,
  //         allDay: selectInfo.allDay,
  //       });
  //     }
  //   };

  // handleEventClick = (clickInfo) => {
  //   if (
  //     window.confirm(
  //       `Are you sure you want to delete the event '${clickInfo.event.title}'`
  //     )
  //   ) {
  //     clickInfo.event.remove();
  //   }
  // };

  // handleEvents = (events) => {
  //   this.setState({
  //     currentEvents: events,
  //   });
  // };
}

function renderEventContent(eventInfo) {
  return (
    <>
      <b>{eventInfo.timeText}</b>
      <i>{eventInfo.event.title}</i>
    </>
  );
}

function renderSidebarEvent(event) {
  return (
    <li key={event.id}>
      <b>
        {formatDate(event.start, {
          year: "numeric",
          month: "short",
          day: "numeric",
        })}
      </b>
      <i>{event.title}</i>
    </li>
  );
}

export default CalendarWidget;
