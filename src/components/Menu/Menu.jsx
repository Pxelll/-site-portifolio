import React from 'react'
import styles from './Menu.module.css';
import MenuLink from '../MenuLink/MenuLink';

const Menu = () => {
  return (
    <div className={styles.navegacao}>
      <MenuLink to='/'>
        Início
      </MenuLink>
      <MenuLink to='/sobremim'>
        Sobre Mim
      </MenuLink>
    </div>
  )
}

export default Menu