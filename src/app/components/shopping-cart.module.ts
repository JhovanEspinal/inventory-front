import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { DashboardComponent } from "./dashboard/dashboard.component";
import { DashboardRoutesModule } from "./dashboard/dashboard.routing.module";
import { LayoutComponent } from './layout/layout.component';
import { NzLayoutModule } from 'ng-zorro-antd/layout';

@NgModule({
    declarations: [DashboardComponent, LayoutComponent],
    imports: [
      CommonModule,
      DashboardRoutesModule,
      NzLayoutModule,
    ],
    exports: [DashboardRoutesModule],
  })
  export class shoppingCartModule {}
  