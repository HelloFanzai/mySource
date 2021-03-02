import { Directive, Inject, ElementRef, Input, HostListener, OnChanges } from '@angular/core';

@Directive({
  selector: '[appTheName]'
})
export class TheNameDirective implements OnChanges {

  constructor(@Inject(ElementRef) private element: ElementRef) {
    this.element.nativeElement.style.border = '1px solid pink'
  }
  ngOnChanges() {
    this.element.nativeElement.setAttribute('src', this.defaultimage)
  }
  @Input() the1stImg: String = ''
  @Input() the2ndImg: String = ''
  @Input() defaultimage: String = 'data:image/jpeg;base64,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'

  @HostListener('mouseover') onMouseOver() {
    this.element.nativeElement.setAttribute("src", this.the1stImg)
  }
  @HostListener("mouseout") onMouseOut() {
    this.element.nativeElement.setAttribute("src", this.the2ndImg)
  }

}
