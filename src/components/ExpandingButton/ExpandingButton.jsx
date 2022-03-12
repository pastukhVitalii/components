import './ExpandingButton.css';
import {useState} from "react";
import {Tooltip} from "../Tooltip/Tooltip";

function ExpandingButton({isCollapsed, ...restProps}) {
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
    <div className='expanding_button_container' onMouseEnter={showTooltip} onMouseLeave={hideTooltip} {...restProps}>
      <Tooltip text='Click to expand all Routing Rules' active={isShowTooltip} width={220} left={-29} bottom={55} blueStyle='#2cabe2'/>
      <svg xmlns="http://www.w3.org/2000/svg" width="42" height="42" viewBox="0 0 42 42">
        <g data-name="Group 171">
          <g data-name="Rectangle 772" stroke='current' fill="none">
            <rect width="42" height="42" rx="6" stroke="none"/>
            <rect x=".5" y=".5" width="41" height="41" rx="5.5" fill="none"/>
          </g>
          <g data-name="Group 151">
            <g data-name="Group 152">
              {isCollapsed ?
                <path data-name="Path 35281"
                      d="M221.313-111.456h-9.975a2.949 2.949 0 0 1-2.949-2.949V-130.4a2.949 2.949 0 0 1 2.949-2.949h15.989a2.949 2.949 0 0 1 2.949 2.949v10.11"
                      transform="translate(-198.331 143.4)"
                      strokeLinecap="round" strokeWidth="2.5px" stroke='current' fill="none"/>
                : <path data-name="Path 35281"
                        d="M216.884-111.456h-5.545a2.949 2.949 0 0 1-2.949-2.949V-130.4a2.949 2.949 0 0 1 2.949-2.949h15.989a2.949 2.949 0 0 1 2.949 2.949v5.467"
                        transform="translate(-198.331 143.4)"
                        strokeLinecap="round" strokeWidth="2.5px" stroke='current' fill="none"/>}
              <g className={`arrow_ ${isCollapsed ? 'collapsed' : ''}`}>
                <path data-name="Path 35280" d="M237.5-97.1h7.172l.011-7.213" transform="translate(-212.73 129.046)"
                      strokeLinejoin="round" strokeLinecap="round" strokeWidth="2.5px" stroke='current' fill="none"/>
                <path data-name="Line 26" transform="translate(19.672 19.671)"
                      strokeLinecap="round" strokeWidth="2.5px" stroke='current' fill="none" d="m0 0 12.281 12.275"/>
              </g>
            </g>
          </g>
        </g>
      </svg>
    </div>
  )
}

export default ExpandingButton;
