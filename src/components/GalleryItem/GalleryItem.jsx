import { useState } from 'react';

function GalleryItem({ item }) {

    const [galleryView, setGalleryView] = useState('a');

    const test = () => {
        return (
            <div>Test</div>
        )
    }

    return (
        <div>
           {test()}
        </div>
    );
}

export default GalleryItem;