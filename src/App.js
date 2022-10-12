import {React, useState} from "react";
import axios from 'axios';

import { Button, Modal } from 'antd';
import { Input, message} from 'antd';

import "./scss/app.scss";

const { Search } = Input;

// 44:38:39:ff:ef:57
// 38:A8:BB:27:46:11

const val =  {
  "vendorDetails": {
      "oui": "443839",
      "isPrivate": false,
      "companyName": "Cumulus Networks, Inc",
      "companyAddress": "650 Castro Street, suite 120-245 Mountain View CA 94041 US",
      "countryCode": "US"
  },
  "blockDetails": {
      "blockFound": true,
      "borderLeft": "443839000000",
      "borderRight": "443839FFFFFF",
      "blockSize": 16777216,
      "assignmentBlockSize": "MA-L",
      "dateCreated": "2012-04-08",
      "dateUpdated": "2015-09-27"
  },
  "macAddressDetails": {
      "searchTerm": "44:38:39:ff:ef:57",
      "isValid": true,
      "virtualMachine": "Not detected",
      "applications": [
          "Multi-Chassis Link Aggregation (Cumulus Linux)"
      ],
      "transmissionType": "unicast",
      "administrationType": "UAA",
      "wiresharkNotes": "No details",
      "comment": ""
  }
};


const baseURL = "https://api.macaddress.io/v1?apiKey=at_CPrSgvLUQecKIvBNiZPSPxwzIkIZH&output=json&search="

function App() {
  const [mac, setMac] = useState(null);
  const [oldmac, setOldmac] = useState(0);
  // const [response, setResponse] = useState(null);
  const [response, setResponse] = useState(val);
  const [querySuccess, setQuerySuccess] = useState(false);

  const re = /^[0-9a-f]{1,2}([.:-])[0-9a-f]{1,2}(?:\1[0-9a-f]{1,2}){4}$/i;

  const error = () => {
    message.error('Invalid MAC address format');
  };

  const onSearch = () => {
    if(! re.test(mac)){
      error();
      return;
    }
    if(!(oldmac === mac)){
      setOldmac(mac);

      axios.get(`${baseURL}${mac}`).then((res) => {
        setResponse(res.data);
        console.log(res.data);
       setQuerySuccess(true);
      }).catch(error => {
        setQuerySuccess(false);
      });

      setQuerySuccess(false);
      console.log(mac);


// 
// 
// 
      // setQuerySuccess(false);
      // setQuerySuccess(true);
      // console.log(mac);

    }

  }
  return (
    <div className="app">
      <header>
        <h1>MAC address validator</h1>
        <About/>
        <h5>Enter a device MAC address to check it's validity and vendor details.</h5>
      </header>
      <Search
        placeholder="Eg- 44:38:39:ff:ef:57"
        allowClear
        enterButton="Search"
        size="large"
        onSearch={onSearch}
        onChange={(e)=>setMac(e.target.value)}
      />

      {
        querySuccess ? <Details props={response} /> : null
      }
      
    </div>
  ); 
}

function Details(props){
  const {vendorDetails, blockDetails, macAddressDetails} = props.props;
  console.log(vendorDetails);

  if(vendorDetails.companyName.length > 0){
    return(
      <section className="details">
        <h3>Device details</h3>
        <div className="content">

        <div className="left">
          <h5>Vendor details:</h5>
          <div className="obj">
            <h6>OUI: <span>{vendorDetails.oui}</span></h6>
          </div>
          <div className="obj">
            <h6>Company name: <span>{vendorDetails.companyName}</span></h6>
          </div>
          <div className="obj">
            <h6>Company address: <span>{vendorDetails.companyAddress}</span></h6>
          </div>
          <div className="obj">
            <h6>Country code: <span>{vendorDetails.countryCode}</span></h6>
          </div>
        </div>
        
        
        <div className="right">
        <h5>MAC address details:</h5>
          <div className="obj">
            <h6>Valid address: <span>{macAddressDetails.isValid ? "Yes" : "No"}</span></h6>
          </div>
          <div className="obj">
            <h6>Transmission type: <span>{macAddressDetails.transmissionType}</span></h6>
          </div>
          <div className="obj">
            <h6>Virtual machine: <span>{macAddressDetails.virtualMachine}</span></h6>
          </div>
          <div className="obj">
            <h6>Date created: <span>{blockDetails.dateCreated}</span></h6>
          </div>
          <div className="obj">
            <h6>Date updated: <span>{blockDetails.dateUpdated}</span></h6>
          </div>
        </div>
        </div>
        
      </section>
    );
  }
  else{
    return(
      <section className="error">
        <h3>The entered MAC address is invalid!</h3>
        {
          (vendorDetails.companyName.length > 0) ? 
            <>
              <h5>Possible vendor details:</h5>
              <div className="obj">
                <h6>OUI: <span>{vendorDetails.oui}</span></h6>
              </div>
              <div className="obj">
                <h6>Company name: <span>{vendorDetails.companyName}</span></h6>
              </div>
              <div className="obj">
                <h6>Company address: <span>{vendorDetails.companyAddress}</span></h6>
              </div>
              <div className="obj">
                <h6>Country code: <span>{vendorDetails.countryCode}</span></h6>
              </div>
            </>
          : null
        }
      </section>
    );
  }

}


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
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit earum fuga labore quia ipsa voluptatum ad dignissimos, quas tempore. Eligendi quos veritatis necessitatibus nihil assumenda impedit quas autem laudantium in velit corrupti veniam eaque nobis modi aliquam dolores, totam hic vero maiores? Sed tempora blanditiis autem, minima laudantium quos ullam sint, voluptate suscipit ipsum ratione ipsam natus incidunt numquam illum earum veniam. Dolore soluta quis quod? Quae cumque aut temporibus rerum, expedita dolor molestiae. Beatae nihil atque velit quisquam quia sunt? Adipisci dolores ullam eos. Molestias nulla eius est illo expedita assumenda perferendis enim ipsam ea ducimus architecto laboriosam earum, quaerat nam excepturi neque rerum esse vero. Pariatur debitis magni quaerat, officia blanditiis, ipsa aliquam quibusdam dolores libero suscipit ipsam tempore laudantium velit tenetur in minus iure, corrupti quas ea illo ex. Id eius dignissimos architecto corporis distinctio ipsa, nostrum excepturi velit, molestias a nam asperiores inventore reprehenderit unde debitis. Eos officiis odio dolorum tenetur quae totam minus officia vitae praesentium deleniti dolores, nobis magni debitis harum itaque quos inventore sint, repellendus unde incidunt eaque culpa possimus natus. Temporibus sunt corrupti sed odio facilis dolorum quibusdam quam voluptatibus sint nisi odit accusantium ex provident, eum doloribus quasi tenetur cupiditate perferendis?</p>
      </Modal>
    </>
  );
}

export default App;
