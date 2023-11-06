import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.component.html',
  styleUrls: ['./accueil.component.css']
})
export class AccueilComponent {
  iduser: any;
  userid: any;
  contactlength: any;
  userName:any

  usernumero: any;

   constructor(private route: ActivatedRoute,private location: Location) {
    this.iduser = 0;
  }

   formDatacontact = {
    nom: '',
    prenom: '',
    email: '',
    numero: '',
    file:''
  }



  ngOnInit(): void {
    this.route.params.subscribe(params => {
      let userid = this.iduser = +params['id'];
    });

      this.datastring = localStorage.getItem('user');
      let existingData = this.datastring ? JSON.parse(this.datastring) : [];

    let user: any[] = existingData; //stocker le tableau d'objet dans user
    // console.log(user)

      //@ts-ignore
      // let userFound = user.find(existingData => existingData.id === this.userid);
      let urlUserId = parseInt(this.route.snapshot.paramMap.get('id') || '');

      let userFound = user.find(existingData => existingData.id === urlUserId);
      if (userFound) {
        this.usernumero = userFound.contact;//On va stocker les le tableau d'objet contact de ce utilisateur
        // console.log(this.usernumero)
        this.contactlength = this.usernumero.length - 1
        this.userName = userFound.email;//on va recuperer le mail de l'utilisateur
      }else {
        console.log('Utilisateur non trouvé'); // Affichez un message d'erreur si l'utilisateur n'est pas trouvé
      }
  }



  userfoundid: any;
  datastring: any;



  Contactfunction(event: Event) {
    event.preventDefault();
    if (this.formDatacontact.nom != "" && this.formDatacontact.prenom != "" && this.formDatacontact.email != "" && this.formDatacontact.numero != "" && this.formDatacontact.file != "") {
      let nom = this.formDatacontact.nom;
      let prenom = this.formDatacontact.prenom;
      let email = this.formDatacontact.email;
      let numero = this.formDatacontact.numero;
      let file = this.formDatacontact.file;

      this.datastring = localStorage.getItem('user');
      let existingData = this.datastring ? JSON.parse(this.datastring) : [];
      let user: any[] = existingData;

      // @ts-ignore
      let urlUserId = parseInt(this.route.snapshot.paramMap.get('id') || '');

     //@ts-ignore
      let userFound = user.find(existingData => existingData.id === urlUserId);

      if (userFound) {
          userFound.contact.push({
            id: userFound.contact.length + 1, nom: nom, prenom: prenom, email: email, numero: numero, photo: file, etat: '1' ,
          });
        localStorage.setItem('user', JSON.stringify(existingData));
        //@ts-ignore
        // this.location.reload();
        window.location.reload();
      } else {
        console.log("user not found")
      }
    }
  }

  Archiverfunction(id: number) {
    // alert(id);
    this.datastring = localStorage.getItem('user');
    let existingData = this.datastring ? JSON.parse(this.datastring) : [];
    let user: any[] = existingData;
    //@ts-ignore
    let urlUserId = parseInt(this.route.snapshot.paramMap.get('id') || '');
    let userFound = user.find(existingData => existingData.id === urlUserId);
    console.log(userFound)
    if (userFound) {
      //@ts-ignore
      let usercomptefound = userFound.contact.find(contact => contact.id === id)
      if (usercomptefound) {
        // console.log(usercomptefound.etat)
        usercomptefound.etat = '0';
        //  localStorage.setItem('user', JSON.stringify(usercomptefound));
        localStorage.setItem('user', JSON.stringify(existingData));
         Swal.fire({
        position: 'center',
        icon: 'success',
        title: 'Contact archivé avec success ',
        showConfirmButton: false,
        timer: 1500
         })
        window.location.reload();
      } else {
        console.log("user not found")
      }
    }else {
      console.log('Utilisateur non trouvé'); // Affichez un message d'erreur si l'utilisateur n'est pas trouvé
    }
  }
}
