import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient();

export default function handler(req, res) {
  const result = prisma.$queryRaw`SELECT [TradeShopId]
  ,[Name]
  ,[FullAddress]
  ,[DateRemove]
  FROM [SMTTerms].[dbo].[t_TradeShops]`
  res.status(result)
}
