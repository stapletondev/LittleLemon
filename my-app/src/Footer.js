import {ReactComponent as Logo} from './image/Logo2.svg'



const Footer = () => {

return(
    <>

    <div className="footer1">
    <Logo />
    <ul>
    <h3>More Info</h3>
        <li>
            <a href="#">Home</a>
        </li>
        <li>
        <a href="#">About</a>
        </li>
        <li>
        <a href="#">Menu</a>
        </li>
        <li>
        <a href="#">Reservation</a>
        </li>
        <li>
        <a href="#">Order Online</a>
        </li>
        <li>
        <a href="#">Login</a>
        </li>
    </ul>
    <ul>
    <h3>Contact</h3>
        <li>
        <a href="#">Address</a>
        </li>
        <li>
        <a href="#">Phone Number</a>
        </li>
    </ul>
    <ul>
    <h3>Social Media</h3>
        <li>
            <a href="#">Address</a>
        </li>
        <li>
        <a href="#">Phone Number</a>
        </li>

    </ul>
    </div>
   </>
)



}

export default Footer;