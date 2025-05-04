import Carousel from 'react-bootstrap/Carousel';

function DarkVariantExample() {
  return (
    <Carousel data-bs-theme="dark" 
    style={{
      padding:'2px 30px',
      margin:'2px 5px',
      
    }}>
      <Carousel.Item className='slides'>
        <img
          className="d-block w-100"
          src="https://www.shutterstock.com/shutterstock/photos/1720082020/display_1500/stock-vector-mobile-online-delivery-concept-online-order-tracking-on-mobile-delivery-package-with-scooter-e-1720082020.jpg"
          alt="Network Error"
        />
        
          
        
      </Carousel.Item>
      <Carousel.Item className='slides'>
        <img
          className="d-block w-100"
          src="https://www.shutterstock.com/shutterstock/photos/1609947532/display_1500/stock-vector-online-delivery-phone-concept-fast-respond-delivery-package-shipping-on-mobile-online-order-1609947532.jpg"
          alt="Second slide"
        />
        
        
      </Carousel.Item>
      <Carousel.Item className='slides'>
        <img
        style={{
          width:'200px',
          height:'400px'
        }}
          className="d-block w-100"
          src="https://images.pexels.com/photos/341523/pexels-photo-341523.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt="Third slide"
        />
        
          
        
      </Carousel.Item>
      <Carousel.Item className='slides'>
        <img
        style={{
          width:'200px',
          height:'400px'
        }}
          className="d-block w-100"
          src="https://s3no.cashify.in/cashify/web/00c6d781009c44a28bceb43ed3645fdc.webp?p=default&s=lg"
          alt="Third slide"
        />
        
          
        
      </Carousel.Item>
      <Carousel.Item className='slides'>
        <img
        style={{
          width:'200px',
          height:'400px'
        }}
          className="d-block w-100"
          src="https://images.pexels.com/photos/341523/pexels-photo-341523.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt="Third slide"
        />
        
          
        
      </Carousel.Item>
      <Carousel.Item className='slides'>
        <img
        style={{
          width:'200px',
          height:'400px'
        }}
          className="d-block w-100"
          src="https://images.pexels.com/photos/341523/pexels-photo-341523.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt="Third slide"
        />
        
          
        
      </Carousel.Item>
    </Carousel>
  );
}

export default DarkVariantExample;