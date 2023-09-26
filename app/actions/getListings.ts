import prisma from "@/app/libs/prismadb";

export interface IListingsParams {
  userid?: string;
  rent?: number[] | null;
  deposit?: number | null;
  brokerage?: string;
  createdAt?: Date | null;
  availability?: Date | null;
  bhk?: string[] | null;
  occupancy?: string[] | null;
  availableFor?: string[] | null;
  furnishing_status?: string;
  property_type?: string;
  location_area?: string;
  city?: string;
}

export default async function getListings(
  params: IListingsParams
) {
  try {
    const {
      userid,
      rent, 
      brokerage,
      bhk,
      occupancy,
      availableFor,
      city
    } = params;

    let query: any = {};

    if (userid) {
      query.userid = userid;
    }

    if (rent) {
      query.rent = {
        lte: +rent[1],
        gte: +rent[0]
      };
      console.log('query rent', query.rent);
    } 

    if (brokerage) {
      query.brokerage = brokerage
    }

    console.log('bhk outside if', bhk)
    if(bhk && bhk.length > 0) {
      console.log('checking if bhk is an array', Array.isArray(bhk));
      if(Array.isArray(bhk)){
      const numericBHK = bhk.map((value) => parseInt(value, 10));
      query.bhk = {
        in: numericBHK // Filter by the numeric values of 'bhk'
      };
    } else {
      query.bhk = parseInt(bhk, 10);
    }
      console.log('query bhk', query.bhk);
    }

    if(occupancy && occupancy.length > 0) {
      query.occupancy = {
        in: occupancy 
      }
    }

    if(availableFor && availableFor.length > 0 ) {
      query.available_for = {
        in: availableFor
      }
    }

    if(city) {
      query.city = city;
    }
    
    const listings = await prisma.listing.findMany({
      where: query,
      orderBy: {
        createdAt: 'desc'
      }
    });

    const safeListings = listings.map((listing) => ({
      ...listing,
      // createdAt: listing.createdAt.toISOString(),
    }));

    return safeListings;
  } catch (error: any) {
    throw new Error(error);
  }
}
