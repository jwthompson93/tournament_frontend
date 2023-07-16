import Nav from 'react-bootstrap/Nav';

function NavMenu() {
  const navStyling = {
    "backgroundColor": "#66645f",
    "height": "100%",
    "width": "15%"
  }

  const linkStyling = {
    "textDecoration": "none",
    "color": "white",
    "fontSize": "25px",
    "textAlign": "left"
  };

  return (
    <Nav defaultActiveKey="/" className="flex-column position-fixed" style={navStyling}>
      <Nav.Link eventKey="/" style={linkStyling}>Tournaments</Nav.Link>
    </Nav>
  );
}

export default NavMenu;