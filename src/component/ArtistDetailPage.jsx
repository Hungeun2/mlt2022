import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';

import axios from 'axios';

import { Item, ItemList } from 'style/MainStyle';
import LoadingPage from './common/LoadingPage';

const ArtistDetailPage = () => {
  const { artistName } = useParams();
  const API = process.env.REACT_APP_END_POINT + 'artist?name=' + artistName;
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const getData = async () => {
      try {
        setIsLoading(true);
        const res = await axios.get(API);
        setData(res.data);
      } catch (e) {
        console.error(e);
      }
      setIsLoading(false);
    };
    getData();
  }, [API]);

  if (isLoading) return <LoadingPage />;
  return (
    <>
      <ItemList>
        {data.map((data, index) => (
          <Item key={data.Num}>
            <Link to={`/detail/${data.Num}`}>
              <p>
                {index + 1}. {data.Name}
              </p>
            </Link>
          </Item>
        ))}
      </ItemList>
    </>
  );
};

export default ArtistDetailPage;
