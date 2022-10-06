import React from 'react';
import { Link } from 'react-router-dom';

import { Item, ItemList } from 'style/MainStyle';

const AllView = ({ songList }) => {
  return (
    <ItemList>
      {songList.map((data, index) => (
        <Item key={data.Num}>
          <Link to={`/detail/${data.Num}`}>
            <p>
              {index + 1}. {data.Name}
            </p>
            <p>{data.Artist}</p>
          </Link>
        </Item>
      ))}
    </ItemList>
  );
};

export default AllView;
