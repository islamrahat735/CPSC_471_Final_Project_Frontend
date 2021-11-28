import React,{createRef} from "react";
import FullCalendar from "@fullcalendar/react"; // must go before plugins
import dayGridPlugin from "@fullcalendar/daygrid"; // a plugin!
import timeGridPlugin from "@fullcalendar/timegrid";
import resourceTimelinePlugin from"@fullcalendar/resource-timeline";
import events from './styles/events.json';
import resources from './styles/fieldtrips.json';
export default class DemoApp extends React.Component {
  render() {
      const calendarRef=createRef()

    return (
      <FullCalendar
      ref={calendarRef}
      schedulerLicenseKey='CC-Attribution-NonCommercial-NoDerivatives'
        plugins={[ dayGridPlugin, timeGridPlugin, resourceTimelinePlugin]}
        initialView="dayGridMonth"
        //events="https://fullcalendar.io/demo-events.json?single-day&with-nesting&for-resource-timeline"
       // resources="https://fullcalendar.io/demo-resources.json?with-nesting&with-colors"
        events={resources}
        resources={events}

        customButtons={{
            myTimeDayBtn: {
                text:"timeDay",
                click(){
               const calendar=calendarRef.current;
               if(calendar){
                   const calendarApi=calendar.getApi();
                    calendarApi.changeView("timeGridDay");
               }
                },
            },
            myTimeWeekBtn: {
                text:"timeWeek",
                click(){
               const calendar=calendarRef.current;
               if(calendar){
                   const calendarApi=calendar.getApi();
                    calendarApi.changeView("timeGridWeek");
               }
                },
            },
            myTimeLineDayBtn: {
                text:"timeLineDay",
                click(){
               const calendar=calendarRef.current;
               if(calendar){
                   const calendarApi=calendar.getApi();
                    calendarApi.changeView("resourceTimelineDay");
               }
                },
            },
            myTimeLineWeekBtn: {
                text:"timeLineWeek",
                click(){
               const calendar=calendarRef.current;
               if(calendar){
                   const calendarApi=calendar.getApi();
                    calendarApi.changeView("resourceTimelineWeek");
               }
                },
            },
        }}
           
        headerToolbar={{
            left:"prev,next",
            center: "title",
            right:"today,dayGridDay,dayGridWeek,dayGridMonth,myTimeDayBtn,myTimeWeekBtn,myTimeLineDayBtn,myTimeLineWeekBtn",

        }}
        />
        );

  }
}