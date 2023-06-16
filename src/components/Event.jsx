import React, { useState } from 'react';
import EventComponent from './EventComponent';
import './Job.css';
const eventsData= [
  {
    "date": "2019-01-01",
    "start": "2019-01-01T00:00:00.000Z",
    "end": "2019-01-02T00:00:00.000Z",
    "name": "New Year's Day",
    "type": "public",
    "public": true,
    "country": "US"
  },
  {
    "date": "2019-01-21",
    "start": "2019-01-21T00:00:00.000Z",
    "end": "2019-01-22T00:00:00.000Z",
    "name": "Martin Luther King Jr. Day",
    "type": "public",
    "public": true,
    "country": "US"
  },
  {
    "date": "2019-02-14",
    "start": "2019-02-14T00:00:00.000Z",
    "end": "2019-02-15T00:00:00.000Z",
    "name": "Valentine's Day",
    "type": "observance",
    "public": false,
    "country": "US"
  },
  {
    "date": "2019-02-18",
    "start": "2019-02-18T00:00:00.000Z",
    "end": "2019-02-19T00:00:00.000Z",
    "name": "Washington's Birthday",
    "type": "public",
    "public": true,
    "country": "US"
  },
  {
    "date": "2019-04-15",
    "start": "2019-04-15T00:00:00.000Z",
    "end": "2019-04-16T00:00:00.000Z",
    "name": "Tax Day",
    "type": "observance",
    "public": false,
    "country": "US"
  },
  {
    "date": "2019-04-24",
    "start": "2019-04-24T00:00:00.000Z",
    "end": "2019-04-25T00:00:00.000Z",
    "name": "Administrative Professionals Day",
    "type": "observance",
    "public": false,
    "country": "US"
  },
  {
    "date": "2019-05-12",
    "start": "2019-05-12T00:00:00.000Z",
    "end": "2019-05-13T00:00:00.000Z",
    "name": "Mother's Day",
    "type": "observance",
    "public": false,
    "country": "US"
  },
  {
    "date": "2019-05-27",
    "start": "2019-05-27T00:00:00.000Z",
    "end": "2019-05-28T00:00:00.000Z",
    "name": "Memorial Day",
    "type": "public",
    "public": true,
    "country": "US"
  },
  {
    "date": "2019-06-16",
    "start": "2019-06-16T00:00:00.000Z",
    "end": "2019-06-17T00:00:00.000Z",
    "name": "Father's Day",
    "type": "observance",
    "public": false,
    "country": "US"
  },
  {
    "date": "2019-07-04",
    "start": "2019-07-04T00:00:00.000Z",
    "end": "2019-07-05T00:00:00.000Z",
    "name": "Independence Day",
    "type": "public",
    "public": true,
    "country": "US"
  },
  {
    "date": "2019-09-02",
    "start": "2019-09-02T00:00:00.000Z",
    "end": "2019-09-03T00:00:00.000Z",
    "name": "Labour Day",
    "type": "public",
    "public": true,
    "country": "US"
  },
  {
    "date": "2019-10-14",
    "start": "2019-10-14T00:00:00.000Z",
    "end": "2019-10-15T00:00:00.000Z",
    "name": "Columbus Day",
    "type": "public",
    "public": true,
    "country": "US"
  },
  {
    "date": "2019-10-31",
    "start": "2019-10-31T18:00:00.000Z",
    "end": "2019-11-01T00:00:00.000Z",
    "name": "Halloween",
    "type": "observance",
    "public": false,
    "country": "US"
  },
  {
    "date": "2019-11-11",
    "start": "2019-11-11T00:00:00.000Z",
    "end": "2019-11-12T00:00:00.000Z",
    "name": "Veterans Day",
    "type": "public",
    "public": true,
    "country": "US"
  },
  {
    "date": "2019-11-28",
    "start": "2019-11-28T00:00:00.000Z",
    "end": "2019-11-29T00:00:00.000Z",
    "name": "Thanksgiving Day",
    "type": "public",
    "public": true,
    "country": "US"
  },
  {
    "date": "2019-11-29",
    "start": "2019-11-29T00:00:00.000Z",
    "end": "2019-11-30T00:00:00.000Z",
    "name": "Day after Thanksgiving Day",
    "type": "observance",
    "public": false,
    "country": "US"
  },
  {
    "date": "2019-12-25",
    "start": "2019-12-25T00:00:00.000Z",
    "end": "2019-12-26T00:00:00.000Z",
    "name": "Christmas Day",
    "type": "public",
    "public": true,
    "country": "US"
  },
  {
    "date": "2019-12-31",
    "start": "2019-12-31T00:00:00.000Z",
    "end": "2020-01-01T00:00:00.000Z",
    "name": "New Year's Eve",
    "type": "observance",
    "public": false,
    "country": "US"
  }
]
  
const News = () => {
    return (
        <div className='job-container'>
      {eventsData.map((event, index) => (
        <EventComponent key={index} event={event} />
      ))}
    </div>
    );
};

export default News;
