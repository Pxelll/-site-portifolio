import React from 'react'
import styles from './Rodape.module.css'
import MarcaRegistrada from '@/assets/marca_registrada.svg';

const Rodape = () => {
  return (
    <footer className={styles.rodape}>
        <img src={MarcaRegistrada} alt="" />    
        <p>Desenvolvido por Thiago Adam.</p>
    </footer>
  )
}

export default Rodape