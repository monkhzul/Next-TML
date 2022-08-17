import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient();

export default function Main(req, res) {
  const customer = prisma.$queryRaw`SELECT [TradeShopId],[Name],[FullAddress],[DateRemove] FROM [SMTTerms].[dbo].[t_TradeShops]`

  if (customer) {
    res.status(200).send(customer);
  } else {
    res.status(404).json({ message: "Couldn't find customer." });
    return;
  }
}
