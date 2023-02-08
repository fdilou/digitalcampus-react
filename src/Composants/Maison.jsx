import React from 'react';
import Chambre from './Chambre';
import Cuisine from './Cuisine';
import Salon from './Salon';

export default function Maison() {
  return (
    <div>
       <h1>Maison</h1> 
       <ul>
            <li>
                < Chambre/>
            </li>
        
            <li>
                < Cuisine/>
            </li>
            <li>
                < Salon/>
            </li>
       </ul>
        
    </div>
  )
}
