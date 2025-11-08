export interface User {
    gender: string;
    name: {
        title: string;
        first: string;
        last: string;
    };
    email: string;
    dob: {
        date: string;
        age: number;
    };
    phone: string;
    picture: {
        large: string;
        medium: string;
        thumbnail: string;
    };
    nat: string;
}

export interface RandomUserResponse {
    results: User[];
    info: {
        seed: string;
        results: number;
        page: number;
        version: string;
    };
}
