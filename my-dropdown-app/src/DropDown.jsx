import DropDownSVG from './arrow-down.svg?react';
import './Dropdown.css';
const DropDown = (props) => {
  const {
    active = false,
    label = "Click Here",
    name = 'dropdownlick',
    content = "", // safer default
    action = () => { }
  } = props;

  return (
    <>
      <div className='label' onClick={() => action({ type: 'DROPDOWN-CLICK', payload: name })}>
        <span>{label}</span>
        <span><DropDownSVG /></span>
      </div>
      {active ? <span className='content-container '>{content}</span> : null}
    </>
  );
};

export default DropDown;
