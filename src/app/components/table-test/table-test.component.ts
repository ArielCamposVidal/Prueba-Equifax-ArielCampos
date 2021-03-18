// Prohibido alterar este componente
import { Component, Input, OnInit } from '@angular/core';
import { IUser } from 'src/app/interfaces/user';

@Component({
  selector: 'app-table-test',
  template: `
    <table>
    <tr>
      <th *ngFor="let header of headers">{{header}}</th>
    </tr>
    <tr *ngFor="let user of users">
      <td>{{user.username}}</td>
      <td>{{user.name}}</td>
      <td>{{user.age}}</td>
      <td>{{user.email}}</td>
      <td>{{user.company.name}}</td>
    </tr>
  </table>
  `,
})
export class TableTestComponent implements OnInit {

  @Input() users: IUser[]

  headers = ["Username", "Name", "Age", "Email", "Company"]

  constructor() { }

  ngOnInit(): void {
  }

}
