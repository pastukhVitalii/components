import React, {useEffect, useRef, useState} from "react";
import './BadgeGateway.css';

export const BadgeGateway = ({badge}) => {
  const [width, setWidth] = useState('200px');
  const [isHover, setIsHover] = useState(false);
  const ref = useRef();

  useEffect(() => {
    const {width} = ref?.current?.getBoundingClientRect()
    if (isHover) setWidth(width + 50 + 'px')
    else setWidth('200px')
  }, [isHover, ref])

  return (
    <>
      <div className='badge_item' onMouseEnter={() => setIsHover(true)} onMouseLeave={() => setIsHover(false)}
           style={{zIndex: isHover ? 10 : 1}}>
        <div className="badge_info" data-active={badge.status} title='title' style={{width}}>
          {badge.status !== 3 && <div className="gateway_index">{badge.index}</div>}
          <div className="getaway_name">{badge.gatewaySystemName}</div>
        </div>
      </div>

      <div className="getaway_name_fake" ref={ref}>{badge.gatewaySystemName}</div>

    </>
  )
}
