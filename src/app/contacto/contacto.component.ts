import { Component, OnInit } from '@angular/core';
import {FormControl, Validators, NgForm} from '@angular/forms';
import {MatDialog} from '@angular/material'
import { DialogContactoComponent } from '../dialog-contacto/dialog-contacto.component';

@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.css']
})
export class ContactoComponent implements OnInit {

  constructor(public dialog: MatDialog) { }

  ngOnInit() {
  }

  emailFormControl = new FormControl('', [
    Validators.required,
    Validators.email,
  ]);

  nombreFormControl = new FormControl('', [
    Validators.required,
    Validators.minLength(3),
    Validators.maxLength(20),
  ]);

  apellidosFormControl = new FormControl('', [
    Validators.required,
    Validators.minLength(3),
    Validators.maxLength(50),
  ]);

  comentarioFormControl = new FormControl('', [
    Validators.required,
    Validators.minLength(1),
    Validators.maxLength(500),
  ]);

  nombre = '';
  apellidos = '';
  email = '';
  comentario = '';

  enviarMensaje(){
    console.log(this.nombre);
    console.log(this.apellidos);
    console.log(this.email);
    console.log(this.comentario);
  }

  onSubmit(f: NgForm) {
    console.log(f.value);  // { first: '', last: '' }
    console.log(f.valid);  // false
    console.log(this.nombre);
    console.log(this.apellidos);
    console.log(this.email);
    console.log(this.comentario);
  }

  openDialog(){
    let dialogRef = this.dialog.open(DialogContactoComponent, {data: {name: this.nombre, mail: this.email}});
    dialogRef.afterClosed().subscribe(result => {
      console.log('Dialog result: ' + result);
    })
  }

}

