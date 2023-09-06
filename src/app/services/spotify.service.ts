import { Injectable } from '@angular/core';
import { SpotifyConfiguration } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  constructor() { }
  // Endpoint de autenticação do Spotify definidos em Environment.ts
  obterUrlLogin() {
    // (``=> template string) possibilita interpolação de strings em JS
    const authEndpoint = `&{SpotifyConfiguration.authEndpoint}?`;
    const clientId = `client_id=${SpotifyConfiguration.clientId}&`;
  }
}
