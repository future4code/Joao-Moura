import React from 'react';
import { useHistory } from 'react-router-dom';

const CardComment = () => {
    return ( 
       
            <div>
                <div>
                    <img src={"https://api.adorable.io/avatars/40/abott@adorable.png"} alt="Fulano"/>
                    <p>Nome</p>
                </div>
                <div>
                    <p>Texto do comentario</p>
                </div>
                <div>
                    <span>🠯</span><span>0</span><span>🠭</span>
                </div>
            </div>
       
     );
}
 
export default CardComment;