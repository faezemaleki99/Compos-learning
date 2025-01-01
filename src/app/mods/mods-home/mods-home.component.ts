import { Component } from '@angular/core';

@Component({
  selector: 'app-mods-home',
  templateUrl: './mods-home.component.html',
  styleUrl: './mods-home.component.css'
})
export class ModsHomeComponent {

  isShowModal: boolean = false
  
  onChangeModal() {
    this.isShowModal = !this.isShowModal
  }

}
