'use client';

import dynamic from "next/dynamic";

import useCountries from "@/app/hooks/useCountries";
import { SafeUser } from "@/app/types";

import Avatar from "../Avatar";
import ListingCategory from "./ListingCategory";
import VisitOriginalPostButton from "./OriginalPost/OriginalPost";
import "./ListingInfo.css"
import Heading from "../Heading";


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
}) => {
  const { getByValue } = useCountries();

  return ( 
    <div>
      <Heading
      title = "Description"
      />
      <div className="card">
      <div className="card-content">
       {original_listing}
       </div>
       </div>
    </div>
   );
}
 
export default ListingInfo;