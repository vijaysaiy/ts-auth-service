import { Prisma, PrismaClient } from '@prisma/client';

export async function truncateTables(prisma: PrismaClient) {
  const tables = await prisma.$queryRaw<Array<{ tablename: string }>>(
    Prisma.sql`SELECT tablename FROM pg_tables WHERE schemaname='public';`,
  );

  const tableNames = tables.map((table) => `"${table.tablename}"`).join(', ');

  if (tableNames) {
    await prisma.$executeRawUnsafe(
      `TRUNCATE ${tableNames} RESTART IDENTITY CASCADE;`,
    );
  }
}
