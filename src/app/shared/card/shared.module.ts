import { NgModule } from "@angular/core";
import { CardComponent } from "./card.component";

@NgModule({
    // bootstrap only in the root module
    declarations: [CardComponent],
    exports: [CardComponent]
})
export class SharedModule {}
