import React from 'react';
import DropdownMenu from './DropdownMenu';

function SubHeader({ onSelectionChange }) {
  return (
    <div className="subheader">
      <p></p>
      <DropdownMenu onSelectionChange={onSelectionChange} />
    </div>
  );
}

export default SubHeader;
