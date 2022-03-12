import './ToggleSwitch.css';
import {useState} from "react";
import InfoPrompt from "../InfoPrompt/InfoPrompt";

export const ToggleSwitch = ({label, ...restProps}) => {
  const [isToggled, setIsToggled] = useState(false);
  const onToggle = () => setIsToggled(!isToggled);
  return (
    <div className='toggle_switch_container'>
      <label className="toggle_switch"  >
      <input type="checkbox" checked={isToggled} onChange={onToggle}/>
      <span className="switch"/>
    </label>
      {label && <div className='toggle_switch_label'>
        <span onClick={onToggle}>{label}</span>
        <InfoPrompt/>
      </div>}
    </div>
  );
}
