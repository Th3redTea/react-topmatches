import React from 'react'
import styles from '../styles/game.module.scss'
import Image from 'next/image'

function Game(
    {
    id, 
    AwayteamLogo,
    AwayteamName,
    AwayTeamScore,
    HomeTeamScore,
    HometeamName,
    HometeamLogo
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

                <p className={styles.teamName}>
                    {AwayteamName}
                </p>

            <div className={styles.result}>
                <span>
                    {AwayTeamScore}
                </span>
                <span>:</span>
                <span>
                    {HomeTeamScore}
                </span>
            </div>    

            <p className={styles.teamName}>
                    {HometeamName}
            </p>
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


