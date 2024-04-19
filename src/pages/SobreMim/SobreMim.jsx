import React from 'react'
import PostModelo from '../../components/PostModelo/PostModelo'
import fotoCapa from '@/assets/sobre_mim_capa.png'

const SobreMim = () => {
  return (
    <PostModelo
      fotoCapa={fotoCapa}
      titulo='Sobre Mim'
    >
      conteudo...
    </PostModelo>
  )
}

export default SobreMim