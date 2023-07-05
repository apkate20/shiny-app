import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { CorePipePipe } from './core-pipe.pipe';
import { CoreDirDirective } from './core-dir.directive';



@NgModule({
  declarations: [
    HeaderComponent,
    CorePipePipe,
    CoreDirDirective
  ],
  imports: [
    CommonModule
  ],
  exports: [
    HeaderComponent,
    CoreDirDirective,
    CorePipePipe
  ]
})
export class CoreModule { }
