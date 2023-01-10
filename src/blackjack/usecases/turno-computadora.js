import { pedirCarta,valorCarta,crearCartaHTML } from "./";
 
/**
 * turno de la computadora 
 * @param {HTMLElement} puntosHTML HTML para mostrar los puntos
 * @param {HTMLelement} divCartasComputadora elemento HTML para mostrar las cartas
 * @param {Number} puntosMinimos puntos minimos que la computadora necesita para ganar
 * @param {Array<String>} deck 
 */

export const turnoComputadora = ( puntosMinimos,puntosHTML,divCartasComputadora, deck = [] ) => {
 
    if (!puntosMinimos) throw new Error('Puntos minimos son necesario');

    if (!puntosHTML) throw new Error('Argumento puntosHTML es  necesario');
    
    let puntosComputadora = 0;

     
    do {
        const carta = pedirCarta(deck);

        puntosComputadora = puntosComputadora + valorCarta( carta );
        puntosHTML[1].innerText = puntosComputadora;
      
        //todo crear carta
        const imgCarta = crearCartaHTML( carta );
        divCartasComputadora.append( imgCarta );

        if( puntosMinimos > 21 ) {
            break;
        }

    } while(  (puntosComputadora < puntosMinimos)  && (puntosMinimos <= 21 ) );

    setTimeout(() => {
        if( puntosComputadora === puntosMinimos ) {
            alert('Nadie gana :(');
        } else if ( puntosMinimos > 21 ) {
            alert('Computadora gana')
        } else if( puntosComputadora > 21 ) {
            alert('Jugador Gana');
        } else {
            alert('Computadora Gana')
        }
    }, 100 );
}
