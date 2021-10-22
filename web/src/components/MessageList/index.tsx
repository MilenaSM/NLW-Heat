import { useEffect } from 'react';
import { api } from '../../services/api';

import styles from './styles.module.scss'
import logoImg from '../../assets/logo.svg';

export function MessageList() {
  useEffect(() => {
    // chamada para a api
    api.get('messages/last3').then(response => {
      console.log(response.data)
    })
  }, [])

  return (
    <div className={styles.messageListWrapper}>
      <img src={logoImg} alt="DoWhile 2021" />

      <ul className={styles.messageList}>
        <li className={styles.message}>
          <p className={styles.messageContent}>Não vejo a hora de cineçar esse evendo, com certeza vai ser o melhor de todos os tempos, vamoos pra cima! 🔥 🔥</p>
          <div className={styles.messageUser}>
            <div className={styles.userImage}>
              <img src="https://github.com/milenasm.png" alt="" />
            </div>
            <span>Milena Monteiro</span>
          </div>
        </li>

        <li className={styles.message}>
          <p className={styles.messageContent}>Não vejo a hora de cineçar esse evendo, com certeza vai ser o melhor de todos os tempos, vamoos pra cima! 🔥 🔥</p>
          <div className={styles.messageUser}>
            <div className={styles.userImage}>
              <img src="https://github.com/milenasm.png" alt="" />
            </div>
            <span>Milena Monteiro</span>
          </div>
        </li>

        <li className={styles.message}>
          <p className={styles.messageContent}>Não vejo a hora de cineçar esse evendo, com certeza vai ser o melhor de todos os tempos, vamoos pra cima! 🔥 🔥</p>
          <div className={styles.messageUser}>
            <div className={styles.userImage}>
              <img src="https://github.com/milenasm.png" alt="" />
            </div>
            <span>Milena Monteiro</span>
          </div>
        </li>
      </ul>
    </div>
  )
}