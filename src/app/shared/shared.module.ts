import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SortingPipe } from './pipes/sorting.pipe';



@NgModule({
  declarations: [SortingPipe],
  imports: [
    CommonModule
  ],
  exports:[SortingPipe]
})
export class SharedModule { }
