import React, { useState, useEffect } from 'react'
import Header from '../components/HEADER/header'
import Search from '../components/SEARCH/search'
import Main from '../components/MAIN/main'
import Footer from '../components/FOOTER/footer'
import useLocalStorage from '../hooks/useLocalStorage'
import { helpHttp } from '../helpers/helpHttp'
import Loader from '../components/LOADER/Loader'
import Message from '../components/MESSAGE/message'

const Home = () => {
  const [dataComparator, setDataComparator] = useLocalStorage('ListSongs', []);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  let url = "https://itunes.apple.com/us/rss/toppodcasts/limit=100/genre=1310/json"

  useEffect(() => {
    setLoading(true);
    helpHttp()
      .get(url)
      .then((res) => {
        if (!res.err) {
          setDataComparator(res);
          setError(null);
        } else {
          setDataComparator(null);
          setError(res);
        }
        setLoading(false);
      });
  }, [url]);

  return (
    <>
      <Search />
      {loading && <Loader />}
      {error && (
        <Message
          msg={`Error ${error.status}: ${error.statusText}`}
          bgColor="#dc3545"
        />
      )}
      {dataComparator !== null ? <Main data={dataComparator} /> : null}
    </>
  )
}

export default Home