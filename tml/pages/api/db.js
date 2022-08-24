// import { PrismaClient } from '@prisma/client'

// const prisma = new PrismaClient();

// export default async function db (req, res) {
//   const customer = await prisma.$queryRaw`SELECT [TradeShopId],[Name],[FullAddress],[DateRemove] FROM [SMTTerms].[dbo].[t_TradeShops]`
 
//   if (customer) 
//     return customer
// }

var Connection = require('tedious').Connection;  
    var config = {  
        server: '122.201.28.22',  //update me
        authentication: {
            type: 'default',
            options: {
                userName: 'munkhzul', //update me
                password: 'Zulaa0118'  //update me
            }
        },
        options: {
            // If you are on Microsoft Azure, you need encryption:
            encrypt: true,
            database: 'SMTTerms'  //update me
        }
    };  
    var connection = new Connection(config);  
    connection.on('connect', function(err) {  
        // If no error, then good to proceed.
        console.log("Connected");  
    });
    
    connection.connect();