'use client';

import dynamic from "next/dynamic";

// import useCountries from "@/app/hooks/useCountries";
import { SafeUser } from "@/app/types";

import Avatar from "../Avatar";
import ListingCategory from "./ListingCategory";
import VisitOriginalPostButton from "./OriginalPost/OriginalPost";

const Map = dynamic(() => import('../Map'), { 
  ssr: false 
});

interface ListingInfoProps {
  user: SafeUser,
  rent: number|null,
  deposit: number|null,
  brokerage: String|null,
  original_listing: string|null,
  originalPostUrl: string|null

  // locationValue: string;
}

const ListingInfo: React.FC<ListingInfoProps> = ({
  user,
  rent,
  deposit,
  brokerage,
  original_listing,
  originalPostUrl
  // locationValue,
}) => {
  // const { getByValue } = useCountries();

  // const coordinates = getByValue(locationValue)?.latlng

  return ( 
    <div className="col-span-4 flex flex-col gap-8">
      <div className="app">
        { (originalPostUrl != null) &&
      <VisitOriginalPostButton url={originalPostUrl} />
        }
      </div>
      {/* <div className="flex flex-col gap-2">
        <div 
          className="
            text-xl 
            font-semibold 
            flex 
            flex-row 
            items-center
            gap-2
          "
        >
          <div>Posted by {user?.name}</div>
          <Avatar src={user?.image} />
        </div>
        <div className="
            flex 
            flex-row 
            items-center 
            gap-4 
            font-light
            text-neutral-500
          "
        >
          <div>
           Rent: {rent} 
          </div>
          <div>
           Deposit: {deposit}
          </div>
          <div>
           Brokerage {brokerage}
          </div>
        </div>
      </div> */}
      <hr />
       {original_listing}
      <hr />
      {/* <Map center={coordinates} /> */}
    </div>
   );
}
 
export default ListingInfo;