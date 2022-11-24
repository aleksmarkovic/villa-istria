type Reservation = {
  canceledAt: number;
  arrivalDate: number;
  departureDate: number;
};

const GetReservations = () =>
  fetch(`${process.env.RENTLIO_API_BASE_URL}/reservations`, {
    headers: {
      apiKey: process.env.RENTLIO_API_KEY,
    },
  }).then((data) => data.json());

export default async function handler(req, res) {
  let data = await GetReservations();
  return res.status(200).json({
    reservations: data.data
      .filter((booking: Reservation) => !booking.canceledAt)
      .map((booking: Reservation) => ({
        arrivalDate: new Date(booking.arrivalDate * 1000),
        departureDate: new Date(booking.departureDate * 1000),
      }))
      .sort((a: Reservation, b: Reservation) => a.arrivalDate - b.arrivalDate),
  });
}
