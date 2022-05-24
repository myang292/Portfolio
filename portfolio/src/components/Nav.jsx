
import { Link } from 'react-router-dom'

const Nav = () => {

    return(
        <div>
            <header>
            <nav>
                <Link to='/'>Home</Link> | 
                {/* <br /> */}
                <Link to='/projects'> Projects</Link> | 
                {/* <br /> */}
                <Link to='/aboutme'> About Me</Link> | 
                {/* <br /> */}
                <Link to='/resume'> Resume</Link> 
            </nav>
        </header>
        </div>
    )
}

export default Nav