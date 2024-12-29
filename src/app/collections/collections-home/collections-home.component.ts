import { Component } from '@angular/core';

@Component({
  selector: 'app-collections-home',
  templateUrl: './collections-home.component.html',
  styleUrl: './collections-home.component.css'
})
export class CollectionsHomeComponent {

   data = [
    {name: 'faeze', age: 25, job: 'developer'},
    {name: 'mahdi', age: 25, job: 'engineer'},
    {name: 'ali', age: 30, job: 'teacher'}
  ]

  headers = [
    {key: 'name', value: 'Name'},
    {key: 'age', value: 'Age'},
    {key: 'job', value: 'Job'}
  ]
}
