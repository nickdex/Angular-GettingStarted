import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { StarComponent } from './star.component';

@NgModule({
  imports: [CommonModule],
  declarations: [StarComponent],
  exports: [StarComponent, FormsModule, CommonModule]
})
export class SharedModule {}
