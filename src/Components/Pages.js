import React, { useState, useEffect } from "react";
import BotCollection from "./BotCollection";
import Sort from "./Sort";
import Favorites from "./Favorites";
import Army from "./Army";
import { Route, Routes } from "react-router-dom";


function Pages (){
    const [bots, setBots] = useState([]);
    const [favorites, setFavorites] = useState([]);
    const [army, setArmy] = useState([]);
    const [selectedFilters, setSelectedFilters] = useState([]);

    useEffect(() => {
        fetchData();
    }, []);

    function fetchData() {
        fetch ("https://droid-empire-server.onrender.com/bots")
        .then (r => r.json())
        .then (bots => setBots(bots))
    } 

    function addToFavorites(bot) {
        setFavorites((prevFavorites) => [...prevFavorites, bot]);
    }

    function removeFromFavorites(botId) {
    setFavorites((prevFavorites) => prevFavorites.filter((bot) => bot.id !== botId));
    }

    function addToArmy (bot) {
        setArmy((prevArmy) => [...prevArmy, bot]);
    }

    function dischargeFromArmy(botId){
        setArmy((prevArmy) => prevArmy.filter((bot) => bot.id !== botId))
    }
    
    // Function to update selected filters
    function handleFilterChange (filters) {
        setSelectedFilters(filters);
    };

    return (
    
        <section className="container bot-container px-0">
            <Sort handleFilterChange={handleFilterChange}/>
            <Routes>
                <Route path="/" element={<BotCollection bots={bots} setBot={setBots} addToFavorites={addToFavorites} addToArmy={addToArmy} selectedFilters={selectedFilters} />}></Route>
                <Route path="/favorites" element={<Favorites favorites={favorites} removeFromFavorites={removeFromFavorites} addToArmy={addToArmy} />}></Route>
                <Route path="/army" element={<Army army={army} dischargeFromArmy={dischargeFromArmy} />}></Route>
            </Routes>

        </section>
    )
}


export default Pages;