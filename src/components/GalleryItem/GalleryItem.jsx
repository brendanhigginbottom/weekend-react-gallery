import { useState } from 'react';
import './GalleryItem.css';

function GalleryItem({ item }) {

    const [galleryView, setGalleryView] = useState('img');

    const swapDisplay = (event) => {
        console.log('In swapDisplay');
        galleryView === 'img' ? setGalleryView('desc') : setGalleryView('img');
    }

    const display = () => {
        if (galleryView === 'img') {
            return (
                <img onClick={swapDisplay} src={item.path}></img>
            );
        } else if (galleryView === 'desc') {
            return (
                <div className="galleryDiv" onClick={swapDisplay}>
                    {item.description}
                </div>
            );
        }
    }

    return (
        <div>
           {display()}
        </div>
    );
}

export default GalleryItem;