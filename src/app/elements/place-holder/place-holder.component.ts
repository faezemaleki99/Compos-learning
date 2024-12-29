import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-place-holder',
  templateUrl: './place-holder.component.html',
  styleUrl: './place-holder.component.css'
})
export class PlaceHolderComponent {
  @Input() lines = 4
  @Input() header = true

}
