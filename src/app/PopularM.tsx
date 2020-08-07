import React from 'react';
import {useState, useEffect} from 'react'
import MovieList from '../components/MovieList'

const PopularM: React.FC<Props> = ({}) => {

  const [arr, setArr] = useState<any>([])
  const api = 'https://api.themoviedb.org/3/movie/popular?api_key=c5e5a51fa3009fc5ead4149c5b29a9cf'
  const getApi = async () => {
    let r = await fetch(api)
    let dataArr = await r.json()
    setArr(dataArr.results)
  }

  useEffect(() => {
      getApi()
  }, [])

  return(
    <MovieList data={arr}/>
  )
}

interface Props{}

export default PopularM