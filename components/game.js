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
                width={66}
                height={66}
                />
            </div>
                <Link href={'/teams/'+awayTeamId}>
                    <a className={styles.teamName}>
                        {AwayteamName}
                    </a>
                </Link>


            <span className={styles.result}>
                <span>
                    {AwayTeamScore}
                </span>
                <span>:</span>
                <span>
                    {HomeTeamScore}
                </span>
            </span>    

            <Link href={'/teams/'+homeTeamId}>
                    <a className={styles.teamName}>
                        {HometeamName}
                    </a>
                </Link>
            <div className={styles.logo}>
                <Image 
                src={HometeamLogo} 
                alt={HometeamName}
                width={66}
                height={66}
                />
            </div>
        </div>
    )
}

export default Game


