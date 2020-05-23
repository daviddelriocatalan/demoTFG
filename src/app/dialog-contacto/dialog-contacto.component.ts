import { Component, OnInit, Inject } from '@angular/core';
import {MAT_DIALOG_DATA} from '@angular/material'

@Component({
  selector: 'app-dialog-contacto',
  templateUrl: './dialog-contacto.component.html',
  styleUrls: ['./dialog-contacto.component.css']
})
export class DialogContactoComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit() {
  }

}
