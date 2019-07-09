import React from 'react';
import { Grid, Col, Row } from 'react-flexbox-grid';
import LocationList from './components/LocationList';
import './App.css';

const cities = [
  'Santo Domingo,DO',
  'Quebec,CA',
  'Madrid,ES,',
  'Berlin,DE',
]

const handleSelectedLocation = city => {
  console.log(`handleSelectedLocation ${city}`);

}

function App() {
  return (
    <Grid>
      <Row>
        Titulo
      </Row>

      <Row>
        <Col xs={12} md={6}>
          <LocationList
            cities={cities}
            onselectLocation={handleSelectedLocation}>
          </LocationList>
        </Col>

        <Col xs={12} md={6}>
          <div className="details"></div>
        </Col>
      </Row>


    </Grid>
  );
}

export default App;
