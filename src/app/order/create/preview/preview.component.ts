import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-preview',
  templateUrl: './preview.component.html',
  styleUrls: ['./preview.component.css']
})
export class PreviewComponent implements OnInit {
  @Input() selectedFile: any;
  @Output() resetSelectedFile: EventEmitter<string> = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
  }

  onClose(): void {
    this.selectedFile = '';
    this.resetSelectedFile.emit(this.selectedFile);
  }

}
