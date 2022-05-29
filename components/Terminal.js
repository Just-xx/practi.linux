import React, { useState } from 'react'
import styles from '../styles/Terminal.module.scss'

const Terminal = () => {

  const [location, setLocation] = useState('/')
  const [user, setUser] = useState("practiLinux")
  const machine = "computer"

  const [command, setCommand] = useState('');

  return (
    <div className={styles.terminal}>
      <input type="text" name="command" id="command" className={styles.input} value={command} onChange={e => setCommand(e.target.value)} />
      
      <div className={styles.infoLine}><span className={styles.pcInfo}>{user}@{machine}</span>:<span className={styles.location}>{location}</span>$</div>
      <div className={styles.command}>{command}<span className={styles.carret}></span></div>
    </div>
  )
}

export default Terminal