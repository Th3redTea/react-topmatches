import React, { useState, useEffect } from 'react'
import styles from '../../styles/standings.module.scss'
import Image from 'next/image'
import { key } from '../../components/matcheTable'


function Team({
    
    teamPosition,
    teamName,
    teamPoints,
    gamesPlayed,
    won,
    lose,
    draw,
    goals,

}) {
    return (
        <div className={styles.Team}>
            <span>{teamPosition}</span>
            <span>{teamName}</span>
            <span>{gamesPlayed}</span>
            <span>{won}</span>
            <span>{lose}</span>
            <span>{draw}</span>
            <span>{goals}</span>
            <span>{teamPoints}</span>
        </div>
    )
}





function Laliga() {
    
    const [ligaStanding, setData] = useState([])
            
    
    useEffect( async () => {
        const ligareq = await fetch("https://api-football-v1.p.rapidapi.com/v3/standings?season=2021&league=140", {
            "method": "GET",
            "headers": {
                "x-rapidapi-host": "api-football-v1.p.rapidapi.com",
                "x-rapidapi-key": key
            }
        })

        const laligaStanding = await ligareq.json();
        const league = laligaStanding.response[0].league
        const standing = league.standings
        setData(standing[0])   
        
    }, [])
    
    
    return (
        <>

            <div className={styles.laliga}>
                <span>Position</span>
                <span>Team</span>
                <span>MP</span>
                <span>W</span>
                <span>L</span>
                <span>D</span>
                <span>G</span>
                <span>Pts</span>

            </div>
                {
                    ligaStanding.map((teams, idx) => {

                        return(
                            <div key={idx}>
                                <Team 
                                key={teams.team.id}
                                teamPosition={teams.rank}
                                teamName={teams.team.name}
                                teamPoints={teams.points}
                                gamesPlayed={teams.all.played}
                                won={teams.all.win}
                                lose={teams.all.lose}
                                draw={teams.all.draw}
                                goals={teams.all.goals.for}
                                
                                />
                            </div>
                        )
                    })                    

                }

        </>
    )
}

function laliga() {
    return (
        <div className={styles.container}>
            <h1>Laliga Standings</h1>
            <Laliga />
        </div>
    )
}

export default laliga
