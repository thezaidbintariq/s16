import React from 'react'
import classes from './Hero.module.css'
import nft from '../Assets/nft.png'
const Hero = () => {
  return (
    <section>
          <div className={classes.container}>
                <div className={classes.hero__grid}>
                  <div className={classes.hero__gridItem}>
                      <div className={classes.hero__gridItem__text}>
                          <h1 className={classes.hero__gridItem__text__title}>
                              Claim your NFT Physical Print
                          </h1>
                          <p className={classes.hero__gridItem__text__subtitle}>
                              Congratulations! Your NFT will be revealed on open sea within the next XX days.
                          </p>
                          <p className={classes.hero__gridItem__text__subtitle__small}>
                              To claim your NFT Physical Print, let us know where you’d like us to ship it by entering your contact information below: 
                          </p>
                          <form className={classes.hero__gridItem__text__form}>
                              
                              <input type="text" placeholder="First Name" className={classes.hero__gridItem__text__form__input} />
                              <br />
                              <input type="text" placeholder="Last Name" className={classes.hero__gridItem__text__form__input} />
                              <br />
                              <input type="text" placeholder="Email Address" className={classes.hero__gridItem__text__form__input} />
                              <br />
                              <input type="text" placeholder="Country" className={classes.hero__gridItem__text__form__input} />
                              <br />
                              <input type="text" placeholder="City" className={classes.hero__gridItem__text__form__input} />
                              <br />
                              <input type="text" placeholder="Province/ State" className={classes.hero__gridItem__text__form__input} />
                              <br />
                              <input type="text" placeholder="Postal Code/ PO Box" className={classes.hero__gridItem__text__form__input} />
                              <br />
                              <p className={classes.hero__gridItem__text__subtitle__smaller}>*Shipping fees not included</p>
                              <button className={classes.hero__gridItem__text__form__btn}>Submit</button>
                          </form>
                          
                        </div>
                        
                  </div>
                  <div className={classes.hero__gridItem1}><img src={nft} alt=""/></div>
            </div>      
        </div>
    </section>
  )
}

export default Hero