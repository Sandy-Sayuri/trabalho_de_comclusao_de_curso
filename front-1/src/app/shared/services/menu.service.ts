
import { Injectable } from "@angular/core";
import { Usuario } from "../model/user.module";

@Injectable()
export class MenuService {
    constructor(){}
    oiii(usuario: Usuario){
        console.log(usuario);
        
    }
}