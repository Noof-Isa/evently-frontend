// import { Link } from 'react-router-dom'

// const EventList = (props) => {
//   return (
//     <main>
//       <h1>Event List</h1>
//       {props.events.map((event) => (
//         <Link key={event._id} to={`/events/${event._id}`}>
//           <article>  
//             <header>
//               <h2>{event.title}</h2>
//               <p>
//                 {event.owner.username} posted on {new Date(event.createdAt).toLocaleDateString()}
//               </p>
//             </header>
//             <p>{event.description}</p>
//             <p>
//               📍 {event.location} <br />
//               📅 {new Date(event.dateTime).toLocaleString()}
//             </p>
//           </article>
//         </Link>
//       ))}
//     </main>
//   )
// }

// export default EventList

//=== new code after debugging===
import { Link } from 'react-router-dom';

const EventList = (props) => {
  const events = Array.isArray(props.events) ? props.events : [];

  if (!events.length) {
    return (
      <main>
        <h1>Event List</h1>
        <p>No events yet.</p>
      </main>
    );
  }

  return (
    <main>
      <h1>Event List</h1>
      {events.map((event) => {
        const ownerName = event.owner?.username || 'Unknown';
        const createdAt = event.createdAt ? new Date(event.createdAt).toLocaleDateString() : '';
        // Your schema uses `date` (not dateTime); fall back to dateTime if old data exists
        const when = event.date
          ? new Date(event.date).toLocaleString()
          : (event.dateTime ? new Date(event.dateTime).toLocaleString() : 'TBD');

        return (
          <Link key={event._id} to={`/events/${event._id}`}>
            <article>
              <header>
                <h2>{event.title || 'Untitled Event'}</h2>
                <p>
                  {ownerName}{createdAt ? ` • ${createdAt}` : ''}
                </p>
              </header>
              {event.description && <p>{event.description}</p>}
              <p>
                {event.location ? `📍 ${event.location}` : ''}{' '}
                {when ? <><br />📅 {when}</> : null}
              </p>
            </article>
          </Link>
        );
      })}
    </main>
  );
};

export default EventList;
