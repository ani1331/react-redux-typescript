export interface FriendsData {
    id: number;
    name: string
    join(s: string): any;
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
    tags: string[],
    friends: FriendsData[],
    "greeting": string,
    "favoriteFruit": string
}

export interface Users {
    fetching: boolean;
    rows: UsersData[]
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

export interface State {
    // router: null;
    users: Users;
    posts: Posts;
    comments: Comments
}
