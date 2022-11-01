import { Component } from '@angular/core';
import { saveAs } from 'file-saver';
import domtoimage from 'dom-to-image';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  constructor() {}

  width = 600;
  height = 500;
  color1 = 'red';
  color2 = 'yellow';
  percentColor1: number = 0;
  percentColor2 = 100;
  fontSize = 52;
  banerText = '';

  layout: { [key: string]: boolean } = {
    horizontal: false,
    horizontalRev: false,
    vertical: false,
    verticalRev: false,
  };

  colors = [
    'red',
    'purple',
    'blue',
    'green',
    'yellow',
    'brown',
    'grey',
    'black',
  ];

  getBannerStyles() {
    return {
      width: `${this.width}px`,
      height: `${this.height}px`,
      backgroundImage: `linear-gradient(to bottom, ${this.color1} ${this.percentColor1}%, ${this.color2} ${this.percentColor2}%)`,
    };
  }

  setLayout(selectedLayout: string) {
    Object.keys(this.layout).forEach((key) => (this.layout[key] = false));
    this.layout[selectedLayout] = true;
  }

  saveImage(element: HTMLDivElement) {
    domtoimage.toBlob(element).then((blob) => saveAs(blob));
  }
}
