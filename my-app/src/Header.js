import {ReactComponent as Logo} from './image/logo.svg'

const sections = [
    {
      label: 'Home',
      url: '#Home',
      anchor: 'Home'
    },
    {
      label: 'About',
      url: '#About',
      anchor: 'Menu'
    },

    {
        label: 'Menu',
        url: '#Menu',
        anchor: 'Menu'
    },
    {
        label: 'Reservations',
        url: '#Reservations',
        anchor: 'Reservations'
    },
    {
        label: 'Order Online',
        url: '#OrderOnline',
        anchor: 'OrderOnline'
    },
    {
        label: 'Reservations',
        url: '#Reservations',
        anchor: 'Reservations'
    },

  ]






  const Header = () => {
    // const handleClick = (anchor) => () => {
    //   const id = `${anchor}-section`;
    //   const element = document.getElementById(id);
    //   if (element) {
    //     element.scrollIntoView({
    //       behavior: "smooth",
    //       block: "start",
    //     });
    //   }
    // };
  
    // const [scrollUp, setScrollUp] = useState(true)
    // const prevScroll = useRef(0)
  
  
    // const handleScroll = (event) => {
    //   const newScroll = event.currentTarget.scrollY
    //   setScrollUp(newScroll < prevScroll.current)
    //   prevScroll.current = newScroll
    // }
  
    // useEffect(() => {
    //   window.addEventListener('scroll', handleScroll)
    //   return () => {
    //     window.removeEventListener('scroll', handleScroll)
    //   }
    // }, [])
  
    // const boxTranslateY = scrollUp ? 0 : -200
  
  
    return (


<div class='NavBar'>
<Logo />
        <a href="#">Home</a>
        <a href="#">About</a>
        <a href="#">Menu</a>
        <a href="#">Reservations</a>
        <a href="#">Order Online</a>
        <a href="#">Login</a>

        </div>


)}





export default Header;