import { NgModule } from '@angular/core';
import { SwipeAngularListComponent } from './swipe-angular-list.component';
import { ItemListComponent } from './item-list/item-list.component';
import {CommonModule} from '@angular/common';
import { HAMMER_GESTURE_CONFIG, HammerGestureConfig } from '@angular/platform-browser';
import * as Hammer from 'hammerjs';
export class HammerConfig extends HammerGestureConfig {
  overrides = <any>{
    'swipe': { direction: Hammer.DIRECTION_ALL }
  };
}

@NgModule({
  declarations: [SwipeAngularListComponent, ItemListComponent],
  imports: [
    CommonModule
  ],
  providers: [
    {
      provide: HAMMER_GESTURE_CONFIG,
      useClass: HammerConfig
    }
  ],
  exports: [SwipeAngularListComponent, ItemListComponent]
})
export class SwipeAngularListModule { }
