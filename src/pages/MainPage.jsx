import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getGenres, getPopular } from '../redux/actions/movieAction';
import Hero from '../components/Hero';
import MovieList from '../components/MovieList';

const MainPage = () => {
  const state = useSelector((store)=>store.genre)
  
const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPopular());

    dispatch(getGenres());
  },[])

  
  return (
    <div>
      <Hero/>

    {/* 
    //? 1) Yüklenme işlemi devam ediyorsa loader bas
    //? 2) Yüklenme bittiyse ama hata varsa hatayı bas
    //? 3) Yüklenme bittiyse ve hata yoksa liste bileşenlerini ekrana bas
    */}

      {
        state.isLoading ? (
        <div class="spinner-border text-primary" role="status">
        <span class="visually-hidden">Loading...</span>
        </div>) 
        : state.isError ? <p>Üzgünüz bir hata oluştu {state.isError}</p>
        : state.genres.map((genre)=> <MovieList key={genre.id} genre={genre}/>)
      }
    </div>
  )
}

export default MainPage