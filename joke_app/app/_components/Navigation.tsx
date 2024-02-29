'use client'

import MenuIcon from '@mui/icons-material/Menu';
import TuneIcon from '@mui/icons-material/Tune';
import ComputerIcon from '@mui/icons-material/Computer';
import ParkIcon from '@mui/icons-material/Park';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import WarningIcon from '@mui/icons-material/Warning';
import PriorityHighIcon from '@mui/icons-material/PriorityHigh';
import Brightness1Icon from '@mui/icons-material/Brightness1';

import styles from "../page.module.css"
import { useState, useEffect } from 'react';

interface NavigationProps {
    setCategory: (params: any) => void;
}

export default function Navigation({ setCategory }: NavigationProps) {
    type NavState = 
    | {left: "-70vw"}
    | {left: "0"}

    const [toggleNav, setToggleNav] = useState<NavState>({left: "0"});
    
    useEffect(() => {
        if (window.innerWidth < 768) {
            setToggleNav({left: "-70vw"});
        }
    }, []);
    
    const handleToggle = () => {
        toggleNav.left === "0" ? setToggleNav({left: "-70vw"}) : setToggleNav({left: "0"});
    }
    return (
        <nav style={toggleNav} className={styles.nav_bar} >
            <div className={styles.nav_item}>
                <div onClick={() => handleToggle()}>
                <MenuIcon className={styles.icon && styles.menu_icon} />
                </div>
                <h1>Categories</h1>
            </div>
            <div className={styles.nav_item} onClick={() => setCategory("Programming")}>
                <ComputerIcon className={styles.icon} />
                <p>Programming</p>
            </div>
            <div className={styles.nav_item} onClick={() => setCategory("Miscellaneous")}>
                <Brightness1Icon className={styles.icon} />
                <p>Miscellaneous</p>
            </div>
            <div className={styles.nav_item} onClick={() => setCategory("Dark")}>
                <WarningIcon className={styles.icon} />
                <p>Dark</p>
            </div>
            <div className={styles.nav_item} onClick={() => setCategory("Pun")}>
                <MenuBookIcon className={styles.icon} />
                <p>Pun</p>
            </div>
            <div className={styles.nav_item} onClick={() => setCategory("Christmas")}>
                <ParkIcon className={styles.icon} />
                <p>Christmas</p>
            </div>
            <div className={styles.nav_item} onClick={() => setCategory("Spooky")}>
                <PriorityHighIcon className={styles.icon} />
                <p>Spooky</p>
            </div>
        </nav>
    )
}