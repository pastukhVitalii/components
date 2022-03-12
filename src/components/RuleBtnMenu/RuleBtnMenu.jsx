import {useRef, useState} from "react";
import './RuleBtnMenu.css';
import editIcon from '../../assets/icons/edit-icon.svg';
import deleteIcon from '../../assets/icons/delete-icon.svg';
import showMoreIcon from '../../assets/icons/show-more-icon.svg';
import hideIcon from '../../assets/icons/hide-icon.svg';

export const RuleBtnMenu = ({title, isCollapsedRule}) => {
  const [active, setActive] = useState(false);
  const ref = useRef();
  return (
    <>
      <div className="rule_btn_menu" ref={ref}>
        <div className="dots" onClick={() => setActive(!active)}>
          <div className="dot"/>
          <div className="dot"/>
          <div className="dot"/>
        </div>
        <div className={`rule_btn_menu_items ${active && "rule_btn_menu_items_show"}`}>
          <div className="menu_item">
            <img src={editIcon} alt="edit icon"/>
            Edit routing rule
          </div>
          <div className="menu_item">
            <img src={deleteIcon} alt="delete icon"/>
            Delete routing rule
          </div>
          <div className="menu_item">
            {!isCollapsedRule ? <>
              <img src={showMoreIcon} alt="show more icon"/>
              {`Show ${title} more PSPs`}</> : <>
              <img src={hideIcon} alt="hide icon"/>
              {`Hide ${title} PSPs`}</>
            }
          </div>
        </div>
      </div>
    </>
  )
}
