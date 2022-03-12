import {useState} from "react";
import './Tooltip.css';

export const Tooltip = ({text, active, position='', width, left, bottom, blueStyle: colorStyle}) => {
  const [showTooltip, setShowTooltip] = useState(false);

  return (
    <div className={`container ${(active || showTooltip)? 'container_show': ''}`}
         style={{width: width + 'px', left: left + 'px', bottom: bottom + 'px', color: colorStyle}}
         onMouseEnter={() => setShowTooltip(true)} onMouseLeave={() => setShowTooltip(false)}>
      <div className="message-body">
        <p>{text}</p>
        <div className={`arrow_${position}`}>
          <div className={`outer_${position}`}/>
          <div className={`inner_${position}`}/>
        </div>
      </div>
    </div>
  )
}
