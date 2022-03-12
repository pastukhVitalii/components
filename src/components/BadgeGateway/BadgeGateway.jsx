import './BadgeGateway.css';

export const BadgeGateway = ({badge}) => {

  return (
    <>
      <div className="badge_info" data-active={badge.status} title='title'>
        {badge.status!== 3 && <div className="gateway_index">{badge.index}</div>}
        <div className="getaway_name">{badge.gatewaySystemName}</div>
        <div className='shadow'>
          {badge.status!== 3 && <div className="gateway_index">{badge.index}</div>}
          <div className="getaway_name">{badge.gatewaySystemName}</div>
        </div>
      </div>
    </>
  )
}
