import { Component, ElementRef } from '@angular/core';
// import * as jsPDF from 'jspdf';
// import * as html2canvas from 'html2canvas';
import * as html2pdf from 'html2pdf.js';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'HTMLToPDF';

  constructor() { }

  downloadPDF() {

    const printArea = document.getElementById('result');
    const option = {
      margin: 10,
      filename: 'file.pdf',
      image: {
        type: 'jpeg',
        quality: 1
      },
      html2canvas: {
        scale: 2
      },
      jsPDF: {
        unit: 'mm',
        format: 'a4',
        orientation: 'p'
      }
    };

    html2pdf().set(option).from(printArea).save();


    // html2canvas(printArea).then(function (canvas: HTMLCanvasElement) {
    //   const img = canvas.toDataURL('image/jpeg', 1.0);
    //   const doc = new jsPDF('p', 'pt', 'a4');
    //   doc.addImage(img, 'JPG');
    //   doc.save('test.pdf');
    // });

    // const pdf = new jsPDF('p', 'pt', 'a4');
    // pdf.addHTML(printArea, (doc) => {
    //   doc.save('test.pdf');
    // });
  }
}
