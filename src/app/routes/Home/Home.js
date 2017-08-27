import React from 'react'
import { Grid, Button } from 'react-bootstrap'
import { isNotEmpty } from '../../utils/object'

const Home = ({ currentUser }) => 
  isNotEmpty(currentUser)
    ? <div>
        Witaj {currentUser.displayName}
      </div>
    : <div>
        Zawartość strony głównej dla niezalogowanych
      </div>

export default Home
