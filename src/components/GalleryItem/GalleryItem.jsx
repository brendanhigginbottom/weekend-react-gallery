

function GalleryItem({ item }) {

    return (
        <div>
            <img src={item.path}></img>
        </div>
    );
}

export default GalleryItem;