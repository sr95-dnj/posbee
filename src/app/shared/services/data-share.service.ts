// signal-data.service.ts
import { Injectable, signal } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class DataShareService {
    private _employeeId = signal<string | null>(null);
    employeeId = this._employeeId.asReadonly();

    setEmployeeId(empId: string) {
        this._employeeId.set(empId);
    }
}
