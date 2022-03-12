import './App.css';
import {
  RulesContainerInfoCard,
  RulesContainerInfoCountry,
  RulesContainerInfoCurrency
} from "./components/RulesContainerInfo/RulesContainerInfo";
import {BadgeGateway} from "./components/BadgeGateway/BadgeGateway";
import {useEffect, useRef, useState} from "react";
import {RuleBtnMenu} from "./components/RuleBtnMenu/RuleBtnMenu";
import {BtnMoreGateway} from "./components/BtnMoreGateway/BtnMoreGateway";
import {Button} from "./components/Button/Button";
import filterIcon from "./assets/icons/filter-icon.svg";
import ExpandingButton from "./components/ExpandingButton/ExpandingButton";
import {ToggleSwitch} from "./components/ToggleSwitch/ToggleSwitch";
import {FilterModal} from "./components/FilterModal/FilterModal";

const gateways = [
  {gatewaySystemName: 'Test Card Processor Alexsey - alexsey.shestopalov+root@atlastec.io', status: 0},
  {gatewaySystemName: 'Acquiring - alexsey.shestopalov+root@atlastec.io', status: 1},
  {gatewaySystemName: 'Acquiring - alexsey.shestopalov+root@atlastec.io', status: 2},
  {gatewaySystemName: 'Restricted', status: 3},
  {gatewaySystemName: 'Acquiring - alexsey.shestopalov+root@atlastec.io', status: 0},
  {gatewaySystemName: 'Acquiring - alexsey.shestopalov+root@atlastec.io', status: 0},
  {gatewaySystemName: 'Acquiring - alexsey.shestopalov+root@atlastec.io', status: 0},
]

function App() {

  const [width, setWidth] = useState({windowWidth: window.innerWidth});
  const [badgeCount, setBadgeCount] = useState(0);
  const [btnMoreTitle, setBtnMoreTitle] = useState('')
  const [isExpandRule, setIsExpandRule] = useState(false);
  const [isCollapsedRules, setIsCollapsedRules] = useState(false);
  const [isFilterModal, setIsFilterModal] = useState(false);

  const handleResize = () => {
    setWidth({windowWidth: window.innerWidth});
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    const count = Math.floor((width.windowWidth - 600) / 220)
    setBadgeCount(count)
  }, [width.windowWidth]);

  useEffect(() => {
    if (!isExpandRule) setBtnMoreTitle('+' + (gateways.length - badgeCount));
    if (isExpandRule) setBtnMoreTitle(btnMoreTitle.replace('+', '-'));
  }, [isExpandRule, badgeCount]);

  const toggleGateways = () => {
    setIsExpandRule(!isExpandRule);
    if (badgeCount !== gateways.length) return setBadgeCount(gateways.length);
    const count = Math.floor((width.windowWidth - 600) / 220);
    setBadgeCount(count);
  }

  const ref = useRef();
  const containerRef = useRef();
  const [coordinate, setCoordinate] = useState({top: 0, left: '100%'});

  useEffect(() => {
    setTimeout(() => {
      const size = ref.current.getBoundingClientRect();
      const containerSize = containerRef.current?.getBoundingClientRect();
      setCoordinate({top: size.y - containerSize.y + 'px', left: size.x - containerSize.x})
    })
  }, [isExpandRule, ref, containerRef, width.windowWidth]);

  const showHideRules = () => {
    setIsCollapsedRules(!isCollapsedRules)
  }

  return (
    <div className="App">
      <div style={{position: "absolute", right: 0}}>
        <div style={{position: "relative", right: 0}}>
          <FilterModal isOpen={isFilterModal} setIsOpen={setIsFilterModal}/>
          <Button variant="contained" startIcon={filterIcon}
                  onClick={() => setIsFilterModal(!isFilterModal)}>filter</Button>
        </div>
      </div>
      <Button variant="outlined" onClick={() => console.log('click')}>+ Add rule</Button>
      <Button variant="contained">+ Add rule</Button>

      <ExpandingButton onClick={showHideRules} isCollapsed={isCollapsedRules}/>
      <ToggleSwitch label='restrict'/>
      <div className={`rules_container_info ${isExpandRule && "rules_container_info_active"}`}>
        <RulesContainerInfoCountry/>
        <RulesContainerInfoCurrency/>
        <RulesContainerInfoCard/>
        <div className={`gateways ${isExpandRule && "more_gateways_active"}`} ref={containerRef}>
          {gateways.map((badge, index) => {
            if (index < badgeCount) return <BadgeGateway key={index} badge={{...badge, index: index + 1}}/>
          })}

          <div className='btns' style={{...coordinate}}>
            <div onClick={toggleGateways}>
              {badgeCount &&
                <BtnMoreGateway title={btnMoreTitle}/>}
            </div>
            <RuleBtnMenu title={btnMoreTitle} isCollapsedRule={isExpandRule}/>
          </div>
          <div className="btns_shadow" ref={ref}/>
        </div>
      </div>
      <div className="rules_container_info">
        <RulesContainerInfoCountry country='UA'/>
        <RulesContainerInfoCurrency currency="UAH"/>
        <RulesContainerInfoCard card="visa"/>
      </div>
    </div>
  );
}

export default App;
