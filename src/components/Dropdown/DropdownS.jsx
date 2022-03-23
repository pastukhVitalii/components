import {Component} from 'react';
import Select from 'react-select';
import checkMark from '../../assets/icons/checkMark.svg';
import './Dropdown.css';

const options = [
  {value: 'chocolate', label: 'Chocolate'},
  {value: 'strawberry', label: 'Strawberry'},
  {value: 'strawberry', label: 'Strawberry'},
  {value: 'strawberry', label: 'Strawberry'},
  {value: 'strawberry', label: 'Strawberry'},
  {value: 'strawberry', label: 'Strawberry'},
  {value: 'strawberry', label: 'Strawberry'},
  {value: 'strawberry', label: 'Strawberry'},
  {value: 'vanilla', label: 'Vanilla'}
]

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
        backgroundImage: state.isFocused ? `url(${checkMark})`: null,
        backgroundRepeat: state.isFocused ? 'no-repeat': null,
        backgroundPosition: state.isFocused ? 'right 10px top 10px': null,
        backgroundSize: state.isFocused ? '15px': null,
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

export default class PopoutExample extends Component {
  state = {isOpen: false, value: undefined};
  toggleOpen = () => {
    this.setState((state) => ({isOpen: !state.isOpen}));
  };
  onSelectChange = (value) => {
    this.toggleOpen();
    this.setState({value});
  };

  render() {
    const {isOpen, value} = this.state;
    return (
      <div className='dropdown2'>
        <Dropdown
          isOpen={isOpen}
          onClose={this.toggleOpen}
          target={
            <button onClick={this.toggleOpen} className={`control ${isOpen ? 'open' : ''}`}>
              {value ? `${value.label}` : 'Select'}
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
            onChange={this.onSelectChange}
            options={options}
            placeholder="Search..."
            styles={selectStyles}
            tabSelectsValue={false}
            value={value}
            maxMenuHeight={200}
          />
        </Dropdown></div>
    );
  }
}

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

// close when click outside
const Blanket = (props) => (
  <div
    style={{
      bottom: 0,
      left: 0,
      top: 0,
      right: 0,
      position: 'fixed',
      zIndex: 1,
    }}
    {...props}
  />
);

const Dropdown = (
  {
    children,
    isOpen,
    target,
    onClose,
  }) => (
  <div style={{position: 'relative'}}>
    {target}
    {isOpen ? <Menu>{children}</Menu> : null}
    {isOpen ? <Blanket onClick={onClose}/> : null}
  </div>
);

const DropdownIndicator = () => (
  <div className='dropdown_search2'/>
);

