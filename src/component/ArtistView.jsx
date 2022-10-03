import React from 'react';
import { ItemList, ArtistItem } from 'style/MainStyle';
import { Link } from 'react-router-dom';

const ArtistView = ({ songList }) => {
  let artistList = [];
  songList.forEach((e) => {
    artistList.push(e.Artist);
  });
  artistList = new Array(...new Set(artistList));

  return (
    <ItemList>
      {artistList.map((data, index) => (
        <ArtistItem key={index}>
          <Link to={`/artist/${data}`}>
            <p>{data}</p>
          </Link>
        </ArtistItem>
      ))}
    </ItemList>
  );
};

export default ArtistView;
