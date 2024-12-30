import { Component } from '@angular/core';

@Component({
  selector: 'app-views-home',
  templateUrl: './views-home.component.html',
  styleUrl: './views-home.component.css'
})
export class ViewsHomeComponent {
  data = [
    { value: 45, label: '# users' },
    { value: 107, label: '# likes' },
    { value: 68, label: '# comments' }
  ]

  items = [
    {image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRochT3PxzSua0f9EvmHFXmPnsgVoK2Sj8CnQ&s', title: 'winter', description:'my favorite season'},
    {image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTLfQHp9TAE_jVDKg0tZ_vff2f5U7QMIJKfNA&s', title: 'spring', description:'first season'}
  ]
}
