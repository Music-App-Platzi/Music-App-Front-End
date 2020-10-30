export interface LoginResponse{
        id: number;
        rol_id: number;
        username: string;
        name: string;
        mail: string;
        password: string;
        thumbnail: string;
    token: string;
    is_user: boolean;
}
export interface Register {
    username: string;
    name: string;
    mail: string;
    password: string;
}
export interface RegisterResponse {
    user: {
        id: number;
        rol_id: number;
        username: boolean;
        name: string;
        mail: string;
        password: string;
        thumbnail: boolean;
    };
    token: string;
}
