import { Component, Input, OnInit } from '@angular/core';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';
import {
  IconDefinition,
  icon as faIconCore,
} from '@fortawesome/fontawesome-svg-core';

@Component({
  selector: 'app-atm-button',
  templateUrl: './atm-button.component.html',
  styleUrls: ['./atm-button.component.scss'],
})
export class AtmButtonComponent implements OnInit {
  @Input() width: string;
  @Input() text: string;
  @Input() disabled?: boolean;
  @Input() btnIcon?: IconDefinition;
  @Input() execute: () => void;

  constructor(
    private registry: MatIconRegistry,
    private sanitizer: DomSanitizer
  ) {
    this.disabled = false;
    this.width = 'fit-content';
    this.text = 'Lorem Ipsum';
    this.execute = () => {
      throw new Error('Method not implemented - atom');
    };
  }

  ngOnInit(): void {
    if (this.btnIcon) {
      console.log('icon', this.btnIcon);
      const svg = faIconCore(this.btnIcon).html.join('');
      this.registry.addSvgIconLiteral(
        'icon',
        this.sanitizer.bypassSecurityTrustHtml(svg)
      );
    }
  }
}
