import React from 'react';
import { useNavigate } from 'react-router-dom';

function DropdownMenu() {
  let navigate = useNavigate();

  const handleDropdownChange = (event) => {
    navigate(event.target.value);
  };

  return (
    <select onChange={handleDropdownChange} className="dropdown">
      <option value="/">Tietoa</option>
      <option value="/sovellustentiedot">Sovellusten tiedot</option>
      <option value="/15-peli">15-peli</option>
      <option value="/laskin">Laskin</option>
      <option value="/saasovellus">Sääsovellus</option>
      <option value="/valuuttamuunnin">Valuuttamuunnin</option>
      <option value="/matopeli">Käärme-peli</option>
      <option value="/yhteys">Yhteystiedot</option>
    </select>
  );
}

export default DropdownMenu;
