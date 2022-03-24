import './FilterModal.css';
import {useRef, useState} from "react";
import filterIcon from "../../assets/icons/filter-icon.svg";
import {Button} from "../Button/Button";
import {useOutsideClick} from "../../hooks/useOutsideClick";
import {DropdownS} from "../Dropdown/DropdownS";

export const FilterModal = ({...restProps}) => {
  const [isFilterModal, setIsFilterModal] = useState(false);
  const wrapperRef = useRef(null);

  useOutsideClick(wrapperRef, () => {
    if (isFilterModal) setIsFilterModal(false)
  });

  return (
    <>
      <Button variant="contained" startIcon={filterIcon}
              onClick={() => setIsFilterModal(!isFilterModal)}>filter</Button>
      {isFilterModal && (
        <div ref={wrapperRef}
             className={`filter_modal ${isFilterModal ? 'filter_modal_active' : ''}`}
        >
          <div className='filter_modal_content'>
            <div className='arrow'>
              <div className='outer'/>
              <div className='inner'/>
            </div>
            <h3 className='modal_filter_title'>Filter Routing rules</h3>
            <DropdownS/>
          </div>
        </div>
      )}
    </>
  )
}
