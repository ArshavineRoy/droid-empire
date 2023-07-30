import React, { useState, useEffect } from "react";
import BotCollection from "./BotCollection";
import Sort from "./Sort";


function Body (){
    const [bots, setBots] = useState([])

    useEffect(() => 
        fetchData, [])

    function fetchData() {
        fetch ("http://localhost:3000/bots")
        .then (r => r.json())
        .then (bots => setBots(bots))
    } 



    return (
    
        <section className="container bot-container px-0">
            <Sort />
            <BotCollection bots={bots} setBot={setBots}/>

        </section>
    )
}


export default Body;