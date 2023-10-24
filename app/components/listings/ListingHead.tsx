'use client';

import useCountries from "@/app/hooks/useCountries";
import { SafeUser } from "@/app/types";

import Heading from "../Heading";
import HeartButton from "../HeartButton";
import ImageCollage from "../ImageCollage/ImageCollage";
import AISummary from "./AISummary/AISummary";
import VisitOriginalPostButton from "./OriginalPost/OriginalPost";
import "./ListingHead.css"

function capitalizeWords(str: string) {
  return str
    .split(' ')
    .map((word: string) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
}

interface ListingHeadProps {
  bhk: number | null;
  rent: number | null;
  deposit: number | null,
  brokerage: string | null,
  available_for: string | null,
  availability: Date | null,
  property_type: string | null,
  contact_details: string | null,
  images_url: string | null;
  id: string;
  currentUser?: SafeUser | null;
  location_type: String | null;
  originalPostUrl: string|null
}

const ListingHead: React.FC<ListingHeadProps> = ({
  bhk,
  rent,
  deposit,
  brokerage,
  available_for,
  availability,
  property_type,
  contact_details,
  images_url,
  id,
  currentUser,
  location_type,
  originalPostUrl
}) => {
  const { getByValue } = useCountries();

  const location_type_val = location_type? `in ${location_type}` : ""
  console.log('inside listing head');

  const capitalizedLocation = capitalizeWords(location_type_val);

  images_url !== null? images_url?.replace(/[{}]/g, ''): ""; // Remove curly braces
  let imageUrls = (images_url !== "" && images_url !== null)? images_url.split(","): [];
  imageUrls = imageUrls.map( image => image.replace(/{|}/g, ''))

  
  
  return ( 
    <>
      <Heading
        title={`Occupancy in ${bhk?.toString()} bhk ${capitalizedLocation}`}
      />
      <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
      <div className="
          md:col-span-3
          w-full
          h-[40vh]
          overflow-hidden 
          rounded-xl
          relative
        "
      >
        <ImageCollage images={imageUrls} />
        </div>
        <div 
              className="
                order-first 
                mb-10 
                md:order-last 
                md:col-span-2
              "
            >
              <AISummary
                rent={rent}
                deposit={deposit}
                brokerage={brokerage}
                numberOfRooms={bhk}
                preferredTenants={available_for}
                possession={availability}
                propertyType={property_type}
                contactDetails={contact_details}
              />
              <div className="original-post-url">
          { (originalPostUrl != null) &&
          <VisitOriginalPostButton url={originalPostUrl} />
         }
        </div>
            </div>
      </div>


    </>
   );
}
 
export default ListingHead;