import React from 'react'
import '../css/main.css'
import PageTitle from './PageTitle'
import Dashboard from './Dashboard'

function Main() {
  return (
    <main id="main" className="main">
      <div className="container-fluid">
        <PageTitle page="Dashboard" />
        <Dashboard />
      </div>
    </main>
  )
}

export default Main
