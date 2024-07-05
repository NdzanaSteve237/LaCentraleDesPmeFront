import { Component, OnInit } from '@angular/core';
import { PmesServiceService } from '../pmes.service/pmes.service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-pme',
  templateUrl: './create-pme.component.html',
  styleUrls: ['./create-pme.component.scss']
})


export class CreatePmeComponent implements OnInit  {
  pme: any = {
    Nom: '',
    Password: '',
    Logo: '',
    Statut_juridique: '',
    Effectif: null,
    Email: '',
    Type: '',
    SiteWeb: '',
    Tel: '',
    ChiffreAffaire: null,
    Description: '',
    Localisation: '',
    DateCreation: '',
    Departement: '',
    Region: '',
    Pays: '',
    Note: null
  };
  errorMessage: string = '';
  successMessage: string = '';

  constructor(private PmesServiceService: PmesServiceService, private router: Router) {}

  ngOnInit(): void {
  }

  onSubmit() {
    this.PmesServiceService.register(this.pme).subscribe(
      data => {
        console.log('Enregistrement réussi:', data);
        this.successMessage = 'Inscription réussie. Redirection vers le tableau de bord...';

        // Rediriger après un délai de 2.5 secondes
        setTimeout(() => {
          this.router.navigate(['/dashboard']);
        }, 2500);
      },
      error => {
        console.error('Erreur lors de l\'inscription:', error);
        this.errorMessage = 'Une erreur est survenue lors de l\'inscription. Veuillez réessayer.';
        
        // Masquer le message d'erreur après 2.5 secondes
        setTimeout(() => {
          this.errorMessage = '';
        }, 2500);
      }
    );
  }
}