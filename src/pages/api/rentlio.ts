import dayjs from "dayjs";
import type { NextApiRequest, NextApiResponse } from "next";

interface Reservation {
  availability: number;
  date: string;
}

const GetAvailability = (dateFrom: string, dateTo: string): Promise<Reservation[] | null> =>
  fetch(`${process.env.RENTLIO_API_BASE_URL}/properties`, {
    headers: {
      apiKey: process.env.RENTLIO_API_KEY,
    },
  }).then((data) =>
    data.json().then((properties) => {
      if (!properties?.data?.[0]?.id) {
        return null;
      }

      return fetch(
        `${process.env.RENTLIO_API_BASE_URL}/properties/${properties.data[0].id}/unit-types`,
        {
          headers: {
            apiKey: process.env.RENTLIO_API_KEY,
          },
        }
      ).then((unitTypes) =>
        unitTypes.json().then((unitTypesData) =>
          fetch(
            `${process.env.RENTLIO_API_BASE_URL}/unit-types/${
              unitTypesData.data[0].id
            }/availability?dateFrom=${dayjs(dateFrom).format(
              "YYYY-MM-DD"
            )}&dateTo=${dayjs(dateTo).format("YYYY-MM-DD")}`,
            {
              headers: {
                apiKey: process.env.RENTLIO_API_KEY,
              },
            }
          ).then((availability) =>
            availability
              .json()
              .then((availabilityData) => availabilityData.data as Reservation[])
          )
        )
      );
    })
  );

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
): Promise<void> {
  const { dateFrom, dateTo } = req.query as { dateFrom: string; dateTo: string };

  const data = await GetAvailability(dateFrom, dateTo);

  res.status(200).json(data);
}
