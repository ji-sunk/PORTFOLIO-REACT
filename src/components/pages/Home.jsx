import React from 'react';
import Contents from '../layout/Contents';

import Vertical from '../section/Vertical';
import Horizontal from '../section/Horizontal';
import Vertical2 from '../section/Vertical2';

const Home = () => {
  return (
    <>
      <Contents>
        <Vertical />
        <Horizontal />
        <Vertical2 />
      </Contents>
    </>
  );
};

export default Home;
