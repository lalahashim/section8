import { useState, useRef } from "react";

export default function Player() {
  const playerName = useRef();
  const [enteredName, setEnteredName] = useState(null);

  function handleCLick(){
    setEnteredName(playerName.current.value);
    playerName.current.value = '';
  }

  return (
    <section id="player">
      <h2>Welcome {enteredName ?? 'unknown entity'}</h2>
      <p>
        <input ref={playerName} type="text" />
        <button onClick={handleCLick}>Set Name</button>
      </p>
    </section>
  );
}
