import React, {useEffect} from 'react';
import {photosOperations} from "../redux/ducks/photos";
import {useDispatch, useSelector} from "react-redux";
import Indicator from './LoadingIndicator';
import {selectors} from '../redux/ducks/photos'
import {PhotosData} from "../redux/ducks/types";

function UserPhotos(props: any) {
    // componentDidMount() {
    //     this.props.getPhotosList(this.props.match.params.albumId);
    // }

    const isFetching: boolean = useSelector(selectors.getIsFetchingSelector);
    const photos: PhotosData[] = useSelector(selectors.getPhotosSelector);
    const albumId = props.match.params.albumId;
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(photosOperations.getPhotosAsync(albumId));
    }, [albumId]);

    console.log(photos);

    if (isFetching) {
        return (<Indicator/>);
    }
    return (
        <div className="container">
            <h1 className="font-weight-light text-center mt-4 mb-0">Gallery</h1>
            <hr className="mt-2 mb-5"/>
            {photos.map(photo => (
                <div key={photo.id} className="col-lg-3 mb-4 col-md-4 col-6" style={{display: "inline-block"}}>
                    <img className="img-fluid img-thumbnail" alt={photo.title} src={photo.url}/>
                </div>
            ))}
        </div>
    );
}

// const mapStateToProps = (state) => {
//     return {
//         photos: selectors.getPhotosSelector(state),
//         isFetching: selectors.getIsFetchingSelector(state)
//     }
// };
//
// const mapDispatchToProps = (dispatch) => {
//     return {
//         getPhotosList: (albumId) => dispatch(photosOperations.getPhotosAsync(albumId))
//     }
// };

// export default connect(mapStateToProps, mapDispatchToProps)(UserPhotos);

export default UserPhotos;
