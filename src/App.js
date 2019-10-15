import React, { Component } from 'react';
import { Grid, Col, Row } from 'react-flexbox-grid';
import Paper from '@material-ui/core/Paper';
import AppBar from '@material-ui/core/AppBar';
import Typography from '@material-ui/core/Typography';
import Toolbar from '@material-ui/core/Toolbar';
import LocationListContainer from './containers/LocationListContainer';
import './App.css';
import ForecastExtendedContainer from './containers/ForecastExtendedContainer';

const cities = [
  'Santo Domingo,DO',
  'Quebec,CA',
  'Madrid,ES,',
  'Berlin,DE',
]


class App extends Component {


  render() {
    return (
      <Grid>
        <Row>
          <AppBar position='sticky'>
            <Toolbar>
              <Typography variant='h3' color='inherit'>
                WeatherApp
              </Typography>
            </Toolbar>
          </AppBar>
        </Row>

        <Row>
          <Col xs={12} md={6}>
            <LocationListContainer cities={cities}> </LocationListContainer>
          </Col>

          <Col xs={12} md={6}>
            <Paper zDepth={4}>
              <div className="details">
                <ForecastExtendedContainer></ForecastExtendedContainer> :
              </div>
            </Paper>
          </Col>
        </Row>


      </Grid>
    );
  }


}


export default App;
