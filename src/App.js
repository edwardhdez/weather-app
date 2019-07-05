import React from 'react';
import LocationList from './components/LocationList';
import './App.css';

const cities = [
  'Santo Domingo,DO',
  'Quebec,CA',
  'Madrid,ES,',
  'Berlin,DE',
]

function App() {
  return (
    <div className="App">
      <LocationList cities={cities}></LocationList>
    </div>
  );
}

export default App;
