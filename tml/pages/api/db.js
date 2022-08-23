import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient();

export default async function db (req, res) {
  const customer = await prisma.$queryRaw`SELECT [TradeShopId],[Name],[FullAddress],[DateRemove] FROM [SMTTerms].[dbo].[t_TradeShops]`
 
  if (customer) 
    return customer
}
