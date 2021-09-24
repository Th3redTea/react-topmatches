import React, {useEffect, useState} from 'react'
import styles from '../../styles/team.module.scss'
import Image from 'next/image'
import { key } from '../../components/matcheTable'

function Team() {


    const [data, setData] = useState([])

    useEffect( async () => {

        const enReq = await fetch(`https://app.sportdataapi.com/api/v1/soccer/teams/?apikey=a0304240-a167-11eb-a64f-81eb7badeea4&country_id=42`)
        const enRespn = await enReq.json()
        
        setData(enRespn.data)
        console.log(data)

    }, [])

    return (
        <div className={styles.container}>
            <div className={styles.teamLogo}>
                {/* <Image /> */}
            </div>

            <h1>Team Name</h1>


            
        </div>
    )
}

export default Team
