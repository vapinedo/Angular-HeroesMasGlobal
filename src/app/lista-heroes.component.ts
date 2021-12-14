import { Component } from "@angular/core";

@Component({
    selector: "lista-heroes",
    template: `
        <h5>Heroes de Marvel</h5>

        <ul>
            <li>Spiderman</li>
            <li>Ironman</li>
            <li>Hulk</li>
            <li>Thor</li>
        </ul>
    `
})
export class ListaHeroesComponent {}