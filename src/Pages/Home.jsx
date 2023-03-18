import React from 'react';
import Carousel from '../components/Carousel/Carousel';
import Cart from '../components/Cart/Cart';
import Helmet from '../components/Helmet/Helmet';

const Home = () => {
  
  return <Helmet title={"Home"}>
    <>
      <Carousel/>
      <Cart/>
    </>
  </Helmet>

  
}

export default Home