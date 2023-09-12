  'use client';

  import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

  import "./AISummary.css"
  import { faBed, faBuilding, faHouse, faKey, faMoneyBillTrendUp, faPersonShelter, faPhone, faRestroom } from '@fortawesome/free-solid-svg-icons';

interface AISummaryProps {
  rent: number|null;
  deposit: number|null;
  brokerage: String|null;
  numberOfRooms: number|null;
  preferredTenants: String|null;
  possession: Date|null;
  propertyType: String|null;
  contactDetails: String|null;
}

  const AISummary: React.FC<
    AISummaryProps
  > = ({
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
    { (rent!==null ) && 
      <tr> 
        <th><FontAwesomeIcon icon={faHouse} className="icon"  />Rent</th>
        <th>{rent}</th>
      </tr>
  }
  { (deposit!==null) &&
      <tr>
    <td><FontAwesomeIcon icon={faMoneyBillTrendUp} className="icon"  />Deposit</td>
    <td>{deposit}</td>
      </tr>
  }
  { (brokerage!=null && brokerage?.toUpperCase()!=="NULL") &&
      <tr>
        <th><FontAwesomeIcon icon={faPersonShelter} className="icon" />Brokerage</th>
        <th>{brokerage.toUpperCase()}</th>
      </tr>
  }
  { (numberOfRooms!=null ) &&
      <tr>
    <td><FontAwesomeIcon icon={faBed} className="icon"  />Number of rooms</td>
    <td>{numberOfRooms}</td>
      </tr>
  }
  { (preferredTenants!=null && preferredTenants?.toUpperCase()!=="NULL") &&
      <tr>
        <th><FontAwesomeIcon icon={faRestroom} className="icon" />Preferred Tenants</th>
        <th>{preferredTenants.toUpperCase()}</th>
      </tr>
  }
  { (possession!=null) &&
      <tr>
    <td><FontAwesomeIcon icon={faKey} className="icon" />Possesion</td>
  <td>{possession?.toString()}</td>
      </tr>
  }
  { (propertyType!=null && propertyType?.toUpperCase()!=="NULL") &&
      <tr>
        <th><FontAwesomeIcon icon={faBuilding} className="icon"/>Property Type</th>
        <th>{propertyType.toUpperCase()}</th>
      </tr>
  }
      { (contactDetails!=null && contactDetails?.toUpperCase()!=="NULL") &&
      <tr>
    <td><FontAwesomeIcon icon={faPhone} className="icon"/>Contact Details</td>
    <td>{contactDetails.toUpperCase()}</td>
      </tr>
    }
    </table>
      </div>
    );
  }
  
  export default AISummary;