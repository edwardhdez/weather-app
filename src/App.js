import React, { Component } from 'react';
import { Grid, Col, Row } from 'react-flexbox-grid';
import Paper from '@material-ui/core/Paper';
import AppBar from '@material-ui/core/AppBar';
import Typography from '@material-ui/core/Typography';
import Toolbar from '@material-ui/core/Toolbar';
import LocationList from './components/LocationList';
import ForecastExtended from './components/ForecastExtended';
import './App.css';

const cities = [
  'Santo Domingo,DO',
  'Quebec,CA',
  'Madrid,ES,',
  'Berlin,DE',
]

class App extends Component {

  constructor() {
    super();
    this.state = { city: null};
  }

  handleSelectedLocation = city => {
    this.setState({ city });
    console.log(`handleSelectedLocation ${city}`);

  }

  render() {
    const { city } = this.state;
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
            <LocationList
              cities={cities}
              onselectLocation={this.handleSelectedLocation}>
            </LocationList>
          </Col>

          <Col xs={12} md={6}>
            <Paper elevation={4}>
              <div className="details">
                {city ?
                  <ForecastExtended city={this.state.city}></ForecastExtended> :
                  <h1>Choose a city...</h1>
                }

              </div>
            </Paper>
          </Col>
        </Row>


      </Grid>
    );
  }


}



export default App;
