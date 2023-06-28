import React from 'react';

import { Button } from 'react-bootstrap';
import '../../styles/cardViajes.css'

const ViajesComponet = () => {



    const onClickVerClubViajes = () => {
        window.location = '/ClubDeViajes';
    }
    const onClickVerPaqueteViajes = () => {
        window.location = '/PaqueteDeViaje';
       
    }


    return (
        <>        


            <div className='grid'>

                <div className='img-wrapper col-10' >
                {/* <img src="https://cdn.forbescentroamerica.com/2019/10/Costa-Rica-2.jpg" style={{width:"510px", height:"720px" }}  alt="Imagen"/> */}
                    <img className='blur zoom' src="https://cdn.forbescentroamerica.com/2019/10/Costa-Rica-2.jpg"  alt="Imagen"/>
                    <div className='content fade slide-left'>
                        <p>Club de Viajes</p>
                        <Button
                            variant="primary"
                            type="submit"
                            size="sm"
                            onClick={() => onClickVerClubViajes()}>
                            Ver
                        </Button>{' '}
                    </div>
                </div>

                <div className='img-wrapper col-10'>
                {/* <img src="https://cdn.forbescentroamerica.com/2019/10/Costa-Rica-2.jpg" style={{width:"510px", height:"720px" }}  alt="Imagen"/> */}
                <img className='blur zoom' src="https://cdn.forbescentroamerica.com/2019/10/Costa-Rica-2.jpg"   alt="Imagen"/>
                <div className='content fade slide-right'>
                    
                    <p>Paquetes de Viajes</p>
                    <Button
                        variant="primary"
                        type="submit"
                        size="sm"
                        onClick={() => onClickVerPaqueteViajes()}>
                        Ver
                    </Button>{' '}
                </div>
            </div>

            </div>

        </>
    )
}

export default ViajesComponet;