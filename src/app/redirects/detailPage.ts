import { NextApiRequest, NextApiResponse } from "next";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const { id } = req.query;

  res.writeHead(307, { location: `/movie-detail/${id}` });
  res.end();
}