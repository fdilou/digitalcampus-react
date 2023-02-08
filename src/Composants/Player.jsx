import React from 'react'

export default function Players() {
  let score = 100;
  let name = 'khadi';
  let messageWin = score + 'vous avez gagné,' + name;
  let messageLoser = score + 'vous avez perdu,' + name;
    


if (score >= 100) {
    return <h1 style={{color:"green"}}>{messageWin}</h1>
} else {
    return <h1 style={{color:"red"}}>{messageLoser}</h1>
}
}

// autre possibilité
// if (score >= 100) {
    // return <h1 style={{color:"green"}}>{name}, votre score est de {score} vous avez gagné!!!</h1>
// } else {
    // return <h1 style={{color:"red"}}>{name}, votre score est de {score} vous avez perdu, LOSER!!!</h1>
// }
// }