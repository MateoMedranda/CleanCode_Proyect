export abstract class Vehicle{
    abstract getDetails(): string;
}

export class Tesla extends Vehicle { 
    constructor(public model: string) {
        super();
    } 
    getDetails() {
        return `Tesla Model: ${this.model}, Carga eléctrica al 100%`;
    }
}
export class Audi extends Vehicle { 
    constructor(public model: string) {
        super();
    } 
    getDetails() {
        return `Audi Model: ${this.model}, Tracción Quattro activada`;
    }
}
export class Toyota extends Vehicle { 
    constructor(public model: string) {
        super();
    } 
    getDetails() {
        return `Toyota Model: ${this.model}, Motor híbrido listo`;
    }
}
export class Honda extends Vehicle { 
    constructor(public model: string) {
        super();
    } 
    getDetails() {
        return `Honda Model: ${this.model}, VTEC activado`;
    }
}
export class Ford extends Vehicle { 
    constructor(public model: string) {
        super();
    } 
    getDetails() {
        return `Ford Model: ${this.model}, Built Tough`;
    }
}