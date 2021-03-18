import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { IUser, IUserRespond } from 'src/app/interfaces/user';
import { UsersService } from 'src/app/services/users.service';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';

@Component({
  selector: 'app-tables',
  templateUrl: './tables.component.html',
  styleUrls: ['./tables.component.scss']
})
export class TablesComponent implements AfterViewInit {

  title1 = 'TODOS LOS USUARIOS'
  title2 = 'USUARIOS FEMENINOS'
  title3 = 'USUARIOS MASCULINOS'
  users: IUserRespond[] =[];

  //table header
  headers = ["Username", "Name", "Age", "Email", "Company"]
  constructor(private userService:UsersService) {
  }
  dataSource = new MatTableDataSource<IUserRespond>(this.users)
  dataSourceFemale = new MatTableDataSource<IUserRespond>(this.users)
  dataSourceMale = new MatTableDataSource<IUserRespond>(this.users)
  
  //paginators
  @ViewChild('MatPaginator1') paginator: MatPaginator;
  @ViewChild('MatPaginator2') paginatorFemale: MatPaginator;
  @ViewChild('MatPaginator3') paginatorMale: MatPaginator;
  ngAfterViewInit() {
    //llamada a metodo de servicio
    this.getAllUsers();
    // asignanco paginadores a las fuentes de datos
    this.dataSource.paginator = this.paginator;
    this.dataSourceFemale.paginator = this.paginatorFemale;
    this.dataSourceMale.paginator = this.paginatorMale;
  }
  public getAllUsers(){
    //se subscribe al observable getAllUsers y se obtiene la data
    this.userService.getUsers().subscribe((resp:any)=>{
      console.log(resp) 
      this.dataSource.data =  resp as IUserRespond[]
      //filtra datos obteniendo solo genero F
      this.dataSourceFemale.data = resp.filter(user => user.gender === 'F') as IUserRespond[]
      //filtra datos obteniendo solo genero M
      this.dataSourceMale.data = resp.filter(user => user.gender === 'M') as IUserRespond[]
     })
  }

}
// ENDPOINT Y URLBASE ubicados en archivo environments.ts
// Está prohibido alterar el componente table-test
// Mostrar como máximo 10 registros en cada tabla
// TODO 1 Consumir Servicio por método get para obtener data y llenar la primera tabla users
// TODO 1.1 En el nombre concatenar firstName y lastName con un espacio entre ellos 
// TODO 2 Llenar la 2da tabla de usersFemale únicamente con registros donde gender sea correspondiente a 'F'
// TODO 2.1 Llenar la 3ra tabla de usersMale únicamente con registros donde gender sea correspondiente a 'M'
