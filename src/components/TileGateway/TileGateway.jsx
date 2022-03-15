import './TileGateway.css';

export const TileGateway = ({badge}) => {

  return (
    <>
      <div className='tile_item' data-active='1'>
        Test Card Processor
        <span className='remove-gateway-item'>✕</span>
      </div>
      <div className='tile_item' data-active='0'>
        Test Card Processor
        <span className='remove-gateway-item'>✕</span>
      </div>
    </>
  )
}
