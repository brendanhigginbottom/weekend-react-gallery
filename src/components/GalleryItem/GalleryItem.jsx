import { useState, useEffect } from 'react';
import './GalleryItem.css';
import axios from 'axios';


function GalleryItem({ item, getGallery }) {
    //used state to toggle between photo and desc
    const [itemView, setGalleryView] = useState('img');

    // useEffect(() => {
    //     getGallery();
    //   }, []);

    //checks the value of state
    const swapDisplay = (event) => {
        console.log('In swapDisplay');
        itemView === 'img' ? setGalleryView('desc') : setGalleryView('img');
    }

    //renders based on state
    const displayItem = () => {
        if (itemView === 'img') {
            return (
                <img onClick={swapDisplay} src={item.path}></img>
            );
        } else if (itemView === 'desc') {
            return (
                <div 
                onClick={swapDisplay}>
                    {item.description}
                </div>
            );
        }
    }

    //PUT to add like
    const addLike = (e) => {
        axios.put(`/gallery/like/:${item.id}`).then((response) => {
            console.log('in addLike');
            getGallery();
        }).catch((error) => {
            console.log(`Error in PUT ${error}`);
            alert('Something went wrong.');
        });
    }

    return (
        <div>
           {displayItem()}
           <br />
           <div>
            Likes: {item.likes} <button onClick={((e) => addLike(e))}>Like</button>
           </div>
        </div>
    );
}

export default GalleryItem;