import { Component, ElementRef, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrl: './modal.component.css'
})
export class ModalComponent implements OnInit{

  @Output() close = new EventEmitter;

  constructor(private el: ElementRef){
    // console.log(el.nativeElement)
  }
  ngOnInit(): void {
    document.body.appendChild(this.el.nativeElement)
  }

  onClose(){
    this.close.emit()
  }
}
