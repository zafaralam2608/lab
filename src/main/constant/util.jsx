import dayjs from 'dayjs';
import moment from 'moment/moment';
import XMLParser from 'react-xml-parser';

export function formatDate(date) {
  return dayjs(date).format('YYYYMMDD');
}

export function decodeTS(ts) {
  return moment(ts, 'YYYY-MM-DDThh:mm:ss').format('HH:mm');
}

export function decodeDuration(duration) {
  return duration.substring(2).replace('H', ' h ').replace('M', ' m');
}

export function evaluateFlightDetails(xml) {
  const json = new XMLParser().parseFromString(xml);
  let count = 0;
  let route = 0;
  const flights = [];
  if (json.name === 'OTA_AirDetailsRS') {
    json.children.forEach((child) => {
      const att = child.attributes;
      if (child.name === 'FLSResponseFields') {
        count = att.FLSResultCount;
        route = att.FLSRoutesFound;
      } else if (child.name === 'FlightDetails') {
        const legs = [];
        child.children.forEach((leg) => {
          if (leg.name === 'FlightLegDetails') {
            const legAtt = leg.attributes;
            const legChild = leg.children;
            let airportDep = '';
            let airportArr = '';
            let airline = '';
            legChild.forEach((detail) => {
              if (detail.name === 'DepartureAirport') {
                airportDep = detail.attributes.LocationCode;
              }
              if (detail.name === 'ArrivalAirport') {
                airportArr = detail.attributes.LocationCode;
              }
              if (detail.name === 'MarketingAirline') {
                airline = detail.attributes.CompanyShortName;
              }
            });
            legs.push({
              seq: legAtt.SequenceNumber,
              flightNum: legAtt.FlightNumber,
              duration: legAtt.JourneyDuration,
              tsDep: legAtt.DepartureDateTime,
              tsArr: legAtt.ArrivalDateTime,
              airportDep,
              airportArr,
              airline,
            });
          }
        });
        flights.push({
          codeArr: att.FLSArrivalCode,
          codeDep: att.FLSDepartureCode,
          tsArr: att.FLSArrivalDateTime,
          tsDep: att.FLSDepartureDateTime,
          timeFlight: att.TotalFlightTime,
          timeTrip: att.TotalTripTime,
          days: att.FLSFlightDays,
          legs,
        });
      }
    });
  }
  return { count, route, flights };
}
