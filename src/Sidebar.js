import "./Sidebar.css"
import MenuIcon from '@mui/icons-material/Menu';
import ComputerIcon from '@mui/icons-material/Computer';
import ParkIcon from '@mui/icons-material/Park';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import WarningIcon from '@mui/icons-material/Warning';
import PriorityHighIcon from '@mui/icons-material/PriorityHigh';
import Brightness1Icon from '@mui/icons-material/Brightness1';
import { useState } from "react";
const Sidebar = ({setContentWidth}) => {
    const [toggle, setToggle]= useState(true)
    const [navWidth, setNavWidth]= useState()
    const [mobileToggle, setMobileToggle]= useState(false)
    
  
    const handleClick = ()=>{
      if(window.innerWidth > 550){
        toggle ? setToggle(false) : setToggle(true);
        toggle ? setNavWidth({width: "10vw"}) :setNavWidth({width: "20vw"}) 
        toggle ? setContentWidth({width: "90vw"}) : setContentWidth({width: "80vw"})
      }else if( window.innerWidth < 550){
        mobileToggle ? setMobileToggle(false) : setMobileToggle(true)
        mobileToggle ? setNavWidth({left: "-60vw"}) :setNavWidth({left: "0"}) 
      }
    }    
    return ( 
    <>
    <nav style={navWidth} className="navigation_panel">
        <div className="panel_head">
          <div onClick={ handleClick } >
            <MenuIcon className="menu_icon" />
          </div>
          {toggle && <h1>Joke App</h1>}
        </div>
        <div className="nav_item"> <ComputerIcon className="icon"/> {toggle && <p>Programming</p> }</div>
        <div className="nav_item"> <Brightness1Icon className="icon"/> {toggle && <p>Miscellaneous</p> }</div>
        <div className="nav_item"> <WarningIcon className="icon"/> {toggle && <p>Dark</p> } </div>
        <div className="nav_item"> <MenuBookIcon className="icon"/>{toggle && <p>Pun</p> }</div>
        <div className="nav_item"> <PriorityHighIcon className="icon"/>{toggle && <p>Spooky</p> } </div>
        <div className="nav_item"> <ParkIcon className="icon"/>{toggle && <p>Christmas</p> } </div>
      </nav> 
      <div style={navWidth} className="control"></div> 
      </>      
     );
}
 
export default Sidebar;