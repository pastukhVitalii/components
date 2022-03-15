import './Dropdown.css';
import {useState} from "react";

export const Dropdown = ({options, id, label, prompt, value, onChange, ...restProps}) => {
  const [open, setOpen] = useState();
  const [query, setQuery] = useState('');

  function filter(options) {
    return options.filter(
      (option) => option[label].toLowerCase().indexOf(query.toLowerCase()) > -1
    )
  }

  const displayValue = () => {
    if (!query) return '';
    if (query.length > 0) return query;
    return '';
  }

  return (
    <div className='dropdown'>
      <div className='control' onClick={() => setOpen((prevState => !prevState))}>
        <div className={`selected_value ${open ? 'open' : null}`}>
          {value ? value[label] : prompt}
        </div>
        <div className={`arrow ${open ? 'open' : null}`}/>
      </div>
      {open && ''}
      <div className={`options ${open ? 'open' : null}`}>
        <div>
          <input type="text"
                 className='dropdown_search'
                 value={displayValue()}
                 onChange={e => {
                   setQuery(e.target.value)
                   onChange(null)
                 }}/>
        </div>
        {
          filter(options).map(option => (
            <div key={option[id]} className={`option ${value === option ? 'selected' : null}`}
                 onClick={() => {
                   setQuery('')
                   onChange(option);
                   setOpen(false);
                 }}
            >{option[label]}</div>
          ))
        }
      </div>
    </div>
  )
}
