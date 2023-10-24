'use client';

import Image from "next/image";
import { useRouter } from "next/navigation";
import React,{ useCallback, useMemo, useState } from "react";
import { format } from 'date-fns';

import useCountries from "@/app/hooks/useCountries";
import { 
  SafeListing, 
  SafeReservation, 
  SafeUser 
} from "@/app/types";

import HeartButton from "../HeartButton";
import Button from "../Button";
import ClientOnly from "../ClientOnly";

interface ListingCardProps {
  data: SafeListing;
  reservation?: SafeReservation;
  onAction?: (id: string) => void;
  disabled?: boolean;
  actionLabel?: string;
  actionId?: string;
  currentUser?: SafeUser | null
};

const ListingCard: React.FC<ListingCardProps> = ({
  data,
  reservation,
  onAction,
  disabled,
  actionLabel,
  actionId = '',
  currentUser,
}) => {
  const router = useRouter();
  const { getByValue } = useCountries();

  // const location = getByValue(data.locationValue);

  const location = useMemo(() => {
    if (data.location_area) {
      return data.location_area;
    }

    return "";
  }, [data.location_area]);

  const handleCancel = useCallback(
    (e: React.MouseEvent<HTMLButtonElement>) => { 
    e.stopPropagation();

    if (disabled) {
      return;
    }

    onAction?.(actionId)
  }, [disabled, onAction, actionId]);

  const price = useMemo(() => {
    if (reservation) {
      return reservation.totalPrice;
    }

    return data.rent;
  }, [reservation, data.rent]);

  // const reservationDate = useMemo(() => {
  //   if (!reservation) {
  //     return null;
  //   }
  
  //   const start = new Date(reservation.startDate);
  //   const end = new Date(reservation.endDate);

  //   return `${format(start, 'PP')} - ${format(end, 'PP')}`;
  // }, [reservation]);

  function capitalizeWords(str: string) {
    return str
      .split(' ')
      .map((word: string) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ');
  }
  
  const capitalizedLocation = capitalizeWords(location);
  const sanitizedImages  = data.images_url?.replace(/[{}]/g, ''); // Remove curly braces
  const imageUrls = sanitizedImages?.split(",");
  const displayImage = Array.isArray(imageUrls) && imageUrls.length > 0 ? imageUrls[0] : "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YmVhdXRpZnVsJTIwaG91c2V8ZW58MHx8MHx8fDA%3D&w=1000&q=80";
  
  const [imageError, setImageError] = useState(false);

  const handleImageError = () => {
    setImageError(true);
  };

  return (
    <div  style={{ display: imageError ? 'none' : 'block' }}>
    {imageError ? null : (
    <div 
      onClick={() => router.push(`/listings/${data.id}`)} 
      className="col-span-1 cursor-pointer group"
    >
      <div className="flex flex-col gap-2 w-full">
        <div 
          className="
            aspect-square 
            w-full
            relative 
            overflow-hidden 
            rounded-xl
          "
        >
          <Image
            fill
            className="
              object-cover 
              h-full 
              w-full 
              group-hover:scale-110 
              transition
            "
            src={displayImage}
            alt="Listing"
            onError={handleImageError}
          />
          <div className="
            absolute
            top-3
            right-3
          ">
            <HeartButton 
              listingId={data.id} 
              currentUser={currentUser}
            />
          </div>
        </div>
        <div className="font-semibold text-lg">
          {/* {location?.region}, {location?.label} */}
          {capitalizedLocation}
        </div>
        {/* <div className="font-light text-neutral-500">
          {reservationDate || data.property_type}
        </div> */}
        <div className="flex flex-row items-center gap-1">
          <div className="font-semibold">
             ₹ {price}
          </div>
          {!reservation && (
            <div className="font-light">/ month</div>
          )}
        </div>
        {onAction && actionLabel && (
          <Button
            disabled={disabled}
            small
            label={actionLabel} 
            onClick={handleCancel}
          />
        )}
      </div>
    </div>
    )}
    </div>
   );
}
 
export default ListingCard;