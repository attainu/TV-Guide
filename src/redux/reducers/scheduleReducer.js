import { FETCH_SCHEDULE_LIST } from "../actionTypes";
import moment from "moment";

const initialState = {
  schedule: null
};

const scheduleReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case FETCH_SCHEDULE_LIST:
      let arr = [
        [{ type: 'string', id: 'Channel' },
        { type: 'string', id: 'Show' },
        { type: 'date', id: 'Start' },
        { type: 'date', id: 'End' }]
      ]
      payload.map(sch => {
        var hours = sch.airtime;
        var tsplit = hours.split(':');
        var dsplit = sch.airdate.split('-');
        var minutes = sch.runtime;
        var time = moment(hours + ':' + minutes, 'HH:mm');
        const t = time.add(minutes, 'm');
        var c = null;
        if (sch.show.network !== null) {
          c = sch.show.network.name
        }
        else if (sch.show.webChannel !== null) {
          c = sch.show.webChannel.name
        }
        else {
          c = "N/A"
        }
        var startTime = new Date(dsplit[0], dsplit[1], dsplit[2], parseInt(tsplit[0]), parseInt(tsplit[1]), 0)
        var endTime = new Date(dsplit[0], dsplit[1], dsplit[2], parseInt(t.format('HH')), parseInt(t.format('mm')), 0)
        //console.log(dsplit[0], dsplit[1], dsplit[2], parseInt(t.format('HH')), parseInt(t.format('mm')), 0)
        var current = new Date();
        var currentTime = new Date(current.getFullYear(), current.getMonth(), current.getDate(), current.getHours(), current.getMinutes(), current.getSeconds())
        var fl = moment(endTime).diff(moment(currentTime), 'minutes')
        //console.log(startTime,currentTime,fl,c)
        if (((moment(endTime).diff(moment(startTime), 'minutes')) > 0) && fl > 0) {

          arr = [...arr,
          [
            c,
            sch.show.name,
            startTime,
            endTime,
          ]
          ]
        }
      })

      return { ...state, schedule: { arr } };
    default:
      return state;
  }
};
export default scheduleReducer;
