'use client';

import useCountries from "@/app/hooks/useCountries";
import { SafeUser } from "@/app/types";

import Heading from "../Heading";
import HeartButton from "../HeartButton";
import ImageCollage from "../ImageCollage/ImageCollage";
import AISummary from "./AISummary/AISummary";
import VisitOriginalPostButton from "./OriginalPost/OriginalPost";
import "./ListingHead.css"
import { ReactPhotoCollage } from "react-photo-collage";

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

  // console.log('images_url  before replace',images_url );
  // images_url !== null? images_url?.replace(/[{}]/g, ''): ""; // Remove curly braces
  // console.log('images_url  after replace', images_url );
  let imageUrls = (images_url !== "" && images_url !== null)? images_url.split(","): [];
  console.log('images_url after split', imageUrls);
  imageUrls = imageUrls.map( image => image.replace(/{|}/g, ''));
  let photos = imageUrls.map(image => {return {source: image}})
  console.log('images_url  after replace', imageUrls );
  

  const setting = {
    width: '600px',
    height: ['250px', '170px'],
    layout: [1, 3],
    photos: photos,
    showNumOfRemainingPhotos: true
  };
  
  return ( 
    <>
      <Heading
        title={`Occupancy in ${bhk?.toString()} bhk ${capitalizedLocation}`}
      />
      <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
      <div className="
          order-first
          md:col-span-3
          w-full
          overflow-hidden 
          relative
        "
      >
         {window.innerWidth <= 600 ? (
            // Display slider for screens less than or equal to 600px
            <ImageCollage images={imageUrls} />
          ) : (
            // Display collage for screens greater than 600px
            <ReactPhotoCollage {...setting} />
          )}
          {/* <ImageCollage images={imageUrls} /> */}
          {/* <ReactPhotoCollage {...setting} /> */}
        </div>
        <div 
              className="
                 
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