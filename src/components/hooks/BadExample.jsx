import { useState } from 'react';

const BadExample1 = () => {
  if (condition) {
    // losh primer poradi koristenje na hook vo uslov
    const [number, setNumber] = useState<number>(2);
  }
};

const BadExample2 = () => {
  for (let i = 0; i < 10; i++) {
    // losh primer poradi koristenje na hook vo loop
    const [number, setNumber] = useState<number>(2);
  }
};

const BadExample3 = () => {
  const eventHandler = () => {
    // losh primer poradi koristenje na hook vo event handler (vgnezdena funkcija)
    const [number, setNumber] = useState<number>(2);
  };
};

class BadExample4 extends React.Component {
  render() {
    // losh primer poradi koristenje na hook vo klasna komponenta
    const [number, setNumber] = useState<number>(2);
  }
}


BadExample1(), BadExample2, BadExample3(), BadExample4()