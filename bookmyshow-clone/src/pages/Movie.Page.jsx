import React, { useState, useEffect, useContext } from "react";
import MovieLayoutHoc from "../layout/Movie.Layout";
import { useParams } from "react-router-dom";
import { API_KEY   } from "../constants/constants";
import axios from "../axios";
import { MovieContext } from "../context/Movie.Context";
import Slider from "react-slick" ;
import { FaCcVisa, FaApplePay } from 'react-icons/fa';
import PosterSlider from "../components/PosterSlider/PosterSlider.Component";
import MovieHero from "../components/MovieHero/MovieHero.Component";
import Cast from "../components/Cast/Cast.Component";

const MoviePage = () => {
    const { id } = useParams();
    const { movie , setMovie } = useContext(MovieContext);
    const [ cast, setCast ] = useState([]);
    const [ similarMovies, setSimilarMovies ] = useState([]);
    const [recommendedMovies , setRecommendedMovies] = useState([]);
    // const [popularMovies , setPopularMovies] = useState([]);

    useEffect(() => {
        const requestCast = async () => {
            const getCast = await axios.get(`/movie/${id}/credits?api_key=${API_KEY}&with_networks=213`);
            // const getCast = await axios.get(`/movie/500/credits?api_key=${API_KEY}&with_networks=213`);
            setCast(getCast.data.cast);
        }
        requestCast();
    }, [id, setCast]);

    useEffect(() => {
        const requestSimilarMovies = async () => {
            const getSimilarMovies = await axios.get(`/movie/${id}/similar?api_key=${API_KEY}&with_networks=213`);
            setSimilarMovies(getSimilarMovies.data.results);
        }
        requestSimilarMovies();
    }, [id]);
 
    useEffect(() => {
        const requestRecommendedMovies = async () => {
            const getRecommendedMovies = await axios.get(`/movie/${id}/recommendations?api_key=${API_KEY}&with_networks=213`);
            setRecommendedMovies(getRecommendedMovies.data.results);
        }
        requestRecommendedMovies();
    }, [id]);



    useEffect(() => {
        const requestMovie = async () => {
            const getMovieData = await axios.get(`/movie/${id}?api_key=${API_KEY}&with_networks=213`);
            setMovie(getMovieData.data);
        }
        requestMovie();
    }, [id]);

   


    const settingsCast = {
    dots:true,
    infinite: true,
    autoplay:true ,
    slidesToShow:5,
    slideToScroll:4,
    initialSlide:0,
    responsive:[
      {
        breakpoints:1024,
        settings:{
          slidesToShow:3,
          slideToScroll:2,
        }
      },
      {
        breakpoints:600,
        settings:{
          slidesToShow:3,
          slideToScroll:1,
          initialSlide:2,
        }
      },
      {
        breakpoints:480,
        settings:{
          slidesToShow:2,
          slideToScroll:1,

        }
      }
    ]
};

    const settings = {
    dots:true,
    infinite: true,
    autoplay:true ,
    slidesToShow:5,
    slideToScroll:4,
    initialSlide:0,
    responsive:[
      {
        breakpoints:1024,
        settings:{
          slidesToShow:3,
          slideToScroll:2,
        }
      },
      {
        breakpoints:600,
        settings:{
          slidesToShow:3,
          slideToScroll:1,
          initialSlide:2,
        }
      },
      {
        breakpoints:480,
        settings:{
          slidesToShow:2,
          slideToScroll:1,

        }
      }
    ]
};


    return (
        <>
            <MovieHero/>
            <div className="my-12 container px-4 lg:ml-20 lg:w-2/1">
                <div className="flex flex-col items-start gap-3 ">
                    <h1 className="text-gray-800 font-bold text-2xl">About the movie</h1>
                    <p>{movie.overview}</p>
                </div>

                <div className="my-8">
                    <hr />
                </div>

                <div className="my-8">
                    <h2 className="text-gray-800 font-bold text-2xl mb-3">Applicable Offers</h2>
                    <div className="flex flex-col gap-3 lg:flex-row">
                        <div className="flex items-start gap-2 bg-yellow-100 p-3 border-yellow-400 border-dashed border-2 rounded-md">
                            <div className="w-8 h-8">
                                <FaCcVisa className="w-full h-full" />
                            </div>
                            <div className="flex flex-col items-start ">
                                <h3 className="text-gray-700 text-xl font-bold">Visa Stream Offer</h3>
                                <p className="text-gray-800 ">Get 50% off up to INR 150 on all Rupay card on Bookmyshow stream</p>
                            </div>
                        </div>
                        <div className="flex items-start gap-2 bg-yellow-100 p-3 border-yellow-400 border-dashed border-2 rounded-md">
                            <div className="w-8 h-8">
                                <FaApplePay className="w-full h-full" />
                            </div>
                            <div className="flex flex-col items-start ">
                                <h3 className="text-gray-700 text-xl font-bold">Film Pass</h3>
                                <p className="text-gray-800 ">Get 50% off up to INR 150 on all Rupay card on Bookmyshow stream</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Cast & Crew */}
                <div className="my-8">
                    <h2 className="text-gray-800 font-bold text-2xl mb-4">
                        Cast & Crew
                    </h2>
                    <Slider {...settingsCast}>
                        {cast.map((castData)=>{
                            <Cast image={castData.profile_path} castName={castData.original_name} role={castData.character}  />
                        })}
                    </Slider>
                </div>
                <div className="my-8">
                    <hr />
                </div>

                {/* Movies */}
                <div className="my-8">
                    <PosterSlider config={settings} title="Recommended Movies" posters={recommendedMovies} isDark={false} />
                </div>
                <div className="my-8">
                    <hr />
                </div>

                {/* Movies */}
                <div className="my-8">
                    <PosterSlider config={settings} title="BMX EXCLUSIVE" posters={similarMovies} isDark={false} />
                </div>
                <div className="my-8">
                    <hr />
                </div>

            </div>
        </>
    )
};

export default MovieLayoutHoc(MoviePage);