import { Button, Card } from '@mantine/core'
import styles from '../styles/Home.module.css'

import NavMenu from '../components/NavMenu'
import ScrollElement from '../components/ScrollElement'


export default function Home() {



  return (
    <div className={styles.container}>
      <NavMenu/>
      <ScrollElement />
    </div>
    
  )
}
