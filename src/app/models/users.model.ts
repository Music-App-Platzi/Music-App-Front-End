export interface UserResponse {
    data: {
        id: number;
        rol_id: boolean;
        username: string;
        name: string;
        mail: string;
        password: string;
        thumbnail: string;
    } [];
}
