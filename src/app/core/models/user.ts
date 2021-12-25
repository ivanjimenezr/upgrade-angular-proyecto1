export interface User {
    _id: String;
    name: String;
    email: String;
    password: String;
    emoji: String;
}

export interface IuserLogin {
    email: String;
    password: String;
}

export interface IcurrentUserId {
    currentUserId : String;
}