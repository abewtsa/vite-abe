import InActiveLightMode from '../../../../public/arrow-right.svg'
import ActiveLightMode from '../../../../public/arrow-down.svg'
import InActiveDarkMode from '../../../../public/arrow-right-dark.svg'
import ActiveDarkMode from '../../../../public/arrow-down-dark.svg'

function ToggleImages({ darkMode, active, handleChangeActive }) {
    return (
      <>
        <div className="toggle-wrapper">
        {active ? (
            <img
              className="active-icon"
              src={darkMode ? ActiveDarkMode : ActiveLightMode}
              alt="icon"
              onClick={() => handleChangeActive()}
            />
          ) : (
            <img
              className="inactive-icon"
              src={darkMode ? InActiveDarkMode : InActiveLightMode}
              alt="icon"
              onClick={() => handleChangeActive()}
            />
          )}
        </div>
        <div className="title" onClick={() => handleChangeActive()}>Abraham Wong</div>
      </>
    );
  }

  export default ToggleImages;
