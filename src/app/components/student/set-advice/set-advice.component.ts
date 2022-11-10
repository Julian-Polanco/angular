import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ENDPOINTS } from 'src/app/config/endpoints';
import { HttpClientService } from 'src/app/services/http-client/http-client.service';
import { SnackBarService } from 'src/app/services/snack-bar/snack-bar.service';
import { SpinnerService } from 'src/app/services/spinner/spinner.service';

@Component({
  selector: 'app-set-advice',
  templateUrl: './set-advice.component.html',
  styleUrls: ['./set-advice.component.css']
})
export class SetAdviceComponent implements OnInit {

  lista:string[]=["hola","que","tal", "estas"];
  seleccionado:string[]=[];


  formTime: FormGroup;
  closeModal: boolean = false;

  constructor(private httpClient: HttpClientService, private spinner: SpinnerService,
    private snack: SnackBarService,
    @Inject(MAT_DIALOG_DATA) public data: any) {
    this.formTime = new FormGroup({
      name : new FormControl('', [Validators.required]),
      //fullname: new FormControl('', [Validators.required]),
      //email: new FormControl('', [Validators.required, Validators.email, Validators.pattern('[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,63}$',),]),
    })
  }

  ngOnInit(): void {
    const spinner = this.spinner.start("Cargando horarios...");
    const user = {
      id_advice: this.data.id
    };
    this.httpClient.post(ENDPOINTS.getAdvicesAvailables, user).subscribe((result: any) => {
      console.log(result);
      if (result.status == 200) {
        this.lista = result.data;
      }
      this.spinner.stop(spinner);
    });
  }

  editUser(): void {
    //const spinner = this.spinner.start("Actualizando usuario...");
    //const user = {
    //  id: this.data.userId,
    //  fullname: this.formTime.controls.fullname.value,
    //  email: this.formTime.controls.email.value
    //}
    //this.httpClient.post(ENDPOINTS.getAllAdvicesFromStudent, user).subscribe((result: any) => {
    //  if(result.status == 200) {
    //    this.snack.openSnackBar("Actualizado con éxito!");
    //  }
    //  this.closeModal = true;
    //  this.spinner.stop(spinner);
    //});
  }

}
