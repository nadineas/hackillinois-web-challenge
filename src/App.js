import React, { useState, useEffect } from 'react';
import styles from './styles.module.sass';


function App() {
  let [events, setEvents] = useState([]);
  useEffect(() => {
    fetch('https://api.hackillinois.org/event/').then(res => res.json()).then(json => {
      setEvents(json.events)
    })
  }, [])
  events.startTime = new Date(events.startTime);
  let [times, setTime] = useState([]);
  useEffect(() => { fetch('https://api.hackillinois.org/event/').then(res => res.json()).then(json => setTime(json.events.startTime)) })

  return (
    <div className={styles.background}>
      <div className={styles.displayinternal}>
        {events.map(event => (
          <div className={styles.display}>
            <b className={styles.title}><u>{event.name}</u></b>
            <i className={styles.time}>{event.startTime}</i>
            <p>{event.description}</p>
            <p>____________________________________________________________________________</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;