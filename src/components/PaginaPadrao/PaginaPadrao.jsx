import React from 'react'
import Banner from '../Banner/Banner'
import { Outlet } from 'react-router-dom'

const PaginaPadrao = () => {
  return (
    <main>
        <Banner />

        <Outlet />
    </main>
  )
}

export default PaginaPadrao