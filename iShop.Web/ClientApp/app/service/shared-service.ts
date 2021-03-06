﻿import { Observable } from 'rxjs/Observable';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';
@Injectable()
export class SharedService {
    // Observable string sources
    private emitChangeSource = new Subject<any>();
    // Observable string streams
    changeEmitted$ = this.emitChangeSource.asObservable();
    // Service message commands
    // call when have any value change 
    emitChange(change: any) {
        this.emitChangeSource.next(change);
    }

   // value change token
    private emitChangeTokenSource = new Subject<any>();

    changeTokenEmitted$ = this.emitChangeTokenSource.asObservable();
    emitChangeToken(change: any) {
        this.emitChangeTokenSource.next(change); 
    }

    //change category
    private emitChangeCategorySource = new Subject<any>();

    changeCategoryEmitted$ = this.emitChangeCategorySource.asObservable();
    emitChangeCategory(change: any) {
        this.emitChangeCategorySource.next(change);
    }


    //change outlet menu
    private emitChangeOutletSource = new Subject<any>();

    changeOutletEmitted$ = this.emitChangeOutletSource.asObservable();
    emitChangeOutlet(change: any) {
        this.emitChangeOutletSource.next(change);
    }
}