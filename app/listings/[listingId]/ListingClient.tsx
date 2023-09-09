'use client';

import { useCallback, useEffect, useMemo, useState } from "react";
import { Range } from "react-date-range";
import { useRouter } from "next/navigation";
import { differenceInDays, eachDayOfInterval } from 'date-fns';

import useLoginModal from "@/app/hooks/useLoginModal";
import { SafeListing, SafeReservation, SafeUser } from "@/app/types";

import Container from "@/app/components/Container";
import { categories } from "@/app/components/navbar/Categories";
import ListingHead from "@/app/components/listings/ListingHead";
import ListingInfo from "@/app/components/listings/ListingInfo";
import AISummary from "@/app/components/listings/AISummary/AISummary";
import { listing } from "@prisma/client";

const initialDateRange = {
  startDate: new Date(),
  endDate: new Date(),
  key: 'selection'
};

interface ListingClientProps {
  reservations?: SafeReservation[];
  listing: listing & {
    user: SafeUser;
  };
  currentUser?: SafeUser | null;
}

const ListingClient: React.FC<ListingClientProps> = ({
  listing,
  reservations = [],
  currentUser
}) => {
  const loginModal = useLoginModal();
  const router = useRouter();

  const disabledDates = useMemo(() => {
    let dates: Date[] = [];

    reservations.forEach((reservation: any) => {
      const range = eachDayOfInterval({
        start: new Date(reservation.startDate),
        end: new Date(reservation.endDate)
      });

      dates = [...dates, ...range];
    });

    return dates;
  }, [reservations]);

  const category = useMemo(() => {
     return categories.find((items) => 
      items.label === listing.property_type);
  }, [listing.property_type]);

  const [isLoading, setIsLoading] = useState(false);
  const [totalPrice, setTotalPrice] = useState(listing.rent);
  const [dateRange, setDateRange] = useState<Range>(initialDateRange);

 

  useEffect(() => {
    if (dateRange.startDate && dateRange.endDate) {
      const dayCount = differenceInDays(
        dateRange.endDate, 
        dateRange.startDate
      );
      
      if (dayCount && listing.rent) {
        setTotalPrice(dayCount * listing.rent);
      } else {
        setTotalPrice(listing.rent);
      }
    }
  }, [dateRange, listing.rent]);

  return ( 
    <Container>
      <div 
        className="
          max-w-screen-lg 
          mx-auto
        "
      >
        <div className="flex flex-col gap-6">
          <ListingHead
            bhk={listing.bhk}
            images_url={listing.images_url}
            rent={listing.rent}
            // locationValue={listing.locationValue}
            id={listing.id}
            currentUser={currentUser}
            location_type={listing.location_area}
          />
          <div 
            className="
              grid 
              grid-cols-1 
              md:grid-cols-7 
              md:gap-10 
              mt-6
            "
          >
            <ListingInfo
              user={listing.user}
              original_listing={listing.original_listing}
              rent={listing.rent}
              deposit={listing.deposit}
              brokerage={listing.brokerage}
              originalPostUrl={listing.listing_url}
            />
            <div 
              className="
                order-first 
                mb-10 
                md:order-last 
                md:col-span-3
              "
            >
              <AISummary
                rent={listing.rent}
                deposit={listing.deposit}
                brokerage={listing.brokerage}
                numberOfRooms={listing.bhk}
                preferredTenants={listing.available_for}
                possession={listing.availability}
                propertyType={listing.property_type}
                contactDetails={listing.contact_details   
                }
              />
            </div>
          </div>
        </div>
      </div>
    </Container>
   );
}
 
export default ListingClient;
