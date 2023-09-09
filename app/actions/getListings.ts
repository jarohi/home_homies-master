import prisma from "@/app/libs/prismadb";

export interface IListingsParams {
  userId?: string;
  rent?: number[] | null;
  deposit?: number | null;
  brokerge?: string;
  createdAt?: Date | null;
  availability?: Date | null;
  bhk?: string[] | null;
  occupancy?: string;
  available_for?: string;
  furnishing_status?: string;
  property_type?: string;
  location_area?: string;
}

export default async function getListings(
  params: IListingsParams
) {
  try {
    const {
      userId,
      rent, 
      brokerge,
      bhk
    } = params;

    let query: any = {};

    if (userId) {
      query.userId = userId;
    }

    if (rent) {
      query.rent = {
        lte: +rent[1],
        gte: +rent[0]
      };
      console.log('query rent', query.rent);
    } 

    if (brokerge) {
      query.brokerge = {
        lte: +brokerge
      }
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

    const listings = await prisma.post.findMany({
      where: query,
      // orderBy: {
      //   createdAt: 'desc'
      // }
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
