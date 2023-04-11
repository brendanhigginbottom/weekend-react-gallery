import GalleryItem from '../GalleryItem/GalleryItem.jsx';


function GalleryList({ galleryItems, getGallery }) {

    return (

        <div>
            {
                galleryItems.map((item) => (
                    <GalleryItem 
                        key={item.id}
                        item={item}
                        getGallery={getGallery}
                    />
                ))
            }
        </div>
    );
}

export default GalleryList;