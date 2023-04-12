import './Navbar.css'
import './App.js'
// import Skills from './Skills';

const NavBar = (props) => {

    return (
        <div className="navBar">
        <div className="NavDiv">
        <div className='NavElements' onClick={props.scrollTo}>Skills</div>
        <div className='NavElements' onClick={props.scrollTo}>Projects</div>
        <div className='NavElements' onClick={props.scrollTo}>Resume</div>
        <div className='NavElements' onClick={props.scrollTo}>Contact</div>
        </div> 
        </div>
     );
}
 
export default NavBar;