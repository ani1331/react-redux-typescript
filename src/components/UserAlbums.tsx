import React, {useEffect} from 'react';
import {Link} from 'react-router-dom';
import {albumsOperations} from "../redux/ducks/albums";
import {useDispatch, useSelector} from "react-redux";
import Indicator from './LoadingIndicator'
import '../styles/cards-gallery.css';
import {selectors} from '../redux/ducks/albums'
import {AlbumsData} from "../redux/ducks/types";

// type UsersAlbumsProps = ReturnType<typeof mapStateToProps> & ReturnType<typeof mapDispatchToProps>;

function UserAlbums(props: any) {
    // componentDidMount() {
    //     this.props.getUserAlbums(this.props.match.params.userId);
    // }
    const isFetching: boolean = useSelector(selectors.getIsFetchingSelector);
    const albums: AlbumsData[] = useSelector(selectors.getAlbumsSelector);
    const userId = props.match.params.userId;
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(albumsOperations.getUserAlbumsAsync(userId));
    }, [userId]);

    if (isFetching) {
        return (<Indicator/>);
    }

    return (
        <div className="container">
            <h1 className="font-weight-light text-center mt-4 mb-0">Albums</h1>
            <hr/>
            {
                albums.map((album) => (
                    <div key={album.id} className="col-sm-4" style={{display: "inline-block"}}>
                        <Link to={`/photos/${album.id}`} style={{textDecoration: 'none', color: 'inherit'}}>
                            <div className="card">
                                <div className="image">
                                    <img alt={album.title} src="http://lorempixel.com/400/200/cats"/>
                                </div>
                                <div className="card-inner">
                                    <div className="header">
                                        <h3>Title</h3>
                                    </div>
                                    <div className="content">
                                        <p>{album.title}</p>
                                    </div>
                                </div>
                            </div>
                        </Link>
                    </div>
                ))}
        </div>
    );
}

// interface StateToProps {
//     albums: AlbumsData[];
//     isFetching: boolean;
//     // userId: string;
// }

// interface DispatchToProps {
//     getUserAlbums: (userId: number) => void
// }

//
// const mapStateToProps = (state: any, ownProps: any): StateToProps => {
//     return {
//         albums: selectors.getAlbumsSelector(state),
//         isFetching: selectors.getIsFetchingSelector(state),
//         // userId: ownProps.match.params.userId
//     }
// };

// const mapDispatchToProps = (dispatch: any): DispatchToProps => {
//     return {
//         getUserAlbums: (userId) => dispatch(albumsOperations.getUserAlbumsAsync(userId)),
//     }
// };

// export default connect<StateToProps, DispatchToProps>(mapStateToProps, mapDispatchToProps)(UserAlbums);

export default UserAlbums;