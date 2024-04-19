import React from 'react'
import styles from './Banner.module.css';
import ellipse from '@/assets/ellipse.png';
import minhaFoto from '@/assets/minha_foto.png';

const Banner = () => {
  return (
    <div className={styles.banner}>
        <div className={styles.apresentacao}>
            <h1 className={styles.titulo}>
                Bem-vindo!
            </h1>
            <p className={styles.paragrafo}>
                Me chamo Thiago e esse é o meu site de portfólio!
                <br/>
                Desenvolvo sites para você.
            </p>
            <p className={styles.paragrafo}>                
                Sou um profissional dedicado a fornecer soluções de alta qualidade para suas necessidades. Estou comprometido em fornecer resultados excepcionais e estou pronto para colaborar com você resolvendo seu problema.
            </p>
        </div>
        <div className={styles.imagens}>
            <img 
                className={styles.ellipse}
                src={ellipse}
                aria-hidden={true}
            />

            <img 
                className={styles.minhaFoto}
                src={minhaFoto}
                alt="Foto do profissional Vinícius Silvano." 
            />
        </div>
        {/* <p className={styles.chamadaContato}>
            Entre em contato para tirar suas dúvidas e solucionar seu problema!
        </p> */}
    </div>
  )
}

export default Banner