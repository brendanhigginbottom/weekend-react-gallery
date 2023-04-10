import GalleryItem from '../GalleryItem/GalleryItem.jsx';


function GalleryList({ galleryItems }) {

    return (

        <>
            {
                galleryItems.map((item) => (
                    <GalleryItem 
                        key={item.id}
                        item={item}
                    />
                ))
            }
        </>
    );
}

export default GalleryList;