

function Details(props){
    const {vendorDetails, blockDetails, macAddressDetails} = props.props;
    // console.log(vendorDetails);
  
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
  



export default Details;