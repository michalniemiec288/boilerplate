import React, { Component } from 'react';
import { Grid, Row, Col, Image } from 'react-bootstrap'
import { Loader } from '../../components'
import { ChangePassword, ProfileSettings } from './components'

const Profile = ({ currentUser, firebaseMessage }) =>
  !currentUser
    ? <Row>
        <Loader />
      </Row>
    : <div>
        <Row>
          <Col sm={6}>
            <ProfileSettings />
            <br />
          </Col>
          <Col sm={6}>
            <ChangePassword />
          </Col>
        </Row>
        {firebaseMessage &&
          <div style={{ color: 'yellow', margin: '15px' }}>
            {firebaseMessage}
          </div>
        }
      </div>

export default Profile
