import React from 'react';
import DropdownMenu from './DropdownMenu';

function SubHeader({ onSelectionChange }) {
  return (
    <div className="subheader">
      <p>Jotain tekstiä tähän, esim. säätila</p>
      <DropdownMenu onSelectionChange={onSelectionChange} />
    </div>
  );
}

export default SubHeader;
