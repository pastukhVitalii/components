import {useRef} from "react";
import {useOutsideClick} from "../../hooks/useOutsideClick";
import closeIcon from '../../assets/icons/close-icon.svg';
import {TileGateway} from "../TileGateway/TileGateway";

import './AddEditRuleModal.css';
import {Button} from "../Button/Button";

export const AddEditRuleModal = ({isOpen, setIsOpen, ...restProps}) => {
  const wrapperRef = useRef(null);

  useOutsideClick(wrapperRef, () => {
    if (isOpen) setIsOpen(false)
  });

  const closeModal = (e) => {
    if (e.key === 'Escape') setIsOpen(false)
  }

  return (
    <>
      {isOpen && (
        <div className={`modal_rule ${isOpen ? 'active' : ''}`} onKeyDown={closeModal} tabIndex="1">
          <div className='content' ref={wrapperRef}>
            <img src={closeIcon} alt="close modal" className='closeModal' tabIndex={1}
                 onClick={() => setIsOpen(false)} autoFocus/>
            <h3>Add Rule</h3>
            <section className='modal_rule_section'>
              <h4>Create your rule by choosing gateway</h4>
              <p>You can sort the items in the below section. Click X on the items you wish to remove from the rule.</p>
              <div className='gateways_container'>
                <TileGateway/>
              </div>
            </section>

            <p className='all_gateways_title'>Click on the below listed items to add them to the rule.</p>
            <div className='all_gateways'>
              <section className='modal_rule_section'>
                <h4>ACTIVE GATEWAYS</h4>
                <div className='gateways_container'>
                  <TileGateway/>
                </div>
              </section>
              <section className='modal_rule_section'>
                <h4>INACTIVE GATEWAYS</h4>
                <div className='gateways_container'>
                  <TileGateway/>
                </div>
              </section>
            </div>
            <div className='btn_container'>
              <Button variant="contained">Save</Button>
              <Button variant="outlined" onClick={() => setIsOpen(false)}>Cancel</Button>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
