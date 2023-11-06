import { Component } from '@angular/core';
import { FormBuilder,FormGroup,Validators } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-authentification',
  templateUrl: './authentification.component.html',
  styleUrls: ['./authentification.component.css']
})
export class AuthentificationComponent {
  // Debut Section Declaration Tableau d'objet
  public user: any[] = [
    {
      id: '1',
      email: 'habib@gmail.com',
      password: 'habib',
      contact: [{
        id: '1',
        nom: 'bah',
        prenom: 'habib',
        email:'habib774@gmail.com',
        numero: '781433570',
        photo: 'logo.png',
        etat :'0'
      }]
    },
  ]
  
  public changeform: boolean = true;

  formData = {
    email: '',
    pass: ''
  };

  formDataregister = {
    emailregister: '',
    passregister:''
  }

  public showform():void {
    this.changeform = !this.changeform;
  }
  // Fin Donne afficher cacher formulaire et valeur ngmodel


  tabuser: any = [];
  // Constructeur qui va nous permettre de rediriger vers les pages
  constructor(private router: Router) {
  }
  // Fin Constructeur-----------------------

  public storedUsers: any;
   ngOnInit(): void {
      this.storedUsers = localStorage.getItem('user');
       if (this.storedUsers) {
         this.user = JSON.parse(this.storedUsers);
       } else {
         // Si aucune donnée n'est présente dans le local storage, initialisez-le avec vos données par défaut
         localStorage.setItem('user', JSON.stringify(this.user));
     }
  }

  userid: any = 1;
  userfoundid: any;

  submitFunction(event: Event):void {
    event.preventDefault();//permet de ne pas recharger la page
    if(this.formData.email !== '' && this.formData.pass !== '') {
      let email = this.formData.email //recuperer le email saisi
      let pass = this.formData.pass; // recuperer le password

      let datastring = localStorage.getItem('user');//on stocke notre localstroge et on le met dans datastring
      // console.log(datastring)
      let existingData = datastring ? JSON.parse(datastring) : []; //on fait un parse de datastring et on le met dans existing data
      let userFound = this.user.find(user => user.email === this.formData.email && user.password === this.formData.pass);//on verifie si il existe
      this.userfoundid=userFound.id
      if (userFound) {
        Swal.fire({
        position: 'center',
        icon: 'success',
        title: 'Bienvenu\n '+email,
        showConfirmButton: false,
        timer: 1500
      })
        this.router.navigate(['/accueil/',this.userfoundid]); //on le redirige vers la page accueil
      }else{
        Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Login ou Mot de passe incorrecte',
        })
      }
    }else{
        Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Les Informations que vous avez saisies sont incorrectes!',
      })
    }
  }

  Registerfunction(event: Event) {
    event.preventDefault();
    if (this.formDataregister.emailregister !== '' && this.formDataregister.passregister !== '') {
      let datastring = localStorage.getItem('user');
      let existingData = datastring ? JSON.parse(datastring) : [];
      this.userid = existingData.length;
      let email = this.formDataregister.emailregister
      let pass = this.formDataregister.passregister;

      existingData.push({
        id: existingData.length + 1,
        email: email,
        password: pass,
        contact:[{id:'',nom:'',prenom:'',email:'',numero:'',photo:'',etat:''}]
      });

      localStorage.setItem('user', JSON.stringify(existingData));//on le convertit en chaine de caractere au format json

      Swal.fire({
       position: 'center',
       icon: 'success',
       title: 'Bienvenu\n '+this.formDataregister.emailregister,
       showConfirmButton: false,
       timer: 1500
      })
      this.router.navigate(['/accueil/',this.userfoundid]);
      //
    } else {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Les Informations que vous avez saisies sont incorrectes!',
      })
    }
  }
}
