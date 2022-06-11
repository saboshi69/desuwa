import Cors from "cors";
import Redis from "ioredis";
import type { NextApiRequest, NextApiResponse } from "next";
const cors = Cors({
  methods: ["GET", "POST", "HEAD"],
});

let redis = new Redis(`${process.env.REDIS_URL}`);

function runMiddleware(
  req: NextApiRequest,
  res: NextApiResponse,
  fn: {
    (
      req: Cors.CorsRequest,
      res: {
        statusCode?: number | undefined;
        setHeader(key: string, value: string): any;
        end(): any;
      },
      next: (err?: any) => any
    ): void;
    (arg0: any, arg1: any, arg2: (result: any) => void): void;
  }
) {
  return new Promise((resolve, reject) => {
    fn(req, res, (result) => {
      if (result instanceof Error) {
        return reject(result);
      }

      return resolve(result);
    });
  });
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  await runMiddleware(req, res, cors);
  if (req.method === "GET") {
    let count = await redis.get("count");
    count = JSON.parse(count as string);
    res.status(200).json({ count: count });
  }

  if (req.method === "POST") {
    await redis.incrby("count", req.body, (err) => {
      if (err) {
        return res.status(500).end();
      }
    });
    res.status(200).end();
  }
}
