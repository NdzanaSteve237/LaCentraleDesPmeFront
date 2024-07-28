import { Component, OnInit, AfterViewInit, ElementRef, ViewChild } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-user-sign-in',
  templateUrl: './user-sign-in.component.html',
  styleUrls: ['./user-sign-in.component.scss']
})
export class UserSignInComponent implements OnInit {

  formModel = {
    nom: '',
    email: '',
    password: '',
    confirmPassword: ''
  };

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
  }


  onSubmit() {
    if (this.formModel.password !== this.formModel.confirmPassword) {
      alert('Les mots de passe ne correspondent pas');
      return;
    }

    // Envoyer les données du formulaire via une requête HTTP POST
    this.http.post('https://votre-api.com/endpoint', this.formModel)
      .subscribe(response => {
        console.log('Réponse du serveur', response);
      }, error => {
        console.error('Erreur lors de l\'envoi des données', error);
      });
  }


}
