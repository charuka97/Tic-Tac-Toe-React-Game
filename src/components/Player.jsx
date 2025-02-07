import { useState } from "react";

export default function Player({
  initialName,
  symbol,
  isActive,
  onChangeName,
}) {
  const [isEditing, setIsEditing] = useState(false);
  const [playerName, setSetPlayerName] = useState(initialName);

  function handleEditClick() {
    setIsEditing((editStatus) => !editStatus);

    if (isEditing) {
      onChangeName(symbol, playerName);
    }
  }

  function handleInputChange(event) {
    setSetPlayerName(event.target.value);
  }

  return (
    <li className={isActive ? "active" : undefined}>
      <span className="player">
        {isEditing && <input value={playerName} onChange={handleInputChange} />}
        {!isEditing && <span className="player-name">{playerName}</span>}

        <span className="player-symbol">{symbol}</span>
      </span>
      <button onClick={handleEditClick}>{isEditing ? "Save" : "Edit"}</button>
    </li>
  );
}
