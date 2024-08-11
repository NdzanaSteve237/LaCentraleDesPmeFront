import { Component, OnInit, AfterViewInit, ElementRef, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
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

  registrationForm: FormGroup;
  submitted = false;
  showPasswords = false;

  constructor(private formBuilder: FormBuilder, private http: HttpClient) {
    this.registrationForm = this.formBuilder.group({
      nom: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
      confirmPassword: ['', Validators.required]
    });
   }

  ngOnInit(): void {
  }


  // onSubmit() {
  //   if (this.formModel.password !== this.formModel.confirmPassword) {
  //     alert('Les mots de passe ne correspondent pas');
  //     return;
  //   }

  //   // Envoyer les données du formulaire via une requête HTTP POST
  //   this.http.post('https://votre-api.com/endpoint', this.formModel)
  //     .subscribe(response => {
  //       console.log('Réponse du serveur', response);
  //     }, error => {
  //       console.error('Erreur lors de l\'envoi des données', error);
  //     });
  // }

  onSubmit() {
    this.submitted = true;

    // S'arrêter si le formulaire est valide
    if (this.registrationForm.invalid) {
      return;
    }

    if (this.registrationForm.value.password !== this.registrationForm.value.confirmPassword) {
      alert('Les mots de passe ne correspondent pas');
      return;
    }

    // Envoyer les données du formulaire via une requête HTTP POST
    this.http.post('https://votre-api.com/endpoint', this.registrationForm.value)
      .subscribe(response => {
        console.log('Réponse du serveur', response);
      }, error => {
        console.error('Erreur lors de l\'envoi des données', error);
      });
  }

  toggleShowPasswords() {
    this.showPasswords = !this.showPasswords;
    const passwordInput = document.getElementById('password') as HTMLInputElement;
    const confirmPasswordInput = document.getElementById('confirm-password') as HTMLInputElement;
    passwordInput.type = this.showPasswords ? 'text' : 'password';
    confirmPasswordInput.type = this.showPasswords ? 'text' : 'password';
  }

}
