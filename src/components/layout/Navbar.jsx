import {Link} from 'react-router-dom'
import Brand from '../shared/Brand'

const Navbar = () => {
    return (
        <div className="px-2 max-w-5xl mx-auto">
        <nav className="navbar bg-base-100">
            <div className="flex-1">
                <Link to="/">
                    <Brand />
                </Link>
            </div>
            <div className="flex-none">
            <button type="button" className="btn btn-primary text-sm">
                    Download App
                </button>
            </div>

        </nav>
        </div>
    );
}
 
export default Navbar;