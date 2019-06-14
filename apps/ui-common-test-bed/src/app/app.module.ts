import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { UiCommonModule } from '@nrwl/ui-common';
import { ZackTestComponent } from './zack-test/zack-test.component';

@NgModule({
  declarations: [AppComponent, ZackTestComponent],
  imports: [
    BrowserModule,
    UiCommonModule,
    RouterModule.forRoot([{ path: 'zack', component: ZackTestComponent}], { initialNavigation: 'enabled' })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
