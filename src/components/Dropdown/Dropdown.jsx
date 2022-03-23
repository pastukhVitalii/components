import {useRef, useState} from "react";
import {useOutsideClick} from "../../hooks/useOutsideClick";
import './Dropdown.css';

export const Dropdown = ({options, id, label, prompt, value, onChange, ...restProps}) => {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState('');
  const [hoveredElement, setHoveredElement] = useState('');
  const optionsRef = useRef(null);

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

  useOutsideClick(optionsRef, () => setOpen(false))

  const onKeyHandler = (e) => {
    e.stopPropagation()
    e.preventDefault()
    switch (e.key) {
      case 'Escape':
        setOpen(false);
        break
      case 'Enter':
        setOpen(true);
        if (open) setOpen(false);
        onChange(hoveredElement);
        break
      case ' ':
        setOpen(true);
        break
      case 'ArrowDown':
        e.stopPropagation()
        e.preventDefault()
        for (let i = 0; i < options.length; i++) {
          if (!hoveredElement) setHoveredElement(options[0]);
          if (options[i + 1] && options[i] === hoveredElement) {
            setHoveredElement(options[i + 1])
            const block = document.getElementById('options');
            const option = document.getElementById(`${options[i + 1].name}`);
            console.log("-> option", option);
            // block.offsetTop
            // block.scrollBy(0,37);
            // block.scroll(0, 37)
            // block.scrollIntoView(false)
            // block.scrollTo(0, 37)
            option.scrollIntoView()
            break
          }
        }
        break
      case 'ArrowUp':
        e.stopPropagation()
        e.preventDefault()
        for (let i = 0; i < options.length; i++) {
          if (!hoveredElement) setHoveredElement(options[0]);
          if (options[i - 1] && options[i] === hoveredElement) {
            setHoveredElement(options[i - 1])
            const block = document.getElementById('options');
            block.scrollBy(0, -37);
            break
          }
        }
        break
      default:
        break;
    }
  }

  return (
    <div className='dropdown' ref={optionsRef} onKeyUpCapture={onKeyHandler} tabIndex={0}>
      <div className='control' onClick={() => setOpen(!open)}>
        <div className={`selected_value ${open ? 'open' : null}`}>
          {value ? value[label] : <span className={'dropdown_prompt'}>{prompt}</span>}
        </div>
        <div className={`arrow ${open ? 'open' : null}`}/>
      </div>
      {open && <div className='dropdown_search_wrap'>
        <input type='text'
                           className='dropdown_search'
                           value={displayValue()}
                           onChange={e => {
                             setQuery(e.target.value)
                             onChange(null)
                           }}/></div>}
      <div className={`options ${open ? 'open' : null}`} id='options'>
        {
          filter(options).map(option => (
            <div key={option[id]} className={`option ${value === option ? 'selected' : null} 
             ${hoveredElement === option ? 'hovered' : null}`}
                 id={option[label]}
                 onClick={() => {
                   setQuery('')
                   onChange(option);
                   setOpen(false);
                 }}
                 onMouseEnter={() => setHoveredElement(option)}>
              {option[label]}
            </div>
          ))
        }
      </div>
    </div>
  )
}
