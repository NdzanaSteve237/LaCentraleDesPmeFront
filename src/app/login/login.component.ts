import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PmesServiceService } from '../pmes.service/pmes.service.service';
import { MatCardModule } from '@angular/material/card'; // Import MatCardModule
import { Router } from '@angular/router';
import { catchError, of } from 'rxjs';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  email: string = '';
  password: string = '';
  errorMessage: string = '';

  constructor(private PmesServiceService: PmesServiceService, private router: Router) {}

  

  ngOnInit(): void {
    
  }

  onLogin() {
    this.PmesServiceService.login(this.email, this.password).pipe(
      catchError(error => {
        console.error('Erreur de connexion:', error);
  
        if (error.status === 400) {
          this.errorMessage = 'Requête incorrecte. Veuillez vérifier vos informations.';
        } else if (error.status === 404 || error.status === 401) {
          this.errorMessage = 'Email ou mot de passe incorrect.';
        } else {
          this.errorMessage = 'Une erreur est survenue lors de la connexion. Veuillez réessayer.';
        }
  
        // Masquer le message d'erreur après 2.5 secondes
        setTimeout(() => {
          this.errorMessage = '';
        }, 2500);
  
        // Retourner un observable vide
        return of(null);
      })
    ).toPromise().then(data => {
      if (data) {
        console.log('Connexion réussie:', data);
  
        // Sauvegarder le token ou les informations de session si nécessaire
        localStorage.setItem('token', data.token);
  
        // Rediriger vers la page de tableau de bord ou autre page
        this.router.navigate(['/dashboard']); // Assurez-vous que la route est correcte
      }
    });
  }

  


}
