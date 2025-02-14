import { knex } from "../database"
import { FastifyInstance } from "fastify"

export async function transactionsRoutes(app: FastifyInstance) {
    app.get('/hello', async () => {
        const transactions = await knex('transactions').select('*')
      
        return transactions
      })
}