import React from 'react';

import { ItemList } from 'style/MainStyle';

import AllView from 'AllView';

const Main = ({ songList }) => {
  return (
    <>
      <ItemList>{<AllView songList={songList} />}</ItemList>
    </>
  );
};

export default Main;
