import Dropdown from 'react-bootstrap/Dropdown';
import { NavLink } from 'react-router-dom';

// import './App.css'
function AutoCloseExample() {
  return (
    <>
      <Dropdown  className="d-inline mx-2">
        <Dropdown.Toggle className='dropdown' id="dropdown-autoclose-true">
          All
        </Dropdown.Toggle>

        <Dropdown.Menu>
          <Dropdown.Item href="#">Menu Item</Dropdown.Item>
          <Dropdown.Item href="#">Menu Item</Dropdown.Item>
          <Dropdown.Item href="#">Menu Item</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>

      <Dropdown className="d-inline mx-2" autoClose="outside">
        <Dropdown.Toggle className='dropdown' id="dropdown-autoclose-inside">
         Sell Phone
        </Dropdown.Toggle>

        <Dropdown.Menu>
          <Dropdown.Item href="#">Menu Item</Dropdown.Item>
          <Dropdown.Item href="#">Menu Item</Dropdown.Item>
          <Dropdown.Item href="#">Menu Item</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>

      <Dropdown className="d-inline mx-2" autoClose="outside">
        <Dropdown.Toggle className='dropdown' id="dropdown-autoclose-outside">
          Sell Gadget
        </Dropdown.Toggle>

        <Dropdown.Menu>
          <Dropdown.Item href="#">Menu Item</Dropdown.Item>
          <Dropdown.Item href="#">Menu Item</Dropdown.Item>
          <Dropdown.Item href="#">Menu Item</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>

       <NavLink to="buyphone">
       <Dropdown className="d-inline mx-2" autoClose={true}>
        <Dropdown.Toggle className='dropdown' id="dropdown-autoclose-false">
         Buy Phone
        </Dropdown.Toggle>

        <Dropdown.Menu>
          {/* <Dropdown.Item href="#">Menu Item</Dropdown.Item>
          <Dropdown.Item href="#">Menu Item</Dropdown.Item>
          <Dropdown.Item href="#">Menu Item</Dropdown.Item> */}
        </Dropdown.Menu>
        
      </Dropdown>
       </NavLink>
      
      <Dropdown className="d-inline mx-2" autoClose={true}>
        <Dropdown.Toggle className='dropdown' id="dropdown-autoclose-false">
          Find New Gadget
        </Dropdown.Toggle>

        <Dropdown.Menu>
          <Dropdown.Item href="#">Menu Item</Dropdown.Item>
          <Dropdown.Item href="#">Menu Item</Dropdown.Item>
          <Dropdown.Item href="#">Menu Item</Dropdown.Item>
        </Dropdown.Menu>
        
      </Dropdown>
      <NavLink to="buylaptop">
      <Dropdown className="d-inline mx-2" autoClose={true}>
        <Dropdown.Toggle className='dropdown' id="dropdown-autoclose-false">
          Buy Laptop
        </Dropdown.Toggle>

        <Dropdown.Menu>
          <Dropdown.Item href="#">Menu Item</Dropdown.Item>
          <Dropdown.Item href="#">Menu Item</Dropdown.Item>
          <Dropdown.Item href="#">Menu Item</Dropdown.Item>
        </Dropdown.Menu>
        </Dropdown>
      </NavLink>
     
        
    
      <Dropdown className="d-inline mx-2" autoClose={true}>
        <Dropdown.Toggle className='dropdown' id="dropdown-autoclose-false">
          Cashify store
        </Dropdown.Toggle>

        <Dropdown.Menu>
          <Dropdown.Item href="#">Menu Item</Dropdown.Item>
          <Dropdown.Item href="#">Menu Item</Dropdown.Item>
          <Dropdown.Item href="#">Menu Item</Dropdown.Item>
        </Dropdown.Menu>
        
      </Dropdown>
      <Dropdown className="d-inline mx-2" autoClose={true}>
        <Dropdown.Toggle className='dropdown' id="dropdown-autoclose-false">
          More
        </Dropdown.Toggle>

        <Dropdown.Menu>
          <Dropdown.Item href="#">Menu Item</Dropdown.Item>
          <Dropdown.Item href="#">Menu Item</Dropdown.Item>
          <Dropdown.Item href="#">Menu Item</Dropdown.Item>
        </Dropdown.Menu>
        
      </Dropdown>
    </>
  );
}

export default AutoCloseExample;