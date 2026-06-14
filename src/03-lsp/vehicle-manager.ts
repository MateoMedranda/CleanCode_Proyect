import { Tesla, Audi, Toyota, Honda, Ford, Vehicle } from './vehicle';

(() => {
    class VehicleManager {
        static printVehicleDetails( vehicles: Vehicle[] ) {
            
            vehicles.forEach( vehicle => {
                    console.log(vehicle.getDetails());
            });
        }
    }

    const cars = [
        new Tesla("Model S"),
        new Audi("A4"),
        new Toyota("Camry"),
        new Honda("Civic"),
        new Ford("F-150"),
    ];

    VehicleManager.printVehicleDetails(cars);

})();
