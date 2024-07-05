import { Component, OnInit } from '@angular/core';
import { ColorService } from '../color.service/color.service';

@Component({
  selector: 'app-table-list',
  templateUrl: './table-list.component.html',
  styleUrls: ['./table-list.component.css']
})
export class TableListComponent implements OnInit {
  currentColor: string;
  currentText: string;

  constructor(private colorService: ColorService) { }

  setColorText(color: string, text: string) {
    this.colorService.changeColorText(color, text);
  }

  ngOnInit() {
    this.colorService.currentColorText.subscribe(data => {
      this.currentColor = data.color;
      this.currentText = data.text;
    });
  }

}
