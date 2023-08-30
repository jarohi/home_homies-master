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

  const imageUrls = [
    'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YmVhdXRpZnVsJTIwaG91c2V8ZW58MHx8MHx8fDA%3D&w=1000&q=80',
    'https://images.unsplash.com/photo-1501183638710-841dd1904471?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aG9tZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60',
    'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8aG9tZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60',
    'https://images.unsplash.com/photo-1505691723518-36a5ac3be353?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8aG9tZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60',
    'https://plus.unsplash.com/premium_photo-1676968002512-3eac82b1d847?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8aG9tZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60',
    'https://images.unsplash.com/photo-1618220179428-22790b461013?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGhvbWV8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60',
    'https://images.unsplash.com/photo-1484154218962-a197022b5858?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGhvbWV8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60',
  ]
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