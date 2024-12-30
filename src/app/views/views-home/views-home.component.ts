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
}
