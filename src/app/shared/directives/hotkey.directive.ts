import { Directive, Input, HostListener } from '@angular/core';

@Directive({
    selector: '[hotkey]'
})
export class HotkeyDirective {
    @Input() hotkey!: string; // Example: 'ctrl.s'
    @Input() action!: () => void; // Function to execute
    @Input() disabled!: boolean; // Check if the button is disabled

    private keyMap: { [key: string]: string } = {
        // 'ctrl.s': 's',
        // 'ctrl.r': 'r',
        // 'ctrl.n': 'n'
    };

    @HostListener('window:keydown', ['$event'])
    handleKeyboardEvent(event: KeyboardEvent) {
        if (!this.hotkey || !this.action) return;

        const keys = this.hotkey.toLowerCase().split('+');
        const keyPressed = event.key.toLowerCase();
        const isCtrlRequired = keys.includes('ctrl');
        const expectedKey = this.keyMap[this.hotkey.toLowerCase()];

        if ((isCtrlRequired && event.ctrlKey && keyPressed === expectedKey) ||
            (!isCtrlRequired && keyPressed === expectedKey)) {
            event.preventDefault();

            // Ensure the button is not disabled before triggering the action
            if (!this.disabled) {
                this.action();
            }
        }
    }
}
