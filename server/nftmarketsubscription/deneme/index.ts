import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

interface Transaction {
    from: string,
    to: string,
    nftId: number,
    price: number,
    transactionType: string,
    transactionHash: string,
    category: number
}

export async function connectDB(tx: Transaction) {

    const query2 = await prisma.inventory.deleteMany({
        where: {
            wallet_id: '0x144aad362af3B71d42781f8f750777B3523c500B',
            user_id : 12,
        }
    });
    if (tx.transactionType == 'Sale') {
        const query = await prisma.user_wallet.findUnique({
            where: {
                wallet_id: tx.from,
            }
        });
        if (query) {
            const userId : number = query.user_id;

            await prisma.transactions.create({
                data: {
                    transaction_hash: tx.transactionHash,
                    transaction_timestamp: new Date(Date.now()),
                    eth_amount: tx.price,
                    transaction_type: tx.transactionType,
                    buyer_wallet_id: tx.from,
                    seller_wallet_id: tx.to,
                    nft_id: tx.nftId,
                    user_id: userId,
                    item_id: tx.category,
                    wallet_id: tx.to
                },
            })
            await prisma.inventory.create({
                data: {
                    user_id: userId,
                    item_id: tx.category,
                    wallet_id: tx.to
                },
            })
        }


    }
    else {
        console.log("Auction listed");
        const query = await prisma.user_wallet.findUnique({
            where: {
                wallet_id: tx.from,
            }
        });
        if (query) {
            const userId: number = query.user_id;

            await prisma.transactions.create({
                data: {
                    transaction_hash: "tx.transactionHash",
                    transaction_timestamp: new Date(Date.now()),
                    eth_amount: tx.price,
                    transaction_type: tx.transactionType,
                    buyer_wallet_id: tx.from,
                    seller_wallet_id: tx.to,
                    nft_id: tx.nftId,
                    user_id: userId,
                    item_id: tx.category,
                    wallet_id: "0x144aad362af3B71d42781f8f750777B3523c500B"
                },
            })
        }
    }
}
function yazdir()
{
    console.log("dsdsa");
}


