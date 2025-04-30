import { Component, OnDestroy, ViewEncapsulation } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FuseLoadingBarComponent } from '@fuse/components/loading-bar';
import { Subject } from 'rxjs';
import { FuseFullscreenComponent } from '../../../../@fuse/components/fullscreen';
import { LanguagesComponent } from '../../common/languages/languages.component';
import { MatIcon } from '@angular/material/icon';
import { MatIconButton } from '@angular/material/button';
import { MessagesComponent } from '../../common/messages/messages.component';
import { NotificationsComponent } from '../../common/notifications/notifications.component';
import { SearchComponent } from '../../common/search/search.component';
import { ShortcutsComponent } from '../../common/shortcuts/shortcuts.component';
import { UserComponent } from '../../common/user/user.component';
import { FuseNavigationService, FuseVerticalNavigationComponent } from '../../../../@fuse/components/navigation';

@Component({
    selector: 'empty-layout',
    templateUrl: './empty.component.html',
    encapsulation: ViewEncapsulation.None,
    imports: [
        FuseLoadingBarComponent,
        RouterOutlet,
        FuseFullscreenComponent,
        LanguagesComponent,
        MatIcon,
        MatIconButton,
        MessagesComponent,
        NotificationsComponent,
        SearchComponent,
        ShortcutsComponent,
        UserComponent,
    ],
})
export class EmptyLayoutComponent implements OnDestroy {
    private _unsubscribeAll: Subject<any> = new Subject<any>();

    /**
     * Constructor
     */
    constructor() {}

    // -----------------------------------------------------------------------------------------------------
    // @ Lifecycle hooks
    // -----------------------------------------------------------------------------------------------------

    /**
     * On destroy
     */
    ngOnDestroy(): void {
        // Unsubscribe from all subscriptions
        this._unsubscribeAll.next(null);
        this._unsubscribeAll.complete();
    }
}
