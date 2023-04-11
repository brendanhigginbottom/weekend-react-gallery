import React from 'react';
import './App.css';
import { useState, useEffect } from 'react';
import axios from 'axios';
import GalleryList from '../GalleryList/GalleryList.jsx';

function App() {

  const [galleryItems, setGalleryItems] = useState([]);

  const getGallery = () => {
    //GET items from module
    axios.get('/gallery').then((response) => {
      setGalleryItems(response.data);
      // console.log(galleryItems);
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
        {/* <img src="images/goat_small.jpg"/> */}
        {/* <img src="images/bike.png" /> */}
        <GalleryList 
          galleryItems={galleryItems}
          getGallery={getGallery}
        />
      </div>
    );
}

export default App;
