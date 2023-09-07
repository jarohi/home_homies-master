'use client';

import { Range } from "react-date-range";

import Button from "../../Button";
import Calendar from "../../inputs/Calendar";

import "./AISummary.css"

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
    <tr>
      <th>Rent</th>
      <th>Deposit</th>
    </tr>
    <tr>
  <td>{rent}</td>
  <td>{deposit}</td>
    </tr>
    <tr>
      <th>Brokerage</th>
      <th>Number of rooms</th>
    </tr>
    <tr>
  <td>{brokerage}</td>
  <td>{numberOfRooms}</td>
    </tr>
    <tr>
      <th>Preferred Tenants</th>
      <th>Posession</th>
    </tr>
    <tr>
  <td>{preferredTenants}</td>
<td>{possession?.toString()}</td>
    </tr>
    <tr>
      <th>Property Type</th>
      <th>Contact Details</th>
    </tr>
    <tr>
  <td>{propertyType}</td>
  <td>{contactDetails}</td>
    </tr>
  </table>
      
      {/* <div className="flex flex-row items-center gap-1 p-4">
        <div className="text-2xl font-semibold">
          $ {price}
        </div>
        <div className="font-light text-neutral-600">
          night
        </div>
      </div>
      <hr /> */}
      
      {/* <Calendar
        value={dateRange}
        disabledDates={disabledDates}
        onChange={(value) => 
          onChangeDate(value.selection)}
      />
      <hr />
      <div className="p-4">
        <Button 
          disabled={disabled} 
          label="Reserve" 
          onClick={onSubmit}
        />
      </div>
      <hr />
      <div 
        className="
          p-4 
          flex 
          flex-row 
          items-center 
          justify-between
          font-semibold
          text-lg
        "
      >
        <div>
          Total
        </div>
        <div>
          $ {totalPrice}
        </div>
      </div> */}
    </div>
   );
}
 
export default AISummary;