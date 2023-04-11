import { useState } from 'react';

function GalleryItem({ item }) {

    const [galleryView, setGalleryView] = useState('img');

    const swapDisplay = (event) => {
        console.log('In swapDisplay');
        setGalleryView('desc')
    }

    const display = () => {
        if (galleryView === 'img') {
            return (
                <img onClick={swapDisplay} src={item.path}></img>
            );
        } else if (galleryView === 'desc') {
            return (
                <div>
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