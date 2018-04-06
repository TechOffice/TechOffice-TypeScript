import { RouterModule, Routes } from '@angular/router';
import { NgModule } from "@angular/core";
import Test1Component from './Test1Component';
import Test2Component from './Test2Component';

const routes: Routes = [
    {path: '', redirectTo: '/test1', pathMatch: 'full'},
    {path: 'test1', component: Test1Component},
    {path: 'test2', component: Test2Component}
];

@NgModule({
    imports: [ RouterModule.forRoot(routes) ],
    exports: [ RouterModule ]
})
export class AppRoutingModule {

}