import React from 'react';
import './Popup.css';

function Popup({ show, onClose, children }) {
  if (!show) return null; // Do not render anything if show is false

  return (
    <>
      <div className="popup-backdrop" onClick={onClose} />
      <div className="popup-content">
        <button className="popup-close" onClick={onClose}>
          &times;
        </button>
        {children}
      </div>
    </>
  );
}

export default Popup;
