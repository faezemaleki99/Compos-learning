import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-accordion',
  templateUrl: './accordion.component.html',
  styleUrl: './accordion.component.css'
})
export class AccordionComponent {

  @Input() items: any[] | undefined = []

  itemIndex = 0

  onChangeItem(index: number){
    if(index === this.itemIndex){
      this.itemIndex = -1
    }else{
      this.itemIndex = index
    }
  }
}
