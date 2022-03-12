import './Button.css';

export const Button = ({children, variant='contained', startIcon, ...restProps}) => {

  return (
    <button className={`btn btn_${variant}`} {...restProps}>
      {startIcon && <img src={startIcon} alt={children} className='btn_start_icon'/>}
      {children}
    </button>
  )
}
