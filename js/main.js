import { getAllAbrigos } from "./modules/abrigos.js";
import { getAllCamisetas } from "./modules/camisetas.js";
import { getAllCarritoAbrigos, getAllCarritoCamisetas, getAllCarritoPantalones } from "./modules/carrito.js";
import { getAllPantalones } from "./modules/pantalones.js";




console.log(await getAllCamisetas());

