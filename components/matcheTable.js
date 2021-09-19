import React, { useEffect, useState } from 'react'
import styles from '../styles/matcheTable.module.scss'
import Game from './game';



var today = new Date();
var dd = today.getDate();
var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
var yyyy = today.getFullYear();

const key = "a0304240-a167-11eb-a64f-81eb7badeea4" //free API key.
var date_from = String(yyyy + '-' + mm + '-' + dd)
var date_to =  String(yyyy + '-' + mm + '-' + Number(dd+1))

function MatcheTable() {


    // const [teamInfo, setTeamInfo] = useState([])
    const [todaysMatches, setData] = useState([])

  
    useEffect( async () => {
  
      const req = await fetch(`https://app.sportdataapi.com/api/v1/soccer/matches?apikey=${key}&season_id=1980&date_from=${date_from}&date_to=${date_to}`)
      const respn = await req.json();
      setData(respn.data)
      
    }, [])
    

    return(
        <div className={styles.container}>
        {
            todaysMatches.map(game => {
                     
                    return(
                    <Game 
                    id={game.match_id}
                    AwayteamLogo={game.away_team.logo}
                    AwayteamName={game.away_team.name}
                    AwayTeamScore={game.stats.away_score}
            
                    HomeTeamScore={game.stats.home_score}
                    HometeamName={game.home_team.name}
                    HometeamLogo={game.home_team.logo}
                
                />)
            })
        }
        </div>  
    )
  
  }

export default MatcheTable
