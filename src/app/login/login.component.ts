import { Component,OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  form: FormGroup = new FormGroup({});


  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.form = this.fb.group({
      nombreCompleto: ['', Validators.required],
      Curp: ['', Validators.required],
      nombre: ['', Validators.required],
      paterno: ['', Validators.required],
      materno: ['', Validators.required],
      telefono: ['', [Validators.required, Validators.pattern("[0-9]{3}-[0-9]{3}-[0-9]{4}")]],
      celular: ['', [Validators.required, Validators.pattern("[0-9]{3}-[0-9]{3}-[0-9]{4}")]],
      email: ['', [Validators.required, Validators.email]],
      nivel: ['', Validators.required],
      municipio: ['', Validators.required],
      asunto: ['', Validators.required]
    });
  }
  onSubmit(): void {
    if (this.form.valid) {
      Swal.fire({
        title: 'Éxito',
        text: 'Formulario enviado correctamente',
        icon: 'success'
      });
      this.form.reset();

    } else {
      Swal.fire({
        title: 'Error',
        text: 'Formulario no válido',
        icon: 'error'
      });
    }
  }
  
}
