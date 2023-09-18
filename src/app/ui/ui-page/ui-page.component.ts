import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-ui-page',
  templateUrl: './ui-page.component.html',
  styleUrls: ['./ui-page.component.scss']
})
export class UiPageComponent {
  @Input() text!: string;
  @Input() isVisibleHome!: boolean;
  @Input() isVisibleDownload!: boolean;
  @Input() downloadUrl!: string;

  downloadPdf() {
    fetch(this.downloadUrl)
      .then(response => response.blob())
      .then(blob => {
        const downloadLink = document.createElement('a');
        downloadLink.href = window.URL.createObjectURL(blob);
        downloadLink.target = '_blank';
        downloadLink.click();
      });
  }
}
