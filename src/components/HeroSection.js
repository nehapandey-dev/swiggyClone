import React from 'react'
import Carousel from 'react-multi-carousel'
import 'react-multi-carousel/lib/styles.css'
import Resturants from './Resturants';
import Body from '../Card/Body'

function HeroSection() {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 3
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };
  return (
    <>
    <div className="hero-conatiner">
      <div className="slide-img ">
        <Carousel responsive={responsive} className=''>
          <img className="hero-img" src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_520,h_520/rng/md/carousel/production/zpkkdkmvlj5cuvqbc50t" alt="img"/>
          <img className="hero-img" src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_520,h_520/rng/md/carousel/production/lzkjv3sxwwjkzg0vxpvt" alt="img"/>
          <img className="hero-img" src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_520,h_520/rng/md/carousel/production/tgnvusbs3fnzz7xupeno" alt="img"/>
          <img className="hero-img" src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_520,h_520/rng/md/carousel/production/oxe97jexxbnxqtbhg2zo" alt="img"/>
          <img className="hero-img" src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_520,h_520/rng/md/carousel/production/nhubtkw7dukg3ukcmpam" alt="img"/>
          <img className="hero-img" src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_520,h_520/rng/md/carousel/production/ifi2lbzxeu1hvsqrsip3" alt="img"/>
        </Carousel>
        ;
      </div>
    </div>
    <Resturants/>
    <Body/>
    </>
  )
}

export default HeroSection
