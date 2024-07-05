import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';
import { environment } from '../../environments/environment'; // Importez l'environnement

@Injectable({
  providedIn: 'root'
})
export class PmesServiceService {
  
  login(email: string, password: string): Observable<any> {
    console.log('Tentative de connexion avec:', { email, password });

    

    // Envoyer la requête POST avec les en-têtes configurés
    return this.http.post(`${this.apiUrl}/api/pmes/login`, { email, password })
      .pipe(
        catchError(error => {
          console.error('Erreur lors de la requête de connexion:', error);
          return throwError(error);
        })
      );
  }
  // services/pmes.service.ts
  getPmeById(id: string): Observable<any> {
    console.log(`Appel HTTP GET: /api/pmes/${id}`);
    return this.http.get(`${this.apiUrl}/api/pmes/${id}`);
  }

  private apiUrl = environment.apiUrl; // Utilisez l'URL de l'API définie dans l'environnement

  constructor(private http: HttpClient) {}

  // Obtenir la liste des PMEs
  getList(): Observable<any> {
    return this.http.get(`${this.apiUrl}/api/pmes/list`);
  }

  // Obtenir la liste triée des PMEs
  getListSorted(sortBy: string, order: string): Observable<any> {
    return this.http.get(`${this.apiUrl}/api/pmes/list/sorted`, {
      params: { sortBy, order }
    });
  }

  // Obtenir la liste filtrée des PMEs
  getListFiltered(filters: any): Observable<any> {
    return this.http.get(`${this.apiUrl}/api/pmes/list/filtered`, {
      params: filters
    });
  }

  // Obtenir les résultats de l'autocomplétion
  getAutocomplete(searchText: string): Observable<any> {
    return this.http.get(`${this.apiUrl}/api/pmes/autocomplete`, {
      params: { searchText }
    });
  }

  register(pme: any): Observable<any> {
    console.log('Tentative d\'enregistrement avec:', pme);

    const headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });

    return this.http.post(`${this.apiUrl}/api/pmes/register`, pme, { headers })
      .pipe(
        catchError(error => {
          console.error('Erreur lors de l\'inscription:', error);
          return throwError(error);
        })
      );
  }
}
