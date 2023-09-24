import { NextResponse } from "next/server";

import prisma from "@/app/libs/prismadb";
import getCurrentUser from "@/app/actions/getCurrentUser";

export async function POST(
  request: Request, 
) {
  const currentUser = await getCurrentUser();

  if (!currentUser) {
    return NextResponse.error();
  }

  const body = await request.json();
  const { 
    userId,
    id,
    rent,
    deposit,
    brokerage,
    createdAt,
    availability,
    bhk,
    occupancy,
    available_for,
    furnishing_status,
    property_type,
    location_area,
    contact_details,
    listing_url,
    images_url,
    original_listing,
    city
   } = body;

  Object.keys(body).forEach((value: any) => {
    if (!body[value]) {
      NextResponse.error();
    }
  });

  const listing = await prisma.listing.create({
    data: {
      userId,      
      id,
      rent,
      deposit,
      brokerage,
      createdAt,
      availability,
      bhk,
      occupancy,
      available_for,
      furnishing_status,
      property_type,
      location_area,
      contact_details,
      listing_url,
      images_url,
      original_listing,
      city,
    }
  });

  return NextResponse.json(listing);
}
