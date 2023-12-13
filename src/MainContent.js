import React from 'react';

function MainContent({ selectedContent }) {
  return (
    <div className="main-content">
      <div className="content-box">
        <p>{selectedContent}</p>
      </div>
    </div>
  );
}

export default MainContent;
