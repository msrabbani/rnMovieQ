import React from 'react';
import {useState, useEffect} from 'react'
import MovieList from '../components/MovieList'

const TopRatedM: React.FC<Props> = ({}) => {
  const [page, setPage] = useState<number>(1)
  const [arr, setArr] = useState<any>([])
  const [isLoading, setIsLoading] = useState<boolean>(true)
  const [fetchingStatus, setFetchingStatus] = useState<boolean>(false)
  const [onLoad, setOnLoad] = useState<boolean>(false)
  const [totalPage, setTotalPage] = useState<number>(0)
  
  const getApi = async (page) => {
    setPage(page+1)
    const api = `https://api.themoviedb.org/3/movie/top_rated?api_key=c5e5a51fa3009fc5ead4149c5b29a9cf&language=en-US&page=${page}`
     setFetchingStatus(true)
       await fetch(api)
      .then((response) => response.json())
      .then((responseJson) =>
      {
         setArr([...arr, ...responseJson.results])
         setTotalPage(responseJson.total_pages)
         setIsLoading(false)
         setOnLoad(false)
      })
      .catch((error) =>
      {
         console.error(error);
         setOnLoad(false)
         setFetchingStatus(false)
      });

  }

  useEffect(() => {
      getApi(page)
  }, [])
  
  return(
    <MovieList 
    data={arr} 
    isLoading={isLoading} 
    fetchingStatus={fetchingStatus} 
    onLoad={onLoad}
    getApi={()=>getApi(page)}
    />
  )
}

 interface Props{
  data:[],
  isLoading:boolean,
  fetchingStatus:boolean,
  onLoad:boolean,
  getApi?:any
}

export default TopRatedM