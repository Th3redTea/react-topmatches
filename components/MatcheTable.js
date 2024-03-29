import React, { useEffect, useState } from 'react'
import styles from '../styles/matcheTable.module.scss'
import Game from './game';
import Link from 'next/link';



var today = new Date();
var dd = today.getDate();
var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
var yyyy = today.getFullYear();

export const key = "b791e2d21fmsh2940fc670d60516p1654e6jsn05467723ece9" //free API key.
var date_from = String(yyyy + '-' + mm + '-' + dd)
// var date_to =  String(yyyy + '-' + mm + '-' + Number(dd+1))



function formatDate(date) {
  var d = new Date(date),
  month = '' + (d.getMonth() + 1),
  day = '' + d.getDate(),
  year = d.getFullYear();
  
  if (month.length < 2) 
  month = '0' + month;
  if (day.length < 2) 
  day = '0' + day;
  
  return [year, month, day].join('-');
}



export default function MatcheTable() {

  const [premierLeagueMatches, setPL] = useState([])
  const [laLigaMatches, setLaLiga] = useState([])

  useEffect( async () => {

      const abortController = new AbortController();
      const liga = await fetch(`https://api-football-v1.p.rapidapi.com/v3/fixtures?date=${formatDate(date_from)}&league=140&season=2021`, {
        "method": "GET",
        "headers": {
          "x-rapidapi-host": "api-football-v1.p.rapidapi.com",
          "x-rapidapi-key": key
        }
      })
      const ligaData = await liga.json();
      
      setLaLiga(ligaData.response)

      return () => {
        return abortController.abort();
      }
      
    },[])




    useEffect( async () => {

      const abortController = new AbortController();
      const PLreq = await fetch(`https://api-football-v1.p.rapidapi.com/v3/fixtures?date=${formatDate(date_from)}&league=39&season=2021`, {
        "method": "GET",
        "headers": {
          "x-rapidapi-host": "api-football-v1.p.rapidapi.com",
          "x-rapidapi-key": key
        }
      })
      const PLrespn = await PLreq.json();
      
      setPL(PLrespn.response)
      return () => {
        return abortController.abort();
      }      
    },[])
    

   const LigaRendering = () => (


    laLigaMatches.map((game, indx) => {

      const date = new Date(game.fixture.date)
       
      const hours = date.getHours()
      const minuts = date.getMinutes()
      return(
        <div key={game.fixture.id}>
              <p className={styles.gameTime}>{hours}:{minuts == 0 ? "00" : minuts}</p>
              <Game 
              awayTeamId={game.teams.away.id}
              homeTeamId={game.teams.home.id}
              id={game.fixture.id}
              AwayteamLogo={game.teams.away.logo}
              AwayteamName={game.teams.away.name}
              AwayTeamScore={game.goals.away == null ? game.fixture.status.short : game.goals.away}
      
              HomeTeamScore={game.goals.home == null ? game.fixture.status.short : game.goals.home}
              HometeamName={game.teams.home.name}
              HometeamLogo={game.teams.home.logo}

              />

          </div>
          )
        })
  )



   const PLrendering = () => (

    premierLeagueMatches.map((game, indx) => {

      const date = new Date(game.fixture.date)
       
      const hours = date.getHours()
      const minuts = date.getMinutes()

      return(
        <div key={game.fixture.id}>
              <p className={styles.gameTime}>{hours}:{minuts == 0 ? "00" : minuts}</p>
              <Game 
              awayTeamId={game.teams.away.id}
              homeTeamId={game.teams.home.id}
              id={game.fixture.id}
              AwayteamLogo={game.teams.away.logo}
              AwayteamName={game.teams.away.name}
              AwayTeamScore={game.goals.away == null ? game.fixture.status.short : game.goals.away}
      
              HomeTeamScore={game.goals.home == null ? game.fixture.status.short : game.goals.home}
              HometeamName={game.teams.home.name}
              HometeamLogo={game.teams.home.logo}
          
              />
          </div>
          )
        })

    
   )

  
  return(
    <div className={styles.container}>
        <h1 className={styles.ligaTitle}>Laliga Matches</h1>

          {laLigaMatches.length !== 0 ? <LigaRendering /> : <h1 style={{color: '#e63946'}}  id={styles.nomatch}>No Laliga games today 😏</h1>}
          

          <h1 className={styles.ligaTitle}>Premier league Matches</h1>
          
          {premierLeagueMatches.length !== 0 ? <PLrendering /> : <h1 style={{color: '#e63946'}}  id={styles.nomatch}>No Premier league games today 😏</h1>}


        </div>  
     )

}
