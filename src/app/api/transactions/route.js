import prisma from "../../../../prisma/lib/prisma"


export async function GET(request) {
  const transactions = await prisma.transaction.findMany()
  return Response.json(transactions)
}

export async function POST(request) {
    const body = await request.json()
    const newTransaction = await prisma.transaction.create({
        data: {
             productName:body.title,
             unitsSold:body.customer,
             revenue:body.description,
             stocksLeft:body.amount,
             date:body.date,
             status:body.status,
        }
    })
    return Response.json(newTransaction)
}