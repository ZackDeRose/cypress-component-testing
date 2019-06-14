import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ZackComponent } from './zack/zack.component';

@NgModule({
  imports: [CommonModule],
  declarations: [ZackComponent],
  exports: [ZackComponent]
})
export class UiCommonModule {}
