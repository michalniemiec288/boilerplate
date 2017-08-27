import React from 'react'
import { Grid } from 'react-bootstrap'
import { Header, Footer } from './components'

const App = ({ children }) => (
  <div className="app">
    <Header />
    <Grid className="content">
      {children}
    </Grid>
    <Footer />
  </div>
)

export default App
