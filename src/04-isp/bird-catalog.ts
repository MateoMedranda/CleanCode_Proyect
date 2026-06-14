interface Bird {
    eat(): void;
}

interface SwimmingBird {
    swim(): void;
}

interface RunningBird{
    run(): void;
}

interface FlyingBird{
    fly(): void;
}

(() => {
    class Toucan implements Bird, FlyingBird {
        public eat() { console.log('El Tucán está comiendo frutas.'); }
        public fly() { console.log('El Tucán vuela sobre la selva.'); }
        public swim() { console.log('El Tucán no suele nadar, pero implemento el método vacío.'); }
    }

    class Hummingbird implements Bird, FlyingBird {
        public eat() { console.log('El Colibrí busca néctar.'); }
        public fly() { console.log('El Colibrí aletea rápidamente.'); }
    }

    class Ostrich implements Bird, RunningBird {
        public eat() { console.log('El Avestruz come hierbas.'); }
        public run() { console.log('El Avestruz corre velozmente.'); }
        public swim() { console.log('El Avestruz puede nadar si es necesario.'); }
    }

    const tucan = new Toucan();
    tucan.eat();
    tucan.fly();
    tucan.swim();

    const colibri = new Hummingbird();
    colibri.eat();
    colibri.fly();

    const avestruz = new Ostrich();
    avestruz.eat();
    avestruz.run();
    avestruz.swim();
})();