import React from 'react'
import Arrow from '../assets/LeftArrow.png'
import Bookmark from '../assets/bookmark.png'
import Button from 'react-bootstrap/esm/Button'
import Accordion from 'react-bootstrap/Accordion';
import Container from 'react-bootstrap/esm/Container';


const Medinfo = () => {
  const hello = "The Med"
  return (
    <div style={{ backgroundColor:'#7BA7FC', minHeight: '100vh' }}>
    <div className='navContainer mt-4'>
        <img className="img-button" src={Arrow} alt="Arrow Button" onClick={()=>{navigate("/")}}/>
        <img className="image-button"src={Bookmark} alt="bookmark" onClick={()=>{navigate("/")}}/>
        </div>

        <div className="med">
        <img className="medpic" src="https://s3-alpha-sig.figma.com/img/dff9/0979/7d54618b3083b745b5dcab6a31fc4203?Expires=1727049600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=cBYnQO3wwg71r6gUMM-mX2NwzFYpu~UQTi9DuZY905q9MvTt7cDrImSW8gbP0bbn49cGS8zWO-48s07Ee~xZZyAID1M88lF0SSWaua3GK2yMqDaIA85alB6AOMg5XGVp7fkAlCFC7~yAt-PHG5Ig1og~Y42yJGp0hNeqmibHKNN5I~z-jfk5QM~ex2reU8RH1AGkxSt1X8ZyAbIamQTDVEv3BPEetCZzSlfsoAeKSy9EUnRixI~qQ-3xl9yN5uGhRApZ5Ds-J1TbRsdCwoFcn012KLGa6SwGcNNoVpftA~YadcjZIEOqNlI1i9OcpzSjpInPvgw28aMn88ePaW0PnA__" alt="Medication" />
        <div>
          <h1 className="med/name">Amitiptyline</h1>
          <p>Tablets - 10mg</p>
          <Button className="btn primary">Detailed View</Button>
        </div>
      </div>

        <Container className=" mt-4">


        <Accordion defaultActiveKey="0">
      <Accordion.Item eventKey="1">
        <Accordion.Header>Medication Purpose</Accordion.Header>
        <Accordion.Body>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>

    <Accordion defaultActiveKey="0" className="mt-4">
      <Accordion.Item eventKey="1">
        <Accordion.Header>Dosage & Administration</Accordion.Header>
        <Accordion.Body>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>

    <Accordion defaultActiveKey="0" className="mt-4">
      <Accordion.Item eventKey="1">
        <Accordion.Header>Side Effects</Accordion.Header>
        <Accordion.Body>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>

    <Accordion defaultActiveKey="0" className="mt-4">
      <Accordion.Item eventKey="1">
        <Accordion.Header>Interactions</Accordion.Header>
        <Accordion.Body>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>

    <Accordion defaultActiveKey="0" className="mt-4">
      <Accordion.Item eventKey="1">
        <Accordion.Header>Precautions & Warnings</Accordion.Header>
        <Accordion.Body>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>

    <Accordion defaultActiveKey="0" className="mt-4">
      <Accordion.Item eventKey="1">
        <Accordion.Header>Storage</Accordion.Header>
        <Accordion.Body>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>

    <Accordion defaultActiveKey="0" className="mt-4">
      <Accordion.Item eventKey="1">
        <Accordion.Header>Overdose Information</Accordion.Header>
        <Accordion.Body>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
        </Container>

        
        </div>

    
  
  )
}

export default Medinfo