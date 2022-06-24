import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-partecuatro',
  templateUrl: './partecuatro.component.html',
  styleUrls: ['./partecuatro.component.css']
})
export class PartecuatroComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  iniciar() {
    Swal.fire(
      '¡Exitoso!','Muchas gracias por contestar','success'
    )
    }
}

