import { NgModule } from "@angular/core"

import { MatIconModule } from '@angular/material/icon';
import { MatDialogModule } from '@angular/material/dialog';
import { MatToolbarModule } from '@angular/material/toolbar';

@NgModule({
    imports: [
        MatIconModule,
        MatDialogModule,
        MatToolbarModule
    ]
})
export class MaterialModule {}