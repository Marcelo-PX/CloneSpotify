export const environment = {
    production: false
};

export const SpotifyConfiguration = {
    clientId:'bac638960d624ec8a2531d97e25fa1bf', // Cadastro developer.spotify.com
    authEndpoint: 'https://acconts.spotify.com/authorize', // Endpoint de autenticação servidor Spotify
    redirectUrl: 'http://localhost:4200/login/', // Redirecionamento do token de autenticação
    
    scopes: [ // developer.spotify.com/documentation/web-api/concepts/scopes
        "user-read-currently-playing", // Musica tocando agora.
        "user-read-recently-played",   // Ler musicas tocadas recentemente
        "user-read-playback-state",    // Ler estado do player do usuario
        "user-top-read",               // Top artistas e musicas do usuario
        "user-modify-playback-state",  // Alterar do player do usuario.
        "user-library-read",           // Ler biblioteca dos usuarios
        "playlist-read-private",       // Ler playlists privads
        "playlist-read-collaborative"  // Ler playlists colaborativas
    ]
}