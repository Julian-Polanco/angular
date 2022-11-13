import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { ENDPOINTS } from 'src/app/config/endpoints';
import { ResponseService } from 'src/app/models/response-service';
import { UserList } from 'src/app/models/user-list';
import { UserLoginSucess } from 'src/app/models/user-login-success';
import { AuthService } from 'src/app/services/auth/auth.service';
import { HttpClientService } from 'src/app/services/http-client/http-client.service';
import { SpinnerService } from 'src/app/services/spinner/spinner.service';
import { ChangeRolComponent } from '../change-rol/change-rol.component';

const INVALID_DATA = [null, undefined, "", "null", "undefined"];

@Component({
  selector: 'app-list-users',
  templateUrl: './list-users.component.html',
  styleUrls: ['./list-users.component.css']
})
export class ListUsersComponent implements OnInit {
  //dataSource: UserList[] = [];


  dataSource: MatTableDataSource<UserList>;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  displayedColumns= ['id', 'full_name', 'email', 'role', 'actions'];
  constructor(private spinner: SpinnerService,private httpClient: HttpClientService,
    private authService: AuthService,private dialog: MatDialog) { }

  dataUser: UserLoginSucess;


  ngOnInit(): void {
    this.loadDataUser();
    this.loadData();
  }

  changeRol(id: number): void {
     const dialogRef = this.dialog.open(ChangeRolComponent, {
       data: {
         id: id
       }
     });
      dialogRef.afterClosed().subscribe(result => {
        this.loadData();
      }
    );
  }

  loadData(): void {
    const spinner = this.spinner.start("Cargando listado de usuarios...");
    this.httpClient.get<ResponseService<UserList>>(
      this.dataUser.rol == 1 ? ENDPOINTS.getAllUsers : ENDPOINTS.getAllUsers )
      .subscribe((result: ResponseService<UserList>) => {
        if (result.status == 200) {
          this.dataSource = new MatTableDataSource(result.data);
          this.dataSource.paginator = this.paginator;
          this.dataSource.sort = this.sort;
        }
        this.spinner.stop(spinner);
      });
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  get isLogin(): boolean {
    return !INVALID_DATA.includes(String(this.authService.isLoginUser()));
  }

  loadDataUser(): void {
    if (this.isLogin) {
      this.dataUser = this.authService.isLoginUser();
    }
  }


}
