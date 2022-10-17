import React from 'react';

import PromiseText from '../../components/promiseText/PromiseText';
import Instructions from '../../components/instructions/Instructions';

import './home.css';

const Home = () => {
  return (
    <div className='home'>
          <PromiseText />
          <Instructions />
    </div>
  )
}

export default Home;