import './RulesContainerInfo.css';
import {useState} from "react";
import {Tooltip} from "../Tooltip/Tooltip";

export const RulesContainerInfoCountry = ({country}) => {
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
    <div className='rules_container_info_item'
         onMouseEnter={showTooltip} onMouseLeave={hideTooltip}>
      {
        country ? <>
          <Tooltip text='Ukraine (UA)' active={isShowTooltip} width={110} left={0} bottom={55}/>
          <img src="https://atlas2.cashier-dev.com/img/flags/ua.svg" alt="flag" className="country_img"/>
          <span className="country_name">{country}</span>
        </> : 'Any Country'
      }
    </div>
  )
}

export const RulesContainerInfoCurrency = ({currency}) => {
  return (
    <div className='rules_container_info_item'>{
      currency ? <>
        <span className="currency">{currency}</span>
      </> : 'Any Currency'
    }
    </div>
  )
}

export const RulesContainerInfoCard = ({card}) => {
  return (
    <div className='rules_container_info_item' title={card}>{
      card ? <>
        <img src="https://atlas2.cashier-dev.com/img/card_types/visa.svg" alt="card type" className="card_img"/>
      </> : 'Any Card'
    }
    </div>
  )
}
