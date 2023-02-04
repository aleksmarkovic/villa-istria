import dayjs from "dayjs";

type Availability = {
  availability: string;
  date: Date;
};

const GetAvailability = (dateFrom, dateTo) =>
  fetch(`${process.env.RENTLIO_API_BASE_URL}/properties`, {
    headers: {
      apiKey: process.env.RENTLIO_API_KEY,
    },
  }).then((data) =>
    data.json().then((properties) =>
      fetch(
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
            availability.json().then((availabilityData) => availabilityData)
          )
        )
      )
    )
  );

export default async function handler(req, res) {
  const { dateFrom, dateTo } = req.query;

  let data = await GetAvailability(dateFrom, dateTo);

  return res.status(200).json(data.data);
}
