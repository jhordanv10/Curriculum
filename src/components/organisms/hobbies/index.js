import React, { useState, useEffect } from "react";
import CardMarvel from "../../moleculas/cardMarvel";
import CardMusic from "../../moleculas/cardMusic";
import Loading from '../../atoms/Loading';

import axios from 'axios';
import './Hobbies.scss';




function Hobbies() {

    //Api
    const [dataMarvel, setDataMarvel] = useState([])

    const [dataYoutube, setDataYoutube] = useState([])

    const [loading, setLoading] = useState(false)

    const marvelApi = axios.create({
        baseURL: 'https://gateway.marvel.com:443/v1/public/comics?ts=1&apikey=b59a1df57b614af737ec6d2b7e70fa00&hash=0e85b1397bef390a57f4ca51c8b692fb'
    })

    const youtubeApi = axios.create({
        baseURL: 'https://www.googleapis.com/youtube/v3/search?key=AIzaSyDzguhQ1VIjg8CoImDV90vRCjGUM3U69OA&channelId=UCa1SCOs4OJoLiKJtBUBVUcA&part=snippet,id&order=date&maxResults=6'
    })


    useEffect(() => {
        setLoading(true)

        marvelApi.get('')
            .then(res => {
                setDataMarvel(res.data.data.results)
                setLoading(false)
            })
            .catch(error =>
                console.log(error)
            )
            .then(
                youtubeApi.get('')
                    .then(res => {
                        setDataYoutube(res.data.items)
                        
                    })
                    .catch(error =>
                        console.log(error)
                    )
            )

    }, [])

    console.log('Marvel data: ', dataMarvel)
    console.log('Youtube data: ', dataYoutube)

    return (
        <section id="hobbies">
            <h2>Hobbies</h2>
            {loading ? <Loading /> : (
                <>
                    <articule className="description_hobbies">
                        <h3> En mis tiempos libres, me gusta mucho leer y ver todo lo relacionado con el universo Marvel.
                            Cómics, series y películas... </h3>
                        <div className="marvel">
                            {dataMarvel && dataMarvel.map(marvel => {
                                return (
                                    <CardMarvel
                                        key={marvel.id}
                                        id={marvel.id}
                                        title={marvel.title}
                                        imgPath={marvel.thumbnail.path}
                                        imgExtension={marvel.thumbnail.extension}
                                        pages={marvel.pageCount}
                                    />
                                )
                            })}
                        </div>

                    </articule>
                    <articule className="description_hobbies">
                    <h3 className="title_music"> También, en mis ratos libres me gusta escuchar música. Mi género preferido es la salsa, en específico, la clásica</h3>
                        <div className="youtube">
                            {dataYoutube && dataYoutube.map(youtube => {
                                return (
                                    <CardMusic
                                        key={youtube.snippet.id}
                                        videoId={youtube.id.videoId}
                                        title={youtube.snippet.title}
                                        imgMusic = {youtube.snippet.thumbnails.default.url}
                                        publishTime = {youtube.snippet.publishTime}
                                    />
                                )
                            })}
                        </div>

                    </articule>
                </>
            )}
        </section>
    )
}
export default Hobbies;


