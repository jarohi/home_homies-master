'use client';

import useCountries from "@/app/hooks/useCountries";
import { SafeUser } from "@/app/types";

import Heading from "../Heading";
import HeartButton from "../HeartButton";
import ImageCollage from "../ImageCollage/ImageCollage";

function capitalizeWords(str: string) {
  return str
    .split(' ')
    .map((word: string) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
}

interface ListingHeadProps {
  bhk: number | null;
  rent: number | null;
  images_url: string | null;
  id: string;
  currentUser?: SafeUser | null;
  location_type: String | null;
}

const ListingHead: React.FC<ListingHeadProps> = ({
  bhk,
  rent,
  images_url,
  id,
  currentUser,
  location_type
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
  console.log('images_url  after replace', imageUrls );
  
  
  return ( 
    <>
      <Heading
        title={`Occupancy in ${bhk?.toString()} bhk ${capitalizedLocation}`}
      />
      <div className="
          w-full
          h-[40vh]
          overflow-hidden 
          rounded-xl
          relative
        "
      >
        {/* <Image
          src={images_url}
          fill
          className="object-cover w-full"
          alt="Image"
        /> */}
        <ImageCollage images={imageUrls} />


        <div
          className="
            absolute
            top-5
            right-5
          "
        >
        </div>
      </div>


    </>
   );
}
 
export default ListingHead;