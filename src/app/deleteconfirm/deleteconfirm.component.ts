import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
// import { EventEmitter } from 'stream';

@Component({
  selector: 'app-deleteconfirm',
  templateUrl: './deleteconfirm.component.html',
  styleUrls: ['./deleteconfirm.component.css']
})
export class DeleteconfirmComponent implements OnInit {
  @Input() item:string|undefined
  @Output() onCancel=new EventEmitter()
  @Output() onDelete=new EventEmitter()
  constructor() { }

  ngOnInit(): void {
  }
  cancel(){
    this.onCancel.emit()
  }
  delete(){
    //emit the event  onDelete with account to be deleted as the argument
    this.onDelete.emit(this.item)
  }

}
