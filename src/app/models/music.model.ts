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
export interface SongsResponse {
    data: {
        id: number;
        album_id: number;
        name: string;
        duration: string;
        song_link: string;
        thumbnail: string;
        popularity: number;
        genre: string;
    } [];
}
