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


export default function MatcheTable() {

  const [premierLeagueMatches, setPL] = useState([])
  const [laLigaMatches, setLaLiga] = useState([])

  useEffect( async () => {

    const PLreq = await fetch(`https://app.sportdataapi.com/api/v1/soccer/matches?apikey=${key}&season_id=1980&date_from=${date_from}&date_to=${date_to}`)
    const PLrespn = await PLreq.json();
    const PLdata = PLrespn.data

    const ligareq = await fetch(`https://app.sportdataapi.com/api/v1/soccer/matches?apikey=${key}&season_id=2029&date_from=${date_from}&date_to=${date_to}`)
    const ligarespn = await ligareq.json();
    const ligaData = ligarespn.data


    
    if(PLdata && PLdata.length !== 0){
      setPL(PLdata)
    } 
    
    if(ligaData && ligaData.length !== 0){
      setLaLiga(ligaData)
    } else {
        return
      }
  },[])

  console.log(premierLeagueMatches)

  return(
      <div key={Math.random() * 100} className={styles.container}>
        <h1 className={styles.ligaTitle}>Premier league Matches</h1>

      {
         premierLeagueMatches.map(game => {
                          
              return(
                <>

                  <p className={styles.gameTime}>{game.match_start}</p>
                  <Game 
                  id={game.match_id}
                  AwayteamLogo={game.away_team.logo}
                  AwayteamName={game.away_team.name}
                  AwayTeamScore={game.stats.away_score}
          
                  HomeTeamScore={game.stats.home_score}
                  HometeamName={game.home_team.name}
                  HometeamLogo={game.home_team.logo}
              
                  />
              </>
              )
        })
      }  

            <h1 className={styles.ligaTitle}>Laliga Matches</h1>
          
          
        {
          laLigaMatches.map(game => {
                     
                        return(
                          <>
                        <p className={styles.gameTime}>{game.match_start}</p>
                        <Game 
                        id={game.match_id}
                        AwayteamLogo={game.away_team.logo}
                        AwayteamName={game.away_team.name}
                        AwayTeamScore={game.stats.away_score}
                
                        HomeTeamScore={game.stats.home_score}
                        HometeamName={game.home_team.name}
                        HometeamLogo={game.home_team.logo}
                    
                    />
                    </>
                    )
                })
        }
        </div>  
    )

}
