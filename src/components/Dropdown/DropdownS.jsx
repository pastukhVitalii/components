import {memo, useCallback, useRef, useState} from 'react';
import Select from 'react-select';
import checkMark from '../../assets/icons/checkMark.svg';
import './Dropdown.css';
import {useOutsideClick} from "../../hooks/useOutsideClick";

const selectStyles = {
  option: (provided, state) => {
    return (
      {
        ...provided,
        color: state.isFocused ? 'white' : state.isSelected ? 'white' : '#333',
        backgroundColor: state.isFocused ? '#0CA1D7' : state.isSelected ? '#0ca1d785' : '#fff',
        padding: '6px 25px 6px 10px',
        ':active': {
          backgroundColor: 'white'
        },
        backgroundImage: state.isFocused ? `url(${checkMark})` : null,
        backgroundRepeat: state.isFocused ? 'no-repeat' : null,
        backgroundPosition: state.isFocused ? 'right 10px top 10px' : null,
        backgroundSize: state.isFocused ? '15px' : null,
      }
    )
  },

  control: (provided) => ({
    ...provided,
    minWidth: 340,
    margin: 4,
    border: '1px solid #ccc',
    boxShadow: 'inset 0 1px 1px rgb(0 0 0 / 8%)',
    color: '#555',
    height: 30,
    minHeight: 30,
    width: '-webkit-fill-available',
    fontSize: 14,
    background: 'url(https://atlas2.cashier-dev.com/assets/fd4ebe91/css/search.png) right 10px top 8px no-repeat #fff',
    boxSizing: 'border-box',
  }),
  menu: () => ({}),
};

export const DropdownS = memo(({options, isMulti=false}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [value, setValue] = useState();
  const wrapperRef = useRef(null);

  const onSelectChange = useCallback((v) => {
    isMulti ? setValue((prev= []) => [...prev, v]) : setValue(v);
    setIsOpen(false);
  }, [isOpen])

  useOutsideClick(wrapperRef, () => {
    setIsOpen(false)
  });

  const closeModal = () => setIsOpen(false);
  const openModal = () => setIsOpen(true);

  return (
    <div ref={wrapperRef}>
      <Dropdown
        isOpen={isOpen}
        onClose={closeModal}
        isMulti={isMulti}
        value={value}
        setValue={setValue}
        target={
          <button onClick={openModal} className={`control ${isOpen ? 'open' : ''}`}>
            {isMulti ? "Select" : value ? `${value?.label}` : 'Select'}
            {!isOpen && <div className='select_arrow'/>}
          </button>
        }>
        <Select
          autoFocus
          backspaceRemovesValue={false}
          components={{DropdownIndicator, IndicatorSeparator: null}}
          controlShouldRenderValue={false}
          hideSelectedOptions={false}
          isClearable={false}
          menuIsOpen
          onChange={onSelectChange}
          options={options}
          placeholder="Search..."
          styles={selectStyles}
          tabSelectsValue={false}
          value={value}
          maxMenuHeight={200}
          isOptionDisabled={(option) =>isMulti? value?.some((v) => option.value === v.value): false}
        />
      </Dropdown>
    </div>
  );
})

// styled components

const Menu = (props) => {
  return (
    <div
      style={{
        backgroundColor: 'white',
        borderRadius: '0 0 3px 3px',
        borderBottomLeftRadius: 3,
        boxShadow: '0 6px 12px rgb(0 0 0 / 18%)',
        position: 'absolute',
        zIndex: 2,
        border: '1px solid #0CA1D7',
        borderTop: "none",
        width: 348,
      }}
      {...props}
      className='dropdown_option'
    />
  );
};

const Dropdown = (
  {
    children,
    isOpen,
    target,
    isMulti,
    value,
    setValue,
  }) => (
  <div style={{position: 'relative'}}>
    {target}
    {isOpen ? <Menu>{children}</Menu> : null}
    {isMulti ? <SelectedValue value={value} setValue={setValue}/> : null}
  </div>
);

const DropdownIndicator = () => (
  <div className='dropdown_search2'/>
);

const SelectedValue = ({value, setValue}) => (
  <div className='selected_area'>
    {value && value?.map(v => <div key={v.value} className='selected_item'>
      {v.label}
      <span className='remove_item' onClick={() => setValue(value.filter(i => i.value !== v.value))}>✕</span>
    </div>)}
  </div>
)
