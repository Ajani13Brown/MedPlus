import React from 'react'
import Arrow from '../assets/LeftArrow.png'
import Bookmark from '../assets/bookmark.png'
import Button from 'react-bootstrap/esm/Button'
import Accordion from 'react-bootstrap/Accordion';
import Container from 'react-bootstrap/esm/Container';
import { useNavigate } from 'react-router-dom';
import Med from '../assets/amitriptyline.png'


const Medinfo = () => {
  const navigate = useNavigate()
  return (
    <div style={{  backgroundColor: '#7BA7FC', minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
    <div className='navContainer mt-4'>
        <img className="img-button" src={Arrow} alt="Arrow Button" onClick={()=>{navigate("/")}}/>
        <img className="image-button"src={Bookmark} alt="bookmark" onClick={()=>{navigate("/")}}/>
        </div>

        <div className="med">
        <img className="medpic" src={Med} alt="Medication" />
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
        Amitriptyline is prescribed for the treatment of chronic depression and to help manage generalized anxiety disorder. It is also indicated for the relief of chronic pain, particularly in patients suffering from migraines and neuropathic pain.
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>

    <Accordion defaultActiveKey="0" className="mt-4">
      <Accordion.Item eventKey="1">
        <Accordion.Header>Dosage & Administration</Accordion.Header>
        <Accordion.Body>
        The prescribed dosage is 1 tablet (25 mg) taken twice a day—once in the morning after breakfast and once at bedtime. It is important to take the medication after meals to reduce the risk of stomach upset. Follow your healthcare provider’s instructions for any adjustments to this regimen.
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>

    <Accordion defaultActiveKey="0" className="mt-4">
      <Accordion.Item eventKey="1">
        <Accordion.Header>Side Effects</Accordion.Header>
        <Accordion.Body>
        Common side effects include drowsiness, dry mouth, dizziness, blurred vision, constipation, and weight gain. If you experience severe side effects such as chest pain, rapid heart rate, or any signs of an allergic reaction (like rash, itching, or swelling), seek medical attention promptly.

        </Accordion.Body>
      </Accordion.Item>
    </Accordion>

    <Accordion defaultActiveKey="0" className="mt-4">
      <Accordion.Item eventKey="1">
        <Accordion.Header>Interactions</Accordion.Header>
        <Accordion.Body>
        Inform your healthcare provider about all medications you are currently taking, including over-the-counter drugs and supplements. Amitriptyline may interact with other antidepressants, blood thinners, and medications for heart conditions, potentially leading to serious side effects.
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>

    <Accordion defaultActiveKey="0" className="mt-4">
      <Accordion.Item eventKey="1">
        <Accordion.Header>Precautions & Warnings</Accordion.Header>
        <Accordion.Body>
        Use caution when operating heavy machinery or driving, as Amitriptyline can cause drowsiness. Avoid alcohol, which can increase sedation and other side effects. This medication is not recommended for individuals with a history of heart problems or those who are pregnant or breastfeeding without consulting a healthcare provider.
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>

    <Accordion defaultActiveKey="0" className="mt-4">
      <Accordion.Item eventKey="1">
        <Accordion.Header>Storage</Accordion.Header>
        <Accordion.Body>
        Store Amitriptyline at room temperature, away from moisture and heat. Keep the medication in its original container and out of reach of children and pets to prevent accidental ingestion.

        </Accordion.Body>
      </Accordion.Item>
    </Accordion>

    <Accordion defaultActiveKey="0" className="mt-4">
      <Accordion.Item eventKey="1">
        <Accordion.Header>Overdose Information</Accordion.Header>
        <Accordion.Body>
        In case of overdose, seek immediate medical attention or contact a poison control center. Symptoms of overdose may include severe drowsiness, confusion, rapid heartbeat, and in severe cases, coma. Do not attempt to treat an overdose at home.
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
        </Container>

        
        </div>

    
  
  )
}

export default Medinfo