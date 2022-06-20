import React, {Fragment} from 'react'
import classes from './Hero.module.css'
import nft from '../Assets/nft.png'
const Hero = () => {
  return (
    <section>
          <div className={classes.container}>
                <div className={classes.hero__grid}>
                    <div className={classes.hero__gridItem}>Content</div>
                  <div className={classes.hero__gridItem1}>
                      <img src={nft} alt=""/>
                    </div>
                </div>
          </div>      
    </section>
  )
}

export default Hero