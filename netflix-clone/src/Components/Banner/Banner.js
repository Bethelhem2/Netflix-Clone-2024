import React, { useEffect, useState } from "react";
import request from '../../Utils/request'
import axios from 'axios'
import '../../bootstrap.css'
import'../Banner/Banner.css'

const Banner = () => {
    const [movies, setmovies] =useState([])
    const movie= movies[Math.floor(Math.random()*movies.length)];
    useEffect(()=>{
        axios.get(request.requestMovies).then((res) => {
            setmovies(res.data.results);
        })
    },[])
    console.log(movie);

function truncate(str, n) {
  return str?.length > n ? str.substr(0, n - 1) + "..." : str;
}
  return (
    <>
      <div
        className="banner_wrapper container-fluid"
        style={{
          backgroundSize: "cover",
          backgroundImage: `url('https://image.tmdb.org/t/p/original${movie?.backdrop_path}')`,
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        {/* <img
          className="container-fluid"
          src={`https://image.tmdb.org/t/p/original/${movie?.backdrop_path}`}
          alt={movie?.title}
        /> */}
        <div className="banner_elements container">
          <div className="row">
            <div className="col-lg-8 col-sm-8">
              <h1 className="banner_title">
                {movie?.title || movie?.name || movie?.original_name}
              </h1>
              <div className="banner_button paly">Play</div>
              <div className="banner_button">My List</div>
              <h1 className="banner_description">
                {truncate(movie?.overview, 150)}{" "}
              </h1>
            </div>
          </div>
        </div>
        <div className="banner_fadeBottom" />
      </div>
    </>
  );
}

export default Banner
