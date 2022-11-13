import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ENDPOINTS } from 'src/app/config/endpoints';
import { AuthService } from 'src/app/services/auth/auth.service';
import { HttpClientService } from 'src/app/services/http-client/http-client.service';
import { SnackBarService } from 'src/app/services/snack-bar/snack-bar.service';
import { SpinnerService } from 'src/app/services/spinner/spinner.service';


@Component({
  selector: 'app-change-rol',
  templateUrl: './change-rol.component.html',
  styleUrls: ['./change-rol.component.css']
})
export class ChangeRolComponent implements OnInit {
  rols = [
    { "id": "1", "name": "Estudiante" },
    { "id": "2", "name": "Profesor" },
    { "id": "3", "name": "Secretaria" },
    { "id": "4", "name": "Administrador" }
  ];


  formRols: FormGroup;
  closeModal: boolean = false;
  selected: string = "";
  constructor(private httpClient: HttpClientService, private spinner: SpinnerService,
    private snack: SnackBarService,
    @Inject(MAT_DIALOG_DATA) public data: any, private authService: AuthService) {
    this.formRols = new FormGroup({
      rol: new FormControl('', [Validators.required])
    })
  }

  ngOnInit(): void {
    console.log(this.data.id);
  }

  changeRol(): void {
    const spinner = this.spinner.start("Cambiando Rol...");
    const rol = {
      id: this.data.id,
      id_rol: this.selected
    }
    this.httpClient.post(ENDPOINTS.updateRol, rol).subscribe((result: any) => {
      if (result.status == 200) {
        this.snack.openSnackBar("Rol cambiado con éxito!");
        
      } else {
        this.snack.openSnackBar("Error!!");
      }
      this.closeModal = true;
      this.spinner.stop(spinner);
    });
  }

}
