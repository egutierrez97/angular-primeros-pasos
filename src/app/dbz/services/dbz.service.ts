import { Injectable } from '@angular/core';
import { Character } from '../interfaces/character.interface';
import { v4 as uuid } from 'uuid';  

@Injectable({providedIn: 'root'})
export class dbzService {

    public character: Character[] = [{
        id: uuid(),
        name: 'Krilling' ,
        power: 1000
    },
    {
        id: uuid(),
        name: 'Goku' ,
        power: 9500
    },{
        id: uuid(),
        name: 'Vegeta' ,
        power: 7500
    }] ;

    addCharacter( character: Character ):void {

        const newCharacter: Character = { id: uuid(), ...character}

        this.character.push(newCharacter);
    };

    // onDeleteCharacter (index:number) {
    //     this.character.splice(index,1)
    // }

    onDeleteCharacterById(id:string){
        this.character = this.character.filter( character => character.id !== id );
    }

    
}