import { Link } from 'react-router-dom'

const NavBar = (props) => {
  return (
    <nav>
      <Link to="/events">Events</Link>
      {props.user ? (
        <ul>
          <li>Explore the events {props.user.username}</li>
          <li><Link to="/"> Home </Link></li>
          <li><Link to='/' onClick={props.handleSignOut}>Sign Out</Link></li>
          <li><Link to="/events/new">New Event</Link></li>

        </ul>
        ) : (
          <ul>
            <li><Link to="/sign-up">Sign Up</Link></li>
            <li><Link to="/sign-in">Sign In</Link></li>
          </ul>
          ) }
    </nav>
  )
}

export default NavBar 