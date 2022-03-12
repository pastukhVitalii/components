import './InfoPrompt.css';
import {useState} from "react";
import {Tooltip} from "../Tooltip/Tooltip";

function InfoPrompt({isCollapsed, ...restProps}) {
  const [isShowTooltip, setIsShowTooltip] = useState(false);

  const hideTooltip = () => {
    setTimeout(() => {
      setIsShowTooltip(false)
    }, 500)
  }

  const showTooltip = () => {
    setTimeout(() => {
      setIsShowTooltip(true)
    }, 200)
  }

  return (
    <div className='info_prompt_container' onMouseEnter={showTooltip} onMouseLeave={hideTooltip} {...restProps}>
      <Tooltip text='Once enabled, the chosen country will be restricted from accepting deposits or withdrawals'
               active={isShowTooltip} position='left' width={350} left={60} bottom={-20}/>
      <i className="rule-engine-info-icon">i</i>
    </div>
  )
}

export default InfoPrompt;
