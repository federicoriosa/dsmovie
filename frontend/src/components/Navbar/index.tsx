import {ReactComponent as GithubIcon} from 'Assets/img/github.svg';
import './style.css';

function Navbar () {

    return (

        <header>
            <nav className='container'>
                <div className='dsmovie-nav-content'>
                    <h1>DSMovie</h1>
                    <a href="https://github.com/devsuperior">
                    <div className='dsmovie-contactcontainer'>
                        <GithubIcon />
                        <p className='dsmovie-contact-link'>/devsuperior</p>
                    </div>
                    </a>
                </div>
            </nav>
        </header>
    )
}

export default Navbar;