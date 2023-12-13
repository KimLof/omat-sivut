import React from 'react';
import { useNavigate } from 'react-router-dom';

function DropdownMenu() {
  let navigate = useNavigate();

  const handleDropdownChange = (event) => {
    navigate(event.target.value);
  };

  return (
    <select onChange={handleDropdownChange} className="dropdown">
      <option value="/tietoa">Tietoa</option>
      <option value="/15-peli">15-peli</option>
      <option value="/laskin">Laskin</option>
      <option value="/saasovellus">Sääsovellus</option>
      <option value="/valuuttamuunnin">Valuuttamuunnin</option>
      <option value="/matopeli">Käärme-peli</option>
    </select>
  );
}

export default DropdownMenu;
