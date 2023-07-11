import type { NextApiRequest, NextApiResponse } from "next";

const prinitifyApiKey =
  "eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiIzN2Q0YmQzMDM1ZmUxMWU5YTgwM2FiN2VlYjNjY2M5NyIsImp0aSI6IjY4YWM5ZWIyOTFhN2ZkYjRhZjg1ZGM4NTIzMjA5N2YxM2FkYzk4ODViMjgyNTZlNzUyNmU3M2NlNmY1OTNhNmIwZGRjZTlkMTUzZmJjYWMwIiwiaWF0IjoxNjg4MDA4ODgyLjM4MDg1NSwibmJmIjoxNjg4MDA4ODgyLjM4MDg1OSwiZXhwIjoxNzE5NjMxMjgyLjM3NDY2NCwic3ViIjoiOTQ2OTM3NyIsInNjb3BlcyI6WyJzaG9wcy5tYW5hZ2UiLCJzaG9wcy5yZWFkIiwiY2F0YWxvZy5yZWFkIiwib3JkZXJzLnJlYWQiLCJvcmRlcnMud3JpdGUiLCJwcm9kdWN0cy5yZWFkIiwicHJvZHVjdHMud3JpdGUiLCJ3ZWJob29rcy5yZWFkIiwid2ViaG9va3Mud3JpdGUiLCJ1cGxvYWRzLnJlYWQiLCJ1cGxvYWRzLndyaXRlIiwicHJpbnRfcHJvdmlkZXJzLnJlYWQiXX0.AQpPZnEFVkq2poah2KdnKfi7lD0aMEyPBbIEHxJhb4pjqj8XcanQCNFGYc8kwbIJHV1-sg9eLBENv1NeN70";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<any>
) {
  const body = JSON.parse(req.body);
  try {
    const result = await fetch(
      `https://api.printify.com/v1/catalog/blueprints/${body.blueprint_id}/print_providers/${body.print_provider_id}/shipping.json`,
      {
        headers: {
          Authorization: `Bearer ${prinitifyApiKey}`,
        },
      }
    );
    const json = await result.json();
    res.status(200).json(json);
  } catch (error: any) {
    res.status(500).json({ error: error.message });
  }
}
