import { Link } from 'react-router-dom'

export default function Navbar () {
    return (
        <div>
            <ul>
                <li>
                    <Link to="/">Blog Home</Link>
                </li>
                <li>
                    <Link to="/new-blog">New Blog</Link>
                </li>
            </ul>
        </div>
    )
}