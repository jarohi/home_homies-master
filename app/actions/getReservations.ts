import prisma from "@/app/libs/prismadb";

interface IParams {
  listingId?: string;
  userid?: string;
  authorId?: string;
}

export default async function getReservations(
  params: IParams
) {
  try {
    const { listingId, userid, authorId } = params;

    const query: any = {};
        
    if (listingId) {
      query.listingId = listingId;
    };

    if (userid) {
      query.userid = userid;
    }

    if (authorId) {
      query.listing = { userid: authorId };
    }

    const reservations = await prisma.reservation.findMany({
      where: query,
      include: {
        listing: true
      },
      orderBy: {
        createdAt: 'desc'
      }
    });

    const safeReservations = reservations.map(
      (reservation) => ({
      ...reservation,
      createdAt: reservation.createdAt?.toISOString(),
      startDate: reservation.startDate?.toISOString(),
      endDate: reservation.endDate?.toISOString(),
      listing: {
        ...reservation.listing,
        createdAt: reservation.listing?.createdAt?.toISOString(),
      },
    }));

    return safeReservations;
  } catch (error: any) {
    throw new Error(error);
  }
}
