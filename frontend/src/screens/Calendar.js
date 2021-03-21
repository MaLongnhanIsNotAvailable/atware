import React, {Component, useState} from 'react';
import {DayPilot, DayPilotCalendar, DayPilotNavigator} from "daypilot-pro-react";
import "./CalendarStyles.css";
// import Modal from './Modal'
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';

const styles = {
  wrap: {
    display: "flex"
  },
  left: {
    marginRight: "10px"
  },
  main: {
    flexGrow: "1"
  }
};
class Calendar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      viewType: "Week",
      durationBarVisible: false,
      timeRangeSelectedHandling: "Enabled",
      onTimeRangeSelected: args => {
        let dp = this.calendar;
        DayPilot.Modal.prompt("Enter Subject:", "Caculus").then(function(modal) {
          dp.clearSelection();
          if (!modal.result) { return; }
          dp.events.add(new DayPilot.Event({
            start: args.start,
            end: args.end,
            id: DayPilot.guid(),
            text: modal.result
          }));
        });
      },
      eventDeleteHandling: "Update",

      onEventClick: args => {
        let dp = this.calendar;
       window.location.href ="/match";
        // DayPilot.Modal.prompt("List user nhaaaaaaa:", args.e.text()).then(function(modal) {
        //   if (!modal.result) { return; }
        //   args.e.data.text = modal.result;
        //   dp.events.update(args.e);
        // });
      },
    };
  }

  componentDidMount() {

    // load event data
    this.setState({
      startDate: "2021-09-15",
      events: [
        {
          id: 1,
          text: "Giai tich",
          start: "2021-09-13T15:30:00",
          end: "2021-09-13T16:00:00"
        },
        {
          id: 1,
          text: "Giai tich",
          start: "2021-09-13T07:30:00",
          end: "2021-09-13T08:00:00"
        },
        
        {
          id: 2,
          text: "Toan",
          start: "2021-09-14T09:30:00",
          end: "2021-09-14T10:00:00",
          backColor: "#38761d"
        },
        {
          id: 2,
          text: "Linear Algebra",
          start: "2021-09-14T12:00:00",
          end: "2021-09-14T12:30:00",
          backColor: "#cc4125"
        },
      ]
    });
  }

  render() {
    var {...config} = this.state;
    
    return (
      <div style={styles.wrap}>
        <div style={styles.left}>
          <DayPilotNavigator
            selectMode={"week"}
            showMonths={3}
            skipMonths={3}
            startDate={"2021-09-15"}
            selectionDay={"2021-09-15"}
            onTimeRangeSelected={ args => {
              this.setState({
                startDate: args.day
              });
            }}
          />
        </div>
        <div style={styles.main}>
        <DayPilotCalendar
          {...config}
          ref={component => {
            this.calendar = component && component.control;
          }}
        />
        </div>
      </div>
    );
  }
}

export default Calendar;
