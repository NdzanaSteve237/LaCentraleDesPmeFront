<<<<<<< HEAD
import { Component, OnInit, AfterViewInit, ElementRef, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

=======
import { Component, OnInit } from '@angular/core';
>>>>>>> 329e239e75f6e8fd2de7b17479161468942a75fc

@Component({
  selector: 'app-user-sign-in',
  templateUrl: './user-sign-in.component.html',
  styleUrls: ['./user-sign-in.component.scss']
})
export class UserSignInComponent implements OnInit {

<<<<<<< HEAD
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
=======
  constructor() { }
>>>>>>> 329e239e75f6e8fd2de7b17479161468942a75fc

  ngOnInit(): void {
  }

<<<<<<< HEAD

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

=======
>>>>>>> 329e239e75f6e8fd2de7b17479161468942a75fc
}
