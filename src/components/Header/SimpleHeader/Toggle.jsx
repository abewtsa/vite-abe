import React from "react";
import Inactive from '../../../../public/Close.svg'
import Active from '../../../../public/Open.svg'


function ToggleImages({ active, handleChangeActive }) {
    return (
      <>
        <div className="toggle-wrapper">
          {active ? (
            <img
              className="active-icon"
              src={Active}
              alt="icon"
              onClick={() => handleChangeActive()}
            />
          ) : (
            <img
              className="inactive-icon"
              src={Inactive}
              alt="icon"
              onClick={() => handleChangeActive()}
            />
          )}
        </div>
        <div className="title" onClick={() => handleChangeActive()}>Abe React Sandbox</div>
      </>
    );
  }
  
  export default ToggleImages;