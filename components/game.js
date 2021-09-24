import React from 'react'
import styles from '../styles/game.module.scss'
import Image from 'next/image'
import Link from 'next/link'

function Game(
    {
    id, 
    AwayteamLogo,
    AwayteamName,
    AwayTeamScore,
    HomeTeamScore,
    HometeamName,
    HometeamLogo,
    awayTeamId,
    homeTeamId

    }
    ) {
    return (
        <div key={id} className={styles.container}>
            <div className={styles.logo}>
                <Image 
                src={AwayteamLogo} 
                alt={AwayteamName}
                width={45}
                height={45}
                />
            </div>
                <Link href={'/teams/'+awayTeamId}>
                    <a className={styles.teamName}>
                        {AwayteamName}
                    </a>
                </Link>


            <div className={styles.result}>
                <span>
                    {AwayTeamScore}
                </span>
                <span>:</span>
                <span>
                    {HomeTeamScore}
                </span>
            </div>    

            <Link href={'/teams/'+homeTeamId}>
                    <a className={styles.teamName}>
                        {HometeamName}
                    </a>
                </Link>
            <div className={styles.logo}>
                <Image 
                src={HometeamLogo} 
                alt={HometeamName}
                width={45}
                height={45}
                />
            </div>
        </div>
    )
}

export default Game


