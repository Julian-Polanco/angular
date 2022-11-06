import { Component, ViewChild, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatTable } from '@angular/material/table';
import { ENDPOINTS } from 'src/app/config/endpoints';
import { Advice } from 'src/app/models/advice';
import { AdviceList } from 'src/app/models/advice-list';
import { Guest } from 'src/app/models/guest';
import { ResponseService } from 'src/app/models/response-service';
import { UserList } from 'src/app/models/user-list';
import { UserLoginSucess } from 'src/app/models/user-login-success';
import { AuthService } from 'src/app/services/auth/auth.service';
import { HttpClientService } from 'src/app/services/http-client/http-client.service';
import { SpinnerService } from 'src/app/services/spinner/spinner.service';
import { SetAdviceComponent } from '../set-advice/set-advice.component';


const INVALID_DATA = [null, undefined, "", "null", "undefined"];

@Component({
  selector: 'list-advices',
  templateUrl: './list-advices.component.html',
  styleUrls: ['./list-advices.component.css']
})
export class ListAdvicesComponent implements OnInit {

  articuloselect: Advice = new Advice("", "", "", "", "", "", "", "");

  @ViewChild(MatTable)
  dataSource!: MatTable<Advice>;

  columnas: string[] = ['id','teacherName', 'topic', 'date', 'start_time','end_time','Attendance'];

  datos: Advice[] = [];

  dataUser: UserLoginSucess;

  constructor(private httpClient: HttpClientService, private spinner: SpinnerService,
    private authService: AuthService, private dialog: MatDialog) { }

  ngOnInit(): void {
    this.loadDataUser();
    this.loadData();
  }

  loadData(): void {
    const spinner = this.spinner.start("Cargando listado de asesorias...");
    this.httpClient.get<ResponseService<AdviceList>>(
      this.dataUser.rol == 1 ? ENDPOINTS.getAllAdvicesFromStudent : ENDPOINTS.getAllAdvicesFromStudent)
      .subscribe((result: ResponseService<AdviceList>) => {
        if (result.status == 200) {
          this.datos = result.data;
        }
        this.spinner.stop(spinner);
      });
  }

  get isLogin(): boolean {
    return !INVALID_DATA.includes(String(this.authService.isLoginUser()));
  }

  loadDataUser(): void {
    if (this.isLogin) {
      this.dataUser = this.authService.isLoginUser();
    }
  }

  editUser(id: number, userId: number): void {
    const dialogRef = this.dialog.open(SetAdviceComponent, {
      data: {
        id: id
      }
    });

}
}
