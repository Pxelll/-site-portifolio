import React from 'react'
import styles from './Post.module.css'


const Post = ({ post }) => {
  return (
    <div className={styles.post}>
        <img 
            className={styles.capa}
            src={`public/assets/posts/${post.id}/capa.png`}
            alt="Imagem de capa do projeto" 
        />
        <h2 className={styles.titulo}>{post.titulo}</h2>

        <button className={styles.botaoLer}>Ler</button>
    </div>
  )
}

export default Post