import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import Header from './components/Header'
import SideBar from './components/SideBar'
import Main from './components/Main'
import Footer from './components/Footer'
import BackToTop from './components/BackToTop'
import { ThemeProvider } from './contexts/ThemeContext'
import './css/theme.css'

function App() {
  return (
    <Router>
      <ThemeProvider>
        <>
          <Header />
          <SideBar />
          <Main />
          <Footer />
          <BackToTop />
        </>
      </ThemeProvider>
    </Router>
  )
}

export default App 