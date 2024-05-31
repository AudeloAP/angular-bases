import { NgModule } from "@angular/core";
import { CounterComponent } from "./component/counter/counter.comonent";

@NgModule({
    declarations: [
        CounterComponent
    ],
    exports: [
        CounterComponent
    ]
})
export class CounterModule{}