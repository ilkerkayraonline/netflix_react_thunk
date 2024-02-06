import React from 'react'
import { useSelector } from 'react-redux'
import { baseImgUrl } from '../redux/actions/constant'
import Loading from './Loading'

const Hero = () => {
  const state =  useSelector((store)=> store.movie)

//? 1) 0-20 arasında rastgele sayı üret
const i = Math.round(Math.random() * state.popularMovies.length);

//? Rastgele ürettiğimiz sıradaki filme eriş
const randomMovie = state.popularMovies[i];

console.log(randomMovie)
  return (
    <div className='hero row p-4'>
{/* Yüklenme devam ediyorsa ekrana loading bas.. */}
        {!randomMovie? <Loading/> : 
        <>
        <div className='col-md-6 d-flex flex-column gap-3 align-items-center justify-content-center'>
            <h1>{randomMovie.title}</h1>
            <p className='text-start'>{randomMovie.overview}</p>
            <p>
            <span>IMDB:</span>
            <span className='text-warning p-x-2'> {randomMovie.vote_average}</span>
            </p> 

                <div className='d-flex gap-3'>
                    <button className='btn btn-danger'>Filmi İzle</button>
                    <button className='btn btn-info'>Listeye Ekle</button>
                </div>
            </div>
        <div className='col-md-6'>
            <img className='img-fluid rounded shadow my-4' src={baseImgUrl + randomMovie.backdrop_path} alt="" />
        </div>
        </>}
    </div>
  )
}

export default Hero