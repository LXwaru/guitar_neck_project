import { Link } from 'react-router-dom'

const Footer = () => {
    return (
        <>
            <div className="footer">
                <hr />
                <div className="footer-flex">
                    <Link to="/guitar_neck_project/GuitarNeckNotes">Notes</Link>
                    <Link to="/guitar_neck_project/GuitarNeckIntervals">Intervals</Link>
                    <Link to="/guitar_neck_project/GuitarNeckTriads">Triads</Link>
                </div>
            </div>
        </>
    )
}

export default Footer