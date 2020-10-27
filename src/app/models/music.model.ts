export interface ArtistsResponse {
    data: {
        id: number;
        name: string;
    }[];
}
export interface AlbumsResponse {
    data: {
        id: number;
        artist_id: number;
        name: string;
        release_date: string;
    } [];
}
