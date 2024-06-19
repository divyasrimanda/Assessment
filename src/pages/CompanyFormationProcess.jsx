
import { FcProcess } from "react-icons/fc";
import { SlPeople } from "react-icons/sl";
import { MdSupportAgent } from "react-icons/md";
import { FcApproval } from "react-icons/fc";
import { GrDocumentText } from "react-icons/gr";
import { LiaPeopleCarrySolid } from "react-icons/lia";

function CompanyFormationProcess() {
  return (
    <div className="container">
      <h2 className="container-title">COMPANY FORMATION PROCESS</h2>
      <p className="container-desc">Incorporation of a Free Zone business at IFZA Dubai is a straightforward experience for business setup consultants. The IFZA Incorporation Process is identical for both individual and corporate shareholders, however, the supporting documents vary.</p>
      <div className="gradient-cards" id="demo01">
      <div className="card">
          <div className="container-card bg-white-box">
          <div className="doc-icon-container">
            <GrDocumentText  className="doc-icons"/>
            </div>
            <p className="card-title">DOCUMENTATION</p>
            <p className="card-description">
              Client sends the following documents:
            </p>
            <p className="card-description">
              <ul >
                <li>License Application Form</li>
                <li>Passport Copy</li>
             
                <li>Digital Passport Photo</li>
                <li> Emirates ID and Visa copy for UAE residents</li>
              </ul>
            </p>
          </div>
        </div>
     

        <div className="card">
          <div className="container-card bg-green-box">
          <div className="consult-icon-container">
            <LiaPeopleCarrySolid  className="consult-icons"/>
            </div>
            <p className="card-title"> CONSULTATION & PROPOSAL</p>
            <p className="card-description">
              Throughout this whole process of setting up your business with
              IFZA, you will be guided by our network of Professional Partners
              and by our competent and dedicated team at IFZA. First, we will
              establish your Licensee’s requirements with you over the phone, by
              email or in our office at your convenience.
            </p>
            <p className="card-description">
              Once these are established, we will share a proposal that details:
            </p>
            <p className="card-description">
              <ul >
                <li>Type of license</li>
                <li>Visa Package</li>
              
                <li> Business Activities</li>
                <li>Office solutions</li>
              </ul>
            </p>
          </div>
        </div>
      

        <div className="card">
          <div className="container-card bg-yellow-box">
            <div className="process-icon-container">
            <FcProcess className="process-icons"/>
            </div>
            <p className="card-title">PROCESSING</p>
            <p className="card-description">
              Our support team will register your shareholder’s documents on the
              registration portal.
            </p>
          </div>
        </div>
       
        <div className="card">
          <div className="container-card bg-yellow-box">
          <div className="people-icon-container">
            <SlPeople  className="people-icons"/>
            </div>
            <p className="card-title">LICENSE ISSUANCE</p>
            <p className="card-description">
            A soft copy is sent via email with the original license available for collection from our office upon request.
            </p>
          </div>
        </div>

        <div className="card">
          <div className="container-card bg-blue-box">
          <div className="agent-icon-container">
            <MdSupportAgent  className="agent-icons"/>
            </div>
            <p className="card-title">CONTINUING CLIENT SUPPORT</p>
            <p className="card-description">
              Once the license is incorporated, our team will continue to
              support and assist you should you require:
            </p>
            <p className="card-description">
              <ul >
                <li>Visa Processes</li>
                <li>Office Solutions</li>
                <li>Medical Insurance</li>
                <li>Bank Account Opening Support</li>
                <li>Bank Account Opening Support</li>
                <li>License Upgrades and Downgrades</li>
                <li>License Amendments</li>
                <li>License Renewals</li>
              </ul>
            </p>
          </div>
        </div>
        <div className="card">
          <div className="container-card bg-blue-box">
          <div className="license-icon-container">
            <FcApproval  className="license-icons"/>
            </div>
            <p className="card-title">LICENSE APPROVAL </p>
            <p className="card-description">
              Once approved, the authority will issue two forms for your digital
              signature. A soft copy is sent via email with the original License
              available for collection from our office upon request.
            </p>
          </div>
        </div>

        
      </div>
    </div>
  );
}

export default CompanyFormationProcess;
