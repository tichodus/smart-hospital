import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatSidenavModule } from '@angular/material/sidenav';
import { MatInputModule } from '@angular/material/input';
import { MatTabsModule } from '@angular/material/tabs';
import { MatSelectModule } from '@angular/material/select';

@NgModule({
  imports: [
    CommonModule,
    MatSidenavModule,
    MatInputModule,
    MatTabsModule,
    MatSelectModule
  ],
  exports: [
    MatSidenavModule,
    MatInputModule,
    MatTabsModule,
    MatSelectModule
  ],
  declarations: []
})
export class MaterialComponentsModule { }
