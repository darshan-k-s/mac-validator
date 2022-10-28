import {useState} from "react";

import { Button, Modal } from 'antd';

import reg from "../assets/regex.PNG";


function About(){
    const [isModalOpen, setIsModalOpen] = useState(false);
  
    const showModal = () => {
      setIsModalOpen(true);
    };
  
    const handleOk = () => {
      setIsModalOpen(false);
    };
  
    const handleCancel = () => {
      setIsModalOpen(false);
    };
    return(
      <>
        <Button type="primary" onClick={showModal}>
          About the Project
        </Button>
        <Modal title="Computer Networks Lab - Mini Project(2022-23)" 
          open={isModalOpen} 
          onOk={handleOk} onCancel={handleCancel}
          width="80vw"
          footer={null}
          >
          <p></p>
          <p>Made by: <br/>Darshan K S and Mitul Agarwal </p>
          <br />
          <p style={{textDecoration: "underline", fontWeight: "700"}}>ABOUT:</p>
          <p>MAC Address Validator Tool searches your MAC Address or OUI in mac address vendor database. 
            The MAC Address vendor database consists of a list of mac addresses of all devices manufactured till date. 
            Finding the mac address from this database tells us which manufacturer originally manufactured this device and what is the 
            prefix, postfix of a given mac address, moreover it tells us what country was this device manufactured. All this information 
            is useful if you want to verify the generated mac address with the original vendor of this device in OUI vendor database.
            <br />
            <a href="https://www.cmu.edu/computing/services/endpoint/network-access/mac-address.html" target="_blank"
              style={{fontSize:"inherit", padding:"4px", color: "#1774ff"}}>
              How to find your MAC address?
            </a>
            </p>
          <br />
          <img src="https://images.slideplayer.com/20/5955285/slides/slide_4.jpg" alt=" " 
            style={{width: "80%", maxWidth: "600px"}}
          />

          <p style={{textDecoration: "underline", fontWeight: "700"}}>WORKING:</p>
          <p>The validatior has 2 stages of address validation. 
          <br />
          <ol>
            <li>First, we use the 
              <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions" target="_blank"
              style={{fontSize:"inherit", padding:"4px", color: "#1774ff"}}>
              regular expression
              </a>
               to match the entered address and verify the format. A MAC address is a unique identifier for network interfaces. It is a 48-bit number (12 hexadecimal characters).
               They can either be written in either of these formats:
              <ul>
                <li>MM:MM:MM:SS:SS:SS</li>
                <li>MM-MM-MM-SS-SS-SS</li>
              </ul>
              <br />
              <img src={reg} style={{width: "80%", maxWidth: "600px"}} alt="" />
            </li>
            <br />
            <li>
              After the format is right, we make an API call to 
              <a href="https://macaddress.io/api" target="_blank" style={{fontSize:"inherit", padding:"4px", color: "#1774ff"}}>macaddress.io</a>.
              They provide the service of an interface to a mac address database for all devices till date, and is configured to lookup the 
              details of the mac address entered. If the address is valid and exists, we get the manufacturer and device information. The API used 
              is important as the MAC address vendor database is protected and not available to the general public. They enable us to use the database 
              with an interface that comes with a price. 
              <br/>
              <a href="https://gist.githubusercontent.com/aallan/b4bb86db86079509e6159810ae9bd3e4/raw/846ae1b646ab0f4d646af9115e47365f4118e5f6/mac-vendor.txt" target="_blank"
              style={{fontSize:"inherit", padding:"4px", color: "#1774ff"}}>
              List of OUI and vendors.
              </a>

            </li>
          </ol>  
          </p>

        </Modal>
      </>
    );
  }



export default About;