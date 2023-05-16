declare global {
  var prisma: PrismaClient | undefined;
}

import { PrismaClient } from "@prisma/client";

const client = globalThis.prisma || new PrismaClient();

if (process.env.NODE_ENV !== "production") globalThis.prisma = client;

export default client;
