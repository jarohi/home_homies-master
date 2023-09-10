'use client';

import useCountries from "@/app/hooks/useCountries";
import { SafeUser } from "@/app/types";

import Heading from "../Heading";
import HeartButton from "../HeartButton";
import ImageCollage from "../ImageCollage/ImageCollage";

interface ListingHeadProps {
  bhk: number;
  rent: number;
  images_url: string;
  id: string;
  currentUser?: SafeUser | null
  location_type: String;
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

  const imageUrls = images_url.split(",");
  return ( 
    <>
      <Heading
        title={`Occupancy in ${bhk?.toString()} bhk ${location_type_val}`}
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