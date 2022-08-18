import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient();

export const Main = async (req, res) => {
  const customer = await prisma.$queryRaw`SELECT [TradeShopId],[Name],[FullAddress],[DateRemove] FROM [SMTTerms].[dbo].[t_TradeShops]`

 return customer
}
