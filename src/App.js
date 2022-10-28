import {React, useState} from "react";
import axios from 'axios';

import { Input, message} from 'antd';
import {LoadingOutlined} from '@ant-design/icons';

import About from "./components/About";
import Details from "./components/Details";

import "./scss/app.scss";

const { Search } = Input;

// 44:38:39:ff:ef:57
// 38:A8:BB:27:46:11


const baseURL = "https://api.macaddress.io/v1?apiKey=at_CPrSgvLUQecKIvBNiZPSPxwzIkIZH&output=json&search="


function App() {
  const [mac, setMac] = useState(null);
  const [oldmac, setOldmac] = useState(0);
  const [response, setResponse] = useState(null);
  const [querySuccess, setQuerySuccess] = useState(false);
  const [load, setLoad] = useState(false);

  // Reular expression for MAC addresses
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
      setLoad(true);
      setOldmac(mac);

      axios.get(`${baseURL}${mac}`).then((res) => {
        setLoad(false);
        setResponse(res.data);
       setQuerySuccess(true);
      }).catch(error => {
        setQuerySuccess(false);
      });

      setQuerySuccess(false);
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

      {
        load ? <LoadingOutlined style={{color: "#fff", margin: "20vh"}} /> : null
      }
      
    </div>
  ); 
}


export default App;