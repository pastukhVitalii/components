import './FilterModal.css';
import {useRef} from "react";

export const FilterModal = ({isOpen, setIsOpen, ...restProps}) => {
  const modalRef = useRef(null);

  const closeModal = (event) => {
    if (modalRef.current === event.target) {
      setIsOpen(false);
    }
  };

  return (
    <>
      {isOpen && (
        <div
          className={`modal ${isOpen? 'active': ''}`}
          ref={modalRef}
          onMouseDown={closeModal}
        >
          <div className='modal_content'>
            <div className='arrow'>
              <div className='outer'/>
              <div className='inner'/>
            </div>
                <h3 className='modal_filter_title'>Filter Routing rules</h3>

          </div>
        </div>
      )}
    </>
  )
}
