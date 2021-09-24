import React, { useEffect, useState } from 'react'
import { key } from '../../components/matcheTable'






function Details() {

    useEffect(
        async () => {
    
            const [data, setData] = useState([])
    
            const res = await fetch(`https://app.sportdataapi.com/api/v1/soccer/teams?apikey=${key}?country_id=113`)
        
            const  teamsData  = await res.json()
            
            setData(teamsData)
            
            const paths = data.map(team => {
                return {
                    params: {
                        id:  team.team_id.toString()
                    }
                }
            })
        
            return {
                paths,
                fallbacks: false
            }
        },[]
    ) 


    useEffect(async () => {



        
    const id = params.id

    const res = await fetch(`https://app.sportdataapi.com/api/v1/soccer/teams/${id}apikey=${key}?`)
    const teamData = await res.json();

    console.log(teamData)

    }, [])

    return (
        <div>
            <h1>Details Page</h1>
        </div>
    )
}

export default Details
