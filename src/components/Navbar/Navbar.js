import React, { Fragment, useState, useEffect } from 'react'
import { Turn as Hamburger } from 'hamburger-react'
import classes from "./Navbar.module.css"
import { ReactComponent as BrandIcon } from "../Assets/logo.svg";
import { ReactComponent as DiscordIcon } from "../Assets/Discord.svg";
import { ReactComponent as TwitterIcon } from "../Assets/Twitter.svg";
import { ReactComponent as ShipIcon } from "../Assets/Ship.svg";
import { ReactComponent as InstagramIcon } from "../Assets/Instagram.svg";
import { ReactComponent as LogoutIcon } from "../Assets/Logout.svg";

const Navbar = () => {

    const [navbarOpen, setNavbarOpen] = useState(true);
    const [isMobile, setIsMobile] = useState(window.innerWidth < 1000);
    const [isOpen, setOpen] = useState(false)

    const handleToggle = () => {
        setNavbarOpen(prev => !prev)
    }
    
    useEffect(() => {
    window.addEventListener("resize", () => {
        const ismobile = window.innerWidth < 1000;
       
        if (ismobile !== isMobile) setIsMobile(ismobile);
    }, false);
    }, [isMobile]);
    

  return (
      <Fragment>
          <nav>
              <div className={classes.container}>
                  <div className={classes.logo}>
                        <BrandIcon className={classes.logoIcon}/>
                  </div>
                  <div className={`${classes.navlink} ${isMobile && navbarOpen ? classes.hideMenu : ""}`}>
                    
                      <a href="#" className={`${classes.hoverUnderlineAnimation} ${classes.mx}`}>Mint</a>
                      <a href="#" className={`${classes.hoverUnderlineAnimation} ${classes.mx}`}>Presale</a>
                      <a href="#" className={`${classes.hoverUnderlineAnimation} ${classes.mx}`}>Artist</a>
                      <a href="#" className={`${classes.hoverUnderlineAnimation} ${classes.mx}`}>Benefits</a>
                      <a href="#" className={`${classes.hoverUnderlineAnimation} ${classes.mx}`}>Roadmap</a>
                      <div className={classes.iconsWrapper}>
                        <a href="#"><ShipIcon className={classes.icons}/></a>
                        <a href="#"><DiscordIcon className={classes.icons}/></a>
                        <a href="#"><TwitterIcon className={classes.icons}/></a>
                        <a href="#"><InstagramIcon className={classes.icons} /></a>
                        </div>
                      <button className={classes.btn}>Connect Wallet</button>
                      <a href="#"><LogoutIcon className={classes.iconLogout}/></a>
                  </div>
                  <button onClick={handleToggle} className={classes.hamburger}>
                      <Hamburger hideOutline={true} rounded toggled={isOpen} toggle={setOpen} size={28} color="#fff"/>
                  </button>
            </div>
          </nav>    
    </Fragment>
  )
}

export default Navbar