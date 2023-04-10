


function GalleryList({ galleryItems }) {

    return (

        <>
            {
                galleryItems.map((item) => (
                    <GalleryItem 
                        key={item.id}
                        path={item.path}
                        desc={item.description}
                        likes={item.likes}
                    />
                ))
            }
        </>
    );
}

export default GalleryList;