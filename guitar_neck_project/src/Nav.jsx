import { NavLink } from 'react-router-dom'
import "./App.css"

const Nav = () => {
    return (
        <>
            <div className="nav-flex">
                <NavLink to="/">Home</NavLink>
                <NavLink to="/GuitarNeckNotes">Guitar Neck - Notes</NavLink>
                <NavLink to="/GuitarNeckIntervals">Guitar Neck - Intervals</NavLink>
                <NavLink to="/GuitarNeckTriads">Guitar Neck - Triads</NavLink>
            </div>
            <hr />
        </>
    )
}

export default Nav

