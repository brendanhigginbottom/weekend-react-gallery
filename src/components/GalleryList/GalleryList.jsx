import GalleryItem from '../GalleryItem/GalleryItem.jsx';


function GalleryList({ galleryItems, getGallery }) {

    return (

        <>
            {
                galleryItems.map((item) => (
                    <GalleryItem 
                        key={item.id}
                        item={item}
                        getGallery={getGallery}
                    />
                ))
            }
        </>
    );
}

export default GalleryList;