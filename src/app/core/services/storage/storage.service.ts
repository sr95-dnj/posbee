import { Injectable, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

@Injectable({
    providedIn: 'root'
})
export class StorageService {
    testBrowser: boolean;
    constructor(
        @Inject(PLATFORM_ID) platformId: string,
    ) {
        this.testBrowser = isPlatformBrowser(platformId);
    }

    public getAccessToken(): any {
        if (this.testBrowser) {
            //return localStorage.getItem('accessToken');
            return 'sdfsdfsdfsdsf';
        }
        else
            return;
    }

    public setAccessToken(token): any {
        localStorage ? localStorage.setItem('accessToken', token) : "";
        return this;
    }

    public getUserData(): any {
        const token = this.getAccessToken();
        if (token) {
            const payload = this.payload(token);
            const userData = { 
                'id': payload.user_data.userId, 
                'name': payload.user_data.name, 
                'username': payload.user_data.username, 
                'roleId': payload.user_data.roleId,
                'comId': payload.user_data.comId,
                'divId': payload.user_data.divId,
                'cirId': payload.user_data.cirId,
             };
            return userData;
        }
    }


    public payload(token): any {
        const payload = token.split('.')[1];
        return JSON.parse(atob(payload));
    }

    public clear(): any {
        localStorage ? localStorage.removeItem('accessToken') : '';
    }

    public clearFilterData(): void {
      localStorage ? localStorage.removeItem('filterData') : '';
    }
    
}
