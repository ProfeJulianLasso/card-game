import { Component, Input, OnInit } from '@angular/core';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';
import {
  IconDefinition,
  icon as faIconCore,
} from '@fortawesome/fontawesome-svg-core';
import { ButtonType, Color } from '../../ions';

@Component({
  selector: 'app-atm-button',
  templateUrl: './atm-button.component.html',
  styleUrls: ['./atm-button.component.scss'],
})
export class AtmButtonComponent implements OnInit {
  @Input() size: string;
  @Input() text: string;
  @Input() color?: Color;
  @Input() disabled?: boolean;
  @Input() execute: () => void;
  @Input() icon?: IconDefinition;
  @Input() type?: ButtonType;

  constructor(
    private registry: MatIconRegistry,
    private sanitizer: DomSanitizer,
  ) {
    this.disabled = false;
    this.text = 'Lorem Ipsum';
    this.size = 'fit-content';
    this.color = Color.Primary;
    this.type = ButtonType.Button;
    this.execute = () => {
      throw new Error('Method not implemented - AtmButtonComponent');
    };
  }

  ngOnInit(): void {
    if (this.icon) {
      const svg = faIconCore(this.icon, { classes: ['fa-15em'] }).html.join('');
      this.registry.addSvgIconLiteral(
        'icon2',
        this.sanitizer.bypassSecurityTrustHtml(svg),
      );
    }
  }
}
