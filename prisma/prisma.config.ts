import { PrismaClientOptions } from "@prisma/client";

export const prismaConfig: PrismaClientOptions = {
  datasources: {
    db: {
      url: process.env.DATABASE_URL,
    },
  },
};
