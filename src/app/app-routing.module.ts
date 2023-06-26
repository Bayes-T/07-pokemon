import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LugaresInfoComponent } from './lugares/pages/lugares-info/lugares-info.component';
import { ListaComponent } from './pokemones/lista/lista.component';
import { PokeInfoComponent } from './pokemones/poke-info/poke-info.component';

const routes: Routes = [
    {path: "home",
    component: ListaComponent},
    {path: "lista",
    component: ListaComponent},
    {path: "lugares",
    component: LugaresInfoComponent},
    {path: "pokemon/:id",
    component: PokeInfoComponent},
    {path: "**",
    redirectTo: "ListaComponent"}
]

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
    declarations: [],
    providers: [],
})
export class AppRoutingModule { }
