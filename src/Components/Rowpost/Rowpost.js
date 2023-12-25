import React,{useEffect,useState} from 'react'
import YouTube from 'react-youtube'
import './Rowpost.css'
import {imageUrl,API_KEY} from '../../constants/constants'
import axios from '../../axios'
function Rowpost(props) {
  const [movie, setMovie]= useState([])
  const [urlId,seturlId] = useState('')
  useEffect(()=>{
    axios.get(props.url).then(Response=>{
      console.log(Response.data)
      setMovie(Response.data.results)
    }).catch(err=>{
      // alert('network error')
    })

  },[])
  const opts = {
    height: '390',
    width: '100%',
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 1,
    },
  };
  const handleMovie = (id)=>{
    console.log(id)
    axios.get(`/movie/${id}/videos?api_key=${API_KEY}&language`).then(Response=>{
      if(Response.data.results.length!==0){
        seturlId(Response.data.results[0])
      }else{

      console.log('Array empty')
      }

    })

  }
  return (
    <div className='row'>
        <h2>{props.title}</h2>
        <div className='posters'>
        {movie.map((obj)=>
        <img onClick={()=>handleMovie(obj.id)} className={props.isSmall ?'smallPoster':'poster'} alt="poster" src={`${imageUrl+obj.backdrop_path}`} />

        )}
        </div>

        { urlId && <YouTube opts={opts} videoId={urlId.key}/>  }

        
    </div>
  )
}

export default Rowpost