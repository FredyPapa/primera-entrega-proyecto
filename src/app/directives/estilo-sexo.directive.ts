import { Directive, ElementRef, OnInit, Input, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appEstiloSexo]'
})
export class EstiloSexoDirective implements OnInit {
  @Input('appEstiloSexo') sexo!: string;

  constructor(
    private elemento: ElementRef,
    private renderer: Renderer2
  ) { }

  ngOnInit(): void {
    this.renderer.setStyle(this.elemento.nativeElement, 'padding', '0px 10px 0px 10px');
    this.renderer.setStyle(this.elemento.nativeElement, 'border-radius', '40px');
    this.renderer.setStyle(this.elemento.nativeElement, 'color', '#FFFFFF');
    this.renderer.setStyle(
      this.elemento.nativeElement,
      'background-color',
      this.sexo=='1' ? '#4CAF50' : '#F44336'
    );
  }

}
