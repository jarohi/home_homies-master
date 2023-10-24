import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './AISummary.css';

import {
  faBed,
  faBuilding,
  faHouse,
  faKey,
  faMoneyBillTrendUp,
  faPersonShelter,
  faPhone,
  faRestroom,
} from '@fortawesome/free-solid-svg-icons';

interface AISummaryProps {
  rent: number | null;
  deposit: number | null;
  brokerage: string | null;
  numberOfRooms: number | null;
  preferredTenants: string | null;
  possession: Date | null;
  propertyType: string | null;
  contactDetails: string | null;
  
}

const AISummary: React.FC<AISummaryProps> = ({
  rent,
  deposit,
  brokerage,
  numberOfRooms,
  preferredTenants,
  possession,
  propertyType,
  contactDetails,
}) => {
  return (
    <div
      className="
        bg-white
        rounded-xl
        border-[1px]
        border-neutral-200
        overflow-hidden
      "
    >
      <table className="property-table">
      <tr>
        {(rent !== null) && (
          
            <td className="table-cell">
              <span className="icon-container">
                <FontAwesomeIcon icon={faHouse} className="icon" />
                <span className="title">Rent</span>
                <div className="value">{rent}</div>
              </span>
            </td>
          
        )}
        {(deposit !== null) && (
         
            <td className="table-cell">
              <span className="icon-container">
                <FontAwesomeIcon icon={faMoneyBillTrendUp} className="icon" />
                <span className="title">Deposit</span>
                <div className="value">{deposit}</div>
              </span>
            </td>
          
        )}
        </tr>
        <tr>
        {(brokerage !== null && brokerage?.toUpperCase() !== 'NULL') && (
         
            <td className="table-cell">
              <span className="icon-container">
                <FontAwesomeIcon icon={faPersonShelter} className="icon" />
                <span className="title">Brokerage</span>
                <div className="value">{brokerage.toUpperCase()}</div>
              </span>
            </td>
          
        )}
        {(numberOfRooms !== null) && (
    
            <td className="table-cell">
              <span className="icon-container">
                <FontAwesomeIcon icon={faBed} className="icon" />
                <span className="title">Number of rooms</span>
                <div className="value">{numberOfRooms}</div>
              </span>
            </td>
        )}
        </tr>
        <tr>
        {(preferredTenants !== null && preferredTenants?.toUpperCase() !== 'NULL') && (
          
            <td className="table-cell">
              <span className="icon-container">
                <FontAwesomeIcon icon={faRestroom} className="icon" />
                <span className="title">Preferred Tenants</span>
                <div className="value">{preferredTenants.toUpperCase()}</div>
              </span>
            </td>
        
        )}
        {(possession !== null) && (
      
            <td className="table-cell">
              <span className="icon-container">
                <FontAwesomeIcon icon={faKey} className="icon" />
                <span className="title">Possession</span>
                <div className="value">{possession?.toString()}</div>
              </span>
            </td>
        
        )}
          </tr>
          <tr>
        {(propertyType !== null && propertyType?.toUpperCase() !== 'NULL') && (
          
            <td className="table-cell">
              <span className="icon-container">
                <FontAwesomeIcon icon={faBuilding} className="icon" />
                <span className="title">Property Type</span>
                <div className="value">{propertyType.toUpperCase()}</div>
              </span>
            </td>
   
        )}
        {(contactDetails !== null && contactDetails?.toUpperCase() !== 'NULL') && (
     
            <td className="table-cell">
              <span className="icon-container">
                <FontAwesomeIcon icon={faPhone} className="icon" />
                <span className="title">Contact Details</span>
                <div className="value">{contactDetails.toUpperCase()}</div>
              </span>
            </td>
       
        )}
           </tr>
      </table>
    </div>
  );
};

export default AISummary;
