import { Link } from 'react-router-dom'

const Footer = () => {
    return (
        <>
            <div className="footer">
                <hr />
                <div className="footer-flex">
                    <Link to="/GuitarNeckNotes">Notes</Link>
                    <Link to="/GuitarNeckIntervals">Intervals</Link>
                    <Link to="/GuitarNeckTriads">Triads</Link>
                </div>
            </div>
        </>
    )
}

export default Footer