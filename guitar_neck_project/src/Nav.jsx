import { NavLink } from 'react-router-dom'
import "./App.css"

const Nav = () => {
    return (
        <>
            <div className="nav-flex">
                <NavLink to="/guitar_neck_project">Home</NavLink>
                <NavLink to="/guitar_neck_project/GuitarNeckNotes">Guitar Neck - Notes</NavLink>
                <NavLink to="/guitar_neck_project/GuitarNeckIntervals">Guitar Neck - Intervals</NavLink>
                <NavLink to="/guitar_neck_project/GuitarNeckTriads">Guitar Neck - Triads</NavLink>
            </div>
            <hr />
        </>
    )
}

export default Nav

