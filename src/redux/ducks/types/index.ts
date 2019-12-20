export interface FriendsData {
    id: number;
    name: string
}

export interface UsedData {
    id: number,
    name: string,
    email: string,
    address: string,
    friends?: FriendsData[],
}

export interface UsersData extends UsedData{
    guid: string,
    isActive: boolean,
    balance: string,
    picture: string,
    age: number,
    eyeColor: string,
    gender: string,
    company: string,
    phone: string,
    about: string,
    registered: string,
    latitude: number,
    longitude: number,
    tags: string[],
    greeting: string,
    favoriteFruit: string
}


export interface Users {
    fetching: boolean;
    rows: UsedData[]
}
///////////////////////////////

export interface PostsData {
    userId: number;
    id: number;
    title: string;
    body: string
}

export interface Posts {
    fetching: boolean;
    rows: PostsData[]
}

////////////////////////////////

export interface CommentsData {
    postId: number,
    id: number,
    name: string,
    email: string,
    body: string
}

export interface Comments {
    fetching: boolean;
    rows: CommentsData[]
}

////////////////////////////////////

export interface AlbumsData {
    userId: number,
    id: number,
    title: string
}

export interface Albums  {
    fetching: boolean;
    rows: AlbumsData[]
}

///////////////////////////////////

export interface PhotosData {
    albumId: number,
    id: number,
    title: string,
    url: string,
    thumbnailUrl: string
}

export interface Photos {
    fetching: boolean;
    rows: PhotosData[]
}
///////////////////////////////////

export interface State {
    router: any;
    users: Users;
    posts: Posts;
    comments: Comments;
    albums: Albums
    photos: Photos
}