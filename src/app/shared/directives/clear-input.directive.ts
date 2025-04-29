import { Directive, ElementRef, Renderer2, HostListener, AfterViewInit } from '@angular/core';

@Directive({
    selector: '[clear-input]'
})
export class ClearInputDirective implements AfterViewInit {
    private clearButton: HTMLElement;

    constructor(private el: ElementRef, private renderer: Renderer2) {}

    ngAfterViewInit() {
        this.createClearButton();
    }

    createClearButton() {
        this.clearButton = this.renderer.createElement('span');
        this.renderer.addClass(this.clearButton, 'clear-icon');
        this.renderer.setStyle(this.clearButton, 'display', 'none'); // Initially hidden
        this.renderer.listen(this.clearButton, 'click', (event) => {
            event.stopPropagation(); // Prevent input from losing focus
            this.clearInput();
        });
        this.renderer.appendChild(this.el.nativeElement.parentNode, this.clearButton);
    }

    @HostListener('focus')
    @HostListener('input')
    showButton() {
        if (this.el.nativeElement.value) {
            this.renderer.setStyle(this.clearButton, 'display', 'inline');
        }
    }

    @HostListener('blur')
    hideButton() {
        setTimeout(() => {
            this.renderer.setStyle(this.clearButton, 'display', 'none');
        }, 200); // Delay to allow click event on clear button
    }

    clearInput() {
        this.el.nativeElement.value = '';

        // Dispatch an input event to notify Angular of the change
        this.el.nativeElement.dispatchEvent(new Event('input'));

        // Hide the clear button
        this.renderer.setStyle(this.clearButton, 'display', 'none');
    }
}
