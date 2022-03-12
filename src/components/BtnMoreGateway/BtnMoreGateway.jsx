import './BtnMoreGateway.css';
import arrowIcon from '../../assets/icons/arrow-icon.svg';
import {useState} from "react";
import {Tooltip} from "../Tooltip/Tooltip";

export const BtnMoreGateway = ({title}) => {
  const [isCollapse, setIsCollapse] = useState(false);
  const [isShowTooltip, setIsShowTooltip] = useState(false);

  const onClick = () => {
    setIsCollapse(!isCollapse);
    setIsShowTooltip(false);
  }

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
    <div onMouseEnter={showTooltip} onMouseLeave={hideTooltip}>
      <div className="btn_more_getaway_wrap">
        <Tooltip text={`${title} more Gateways to ${isCollapse ? 'hide' : 'show'}...`}
                 active={isShowTooltip} width={200} blueStyle='#999'/>
        <div className="btn_more_getaway" onClick={onClick}>
          <img src={arrowIcon} alt="arrow icon"
               className={`gateway_arrow ${isCollapse ? 'gateway_arrow_active' : ''}`}/>
          <div className="gateway_count">{title}</div>
        </div>
      </div>
    </div>
  )
}
