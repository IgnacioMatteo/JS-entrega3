/* ============== Ciclos for ====================== */
/* para un determinado codigo vamos a repetir este codigo n veces */ 
/* tiene 3 componentes donde inicia, cuantas veces se repite y el paso */
//console.log("Antes del for")
//
//for ( let i = 0; i < 10; i++) {
//    console.log(i);
//}
//
//console.log("luego del for")

/*WHILE mientras se cumpla tal condicion se cumple el codigo */

let i = 0;
let condicion = true;
while (condicion) {
    if (i == 7) {
        condicion = false;
    }
    console.log(i);
    i++;
}