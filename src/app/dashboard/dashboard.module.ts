import { NgModule } from '@angular/core';
import { CommonModule } from "@angular/common";

import { DashboardRoutingModule } from "./dashboard-routing.module";
import { ChartistModule } from 'ng-chartist';
import { NgApexchartsModule } from 'ng-apexcharts';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AngularResizedEventModule } from 'angular-resize-event';
import { MatchHeightModule } from "../shared/directives/match-height.directive";

import { Dashboard1Component } from "./dashboard1/dashboard1.component";
import { Dashboard2Component } from "./dashboard2/dashboard2.component";
import { EditorComponent } from 'app/forms/elements/editor/editor.component';
import { QuillModule } from 'ngx-quill'
import { CountdownModule } from 'ngx-countdown';
import { ChatModule } from '../chat/chat.module';
import { ChatDashboardComponent } from './chat-dashboard/chat-dashboard.component';



@NgModule({
    imports: [
        CommonModule,
        DashboardRoutingModule,
        ChartistModule,
        NgbModule,
        MatchHeightModule,
        NgApexchartsModule,
        AngularResizedEventModule,
        QuillModule.forRoot(),
        CountdownModule,
        ChatModule
    ],
    exports: [],
    declarations: [
        Dashboard1Component,
        Dashboard2Component,
        EditorComponent,
        ChatDashboardComponent,
    ],
    providers: [],
})
export class DashboardModule { }
