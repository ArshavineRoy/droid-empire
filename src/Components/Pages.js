import React, { useState, useEffect } from "react";
import BotCollection from "./BotCollection";
import Sort from "./Sort";
import Favorites from "./Favorites";
import Army from "./Army";
import { Route, Routes } from "react-router-dom";


function Pages (){
    const [bots, setBots] = useState([]);
    const [favorites, setFavorites] = useState([]);

    useEffect(() => 
        fetchData, [])

    function fetchData() {
        fetch ("http://localhost:3000/bots")
        .then (r => r.json())
        .then (bots => setBots(bots))
    } 

    function addToFavorites(bot) {
        setFavorites((prevFavorites) => [...prevFavorites, bot]);
      }

    return (
    
        <section className="container bot-container px-0">
            <Sort />
            <Routes>
                <Route path="/" element={<BotCollection bots={bots} setBot={setBots} addToFavorites={addToFavorites}/>}></Route>
                <Route path="/favorites" element={<Favorites bots={bots} addToFavorites={addToFavorites}/>}></Route>
                <Route path="/army" element={<Army />}></Route>
            </Routes>

        </section>
    )
}


export default Pages;