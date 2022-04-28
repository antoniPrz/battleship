import { useState } from 'react';

export function Tablero() {
  const [disparo, setDisparo] = useState('');
  const [acertado, setAcertado] = useState('');
  const [fallado, setFallado] = useState('');
  let boardMatrix = [];

  {
    /* <div key={index}  item>
              {item}
            </div> */
  }

  let barco = '21';

  let barcos = [
    {
      posicion: ['13', '14', '15'],
      balas: ['', '', ''],
      tamaño: 3,
      undido: false,
    },
    {
      posicion: ['', '', ''],
      balas: ['', '', ''],
      tamaño: 3,
      undido: false,
    },
    {
      posicion: ['', '', ''],
      balas: ['', '', ''],
      tamaño: 3,
      undido: false,
    },
  ];

  let cantidadDeBarcos = barcos.length;

  for (let i = 1; i <= 100; i++) {
    boardMatrix.push(i);
  }

  const disparar = (e) => {
    e.preventDefault();
    console.log(disparo);
    disparo === barco ? console.log('acertado') : console.log('fallaste');
    disparo === barco ? setAcertado(disparo) : setFallado(disparo);

    setDisparo('');
  };

  return (
    <>
      <h1 className='title'>Battleship</h1>
      <div className='container'>
        <div className='square'>
          {boardMatrix.map((item, index) =>
            21 == { item } ? (
              <div key={index} className='acertado'>
                <p>X</p>
              </div>
            ) : (
              <div key={index} className={item}>
                {item}
              </div>
            )
          )}
        </div>
      </div>
      <form action='' onSubmit={disparar}>
        <input
          type='text'
          placeholder='Dispara'
          onChange={(event) => setDisparo(event.target.value)}
          value={disparo}
        />
      </form>
    </>
  );
}
