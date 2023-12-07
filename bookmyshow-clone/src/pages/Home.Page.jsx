import React, { useState, useEffect } from "react";
import DefaultLayoutHoc from "../layout/Default.layout";
import {API_KEY , popularUrl , upcomingUrl , topRatedUrl} from "../constants/constants";


// Components
import PosterSlider from "../components/PosterSlider/PosterSlider.Component";
import HeroCarousel from "../components/HeroCarousel/HeroCarousel.Component";
import EntertainmentCardSlider from "../components/Entertainment/EntertainmentCard.Component";

import axios from '../axios';

const HomePage = () =>{
    const [recommendedMovies , setRecommendedMovies] = useState([]);
    const [premierMovies , setPremierMovies] = useState([]);
    const [onlineStreamEvents , setOnlineStreamEvents] = useState([]);

    useEffect (()=>{
        const requestTopRatedMovies = async() => {
            const getTopRatedMovies = await axios.get(`${topRatedUrl}?api_key=${API_KEY}&with_networks=213`);
            setRecommendedMovies(getTopRatedMovies.data.results);
         }
        requestTopRatedMovies();
    },[]);

    useEffect (()=>{
        const requestToUpcomingMovies = async() => {
            const getUpComingMovies = await axios.get(`${upcomingUrl}?api_key=${API_KEY}&with_networks=213`);
            setPremierMovies(getUpComingMovies.data.results);
         }
        requestToUpcomingMovies();
    },[]);

    useEffect (()=>{
        const requestToPopularMovies = async() => {
            const getPopularMovies = await axios.get(`${popularUrl}?api_key=${API_KEY}&with_networks=213`);
            setOnlineStreamEvents(getPopularMovies.data.results);
         }
        requestToPopularMovies();
    },[]);




    return ( 
    <>
    <HeroCarousel/>
    <div className="container mx-auto px-4 md:px-12 my-8">
         <h1 className="text-2xl font-bold  text-gray-800  sm:ml-3 ml-0 my-3 " >The Best of Entertainment</h1>
         <EntertainmentCardSlider/>
    </div>
    <div className="container mx-auto px-4 md:px-12 my-8">
        <PosterSlider
        title="Recommended Movies"
        subtitle="List of Recommended Movies"
        posters={recommendedMovies}
        isDark={false}
        />
    </div>
        
        <div className="bg-premier-800 py-12">
            <div className="container mx-auto px-4 md:px-12 my-8 flex flex-col gap-3">
                <div className="hidden md:flex">
                    <img src="https://assets-in.bmscdn.com/discovery-catalog/collections/tr:w-1440,h-120/premiere-banner-web-collection-202208191200.png" alt="Premier" className="w-full h-full" />
                </div>

                <PosterSlider
        title="Premiers"
        subtitle="Brand new release every Friday"
        posters={premierMovies}
        isDark={true}
        />
        
            </div>
        </div>
        <div className="container mx-auto px-4 md:px-12 my-8 flex flex-col gap-3">
             <PosterSlider 
        title="Online Streaming Events"
        subtitle="Online Streaming Events"
        posters={onlineStreamEvents}
        isDark={false}
        />
        </div>
    </>
    )
};
 

export default DefaultLayoutHoc(HomePage) ;