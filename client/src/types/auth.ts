export interface LoginData {
    email: string;
    password: string;
}

export interface LoginResponse {

    message: string;

    token: string;

    user: {

        _id: string;

        name: string;

        email: string;

    };

}

export interface SignupData {

    name: string;

    email: string;

    password: string;

}