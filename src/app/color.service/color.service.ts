import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ColorService {

  private colorTextSource= new BehaviorSubject<{color: string, text: string}>({
    color: 'card-header-warning',
    text: 'Warning'
  });
  currentColorText = this.colorTextSource.asObservable();

  changeColorText(color: string, text: string) {
    this.colorTextSource.next({ color, text });
  }
  //constructor() { }
}
