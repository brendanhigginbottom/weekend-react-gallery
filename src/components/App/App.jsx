import React from 'react';
import './App.css';
import { useState, useEffect } from 'react';
import axios from 'axios';

function App() {

  const [galleryItems, setGalleryItems] = useState({});

  const getGallery = () => {
    //GET items from module
    axios.get('/gallery').then((response) => {
      setGalleryItems(response.data);
      console.log(galleryItems[1]);
    }).catch((error) => {
      console.log(`Error in GET ${error}`);
      alert('Something went wrong.');
    });
  }

  useEffect(() => {
    getGallery();
  }, []);

    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Gallery of My Life</h1>
        </header>
        <p>Gallery goes here</p>
        {/* <img src="images/goat_small.jpg"/> */}
        <img src="images/bike.png" />
      </div>
    );
}

export default App;
