import "./Sidebar.css"
import MenuIcon from '@mui/icons-material/Menu';
import ComputerIcon from '@mui/icons-material/Computer';
import ParkIcon from '@mui/icons-material/Park';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import WarningIcon from '@mui/icons-material/Warning';
import PriorityHighIcon from '@mui/icons-material/PriorityHigh';
import Brightness1Icon from '@mui/icons-material/Brightness1';
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
const Sidebar = ({setContentWidth, setStyle}) => {
    let location= useLocation()
    const [category, setCategory]= useState(location.pathname)
    const [toggle, setToggle]= useState(true)
    const [navWidth, setNavWidth]= useState()
    const [navItemWidth, setNavItemWidth]= useState()
    const [mobileToggle, setMobileToggle]= useState(false)
    
  
    const handleClick = ()=>{
      if(window.innerWidth > 550){
        toggle ? setToggle(false) : setToggle(true);
        toggle ? setNavWidth({width: "10vw"}) :setNavWidth({width: "20vw"}) 
        toggle ? setNavItemWidth({width: "fit-content"}) : setNavItemWidth({width: "95%"})
        toggle ? setContentWidth({width: "90vw"}) : setContentWidth({width: "80vw"})
      }else if( window.innerWidth < 550){
        mobileToggle ? setMobileToggle(false) : setMobileToggle(true)
        mobileToggle ? setNavWidth({left: "-70vw"}) :setNavWidth({left: "0"}) 
        setNavItemWidth({width: "95%"})
      }
    }

    useEffect(()=>{
          
    })
    const navItemClick= ()=>{
      // set different fonts
      setCategory(location.pathname)
      if( category === "/" ){
        console.log(category);
        setStyle({fontFamily: "IBM Plex Mono, monospace"})
      }else if(category === "/Miscellaneous"){
        console.log(category);
        setStyle({fontFamily: "Mountains of Christmas, cursive"})
      }
      if(window.innerWidth <= 550){
        setNavWidth({left: "-70vw"})
        mobileToggle ? setMobileToggle(false) : setMobileToggle(true)
      }
    }  
    return ( 
    <>
    <nav style={navWidth} className="navigation_panel">
        <div style={navItemWidth} className="panel_head">
          <div onClick={ handleClick } >
            <MenuIcon className="menu_icon" />
          </div>
          {toggle && <h1>Joke App</h1>}
        </div>
        <div onClick={navItemClick} style={navItemWidth} className="nav_item"> 
          <Link className="nav_link" to={"/"} > <ComputerIcon className="icon"/> {toggle && <p>Programming</p> } </Link> 
        </div>
        <div onClick={navItemClick} style={navItemWidth} className="nav_item"> 
          <Link className="nav_link" to={"/Miscellaneous"} ><Brightness1Icon className="icon"/> {toggle && <p>Miscellaneous</p> }</Link> 
        </div>
        <div onClick={navItemClick} style={navItemWidth} className="nav_item"> 
          <Link className="nav_link" to={"/Dark"} ><WarningIcon className="icon"/> {toggle && <p>Dark</p> }</Link> 
        </div>
        <div onClick={navItemClick} style={navItemWidth} className="nav_item"> 
          <Link className="nav_link" to={"/Pun"} ><MenuBookIcon className="icon"/>{toggle && <p>Pun</p> }</Link> 
        </div>
        <div onClick={navItemClick} style={navItemWidth} className="nav_item"> 
          <Link className="nav_link" to={"/Christmas"} ><ParkIcon className="icon"/>{toggle && <p>Christmas</p> }</Link> 
        </div>
        <div onClick={navItemClick} style={navItemWidth} className="nav_item"> 
          <Link className="nav_link" to={"/Spooky"} ><PriorityHighIcon className="icon"/>{toggle && <p>Spooky</p> }</Link> 
        </div>
      </nav> 
      <div style={navWidth} className="control"></div> 
      </>      
     );
}
 
export default Sidebar;