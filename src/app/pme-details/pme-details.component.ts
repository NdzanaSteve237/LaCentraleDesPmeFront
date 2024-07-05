import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PmesServiceService } from '../pmes.service/pmes.service.service';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment'; // Importez l'environnement

@Component({
  selector: 'app-pme-details',
  templateUrl: './pme-details.component.html',
  styleUrls: ['./pme-details.component.scss']
})
export class PmeDetailsComponent implements OnInit {
  pme: any;
  http: any;

  private apiUrl = environment.apiUrl; // Utilisez l'URL de l'API définie dans l'environnement

  constructor(private route: ActivatedRoute, private PmesServiceService: PmesServiceService) {}

  ngOnInit(): void {
    // Récupérer l'ID de la PME depuis l'URL
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.PmesServiceService.getPmeById(id).subscribe(data => {
        console.log('Détails de la PME:', data);
        this.pme = data;
      }, error => {
        console.error('Erreur lors de la récupération des détails de la PME:', error);
      });
    }

  }

  // services/pmes.service.ts
  getPmeById(id: string): Observable<any> {
    console.log(`Appel HTTP GET: /api/pmes/${id}`);
    return this.http.get(`${this.apiUrl}/api/pmes/${id}`);
  }

}
