
import { options } from "./constant";
import axios from "axios";
import { ActionTypes } from "./reducers/actionTypes";


//? Bütün isteklerin Base URL'i
axios.defaults.baseURL="https://api.themoviedb.org/3";



//? Popüler filmleri getir ve store'a aktar
export const getPopular = () => (dispatch) => {

//? Reducer'a yüklemenin başladığına haber ver
dispatch({
    type:ActionTypes.SET_MOVIES_LOADING,
})
    axios
    .get('/movie/popular?language=tr', options)
//? Olumlu olursa reducer a veriyi aktar
    .then((res) => dispatch ({
        type:ActionTypes.SET_MOVIES,
        payload:res.data.results}))
//? Olumsuz olursa reducer a hatayı aktar       
        .catch((err) => {
            dispatch({
                type:ActionTypes.SET_MOVIES_ERROR,
                payload:err.message
            })
        })
};


//? kategorileri al ve store'a aktar 

export const getGenres = () => (dispatch) => {
    dispatch({type:ActionTypes.SET_GENRES_LOADING})
    axios.get('genre/movie/list?language=tr', options)
    .then((res)=>{
        dispatch({type:ActionTypes.SET_GENRES,payload:res.data.genres});
    })
    .catch(err => dispatch({
        type:ActionTypes.SET_GENRES_ERROR,
        payload:err.message,
    }))
}