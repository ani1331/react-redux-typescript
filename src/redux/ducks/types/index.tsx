export interface FriendsData {
    id: number;
    name: string
}

export interface Friends {
    [index: number]: FriendsData
}

export interface Tags {
    [index: number]: string
}

export interface UsersData {
    id: number,
    guid: string,
    isActive: boolean,
    balance: string,
    "picture": string,
    "age": number,
    "eyeColor": string,
    "name": string,
    "gender": string,
    "company": string,
    "email": string,
    "phone": string,
    "address": string,
    "about": string,
    "registered": string,
    "latitude": number,
    "longitude": number,
    tags: Tags[],
    friends: Friends,
    "greeting": string,
    "favoriteFruit": string
}

export interface RowsUsers {
    [index: number]: UsersData
}

export interface Users {
    fetching: boolean;
    rows: RowsUsers
}
///////////////////////////////

export interface PostsData {
    userId: number;
    id: number;
    title: string;
    body: string
}

export interface RowsPosts {
    [index: number]: PostsData
}

export interface Posts {
    fetching: boolean;
    rows: RowsPosts
}

////////////////////////////////

export interface CommentsData {
    postId: number,
    id: number,
    name: string,
    email: string,
    body: string
}

export interface RowsComments {
    [index: number]: CommentsData
}

export interface Comments {
    fetching: boolean;
    rows: RowsComments
}

////////////////////////////////////

export interface State {
    // router: null;
    users: Users;
    posts: Posts;
    comments: Comments
}
