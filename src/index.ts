import { Prisma, PrismaClient } from '@prisma/client'
// const Fastify = require('fastify')
import Fastify from 'fastify'
import cors from '@fastify/cors'

const prisma = new PrismaClient()
const app = Fastify()
app.register(cors, {
    origin: true,
    methods: ['GET', 'PUT', 'POST']
})

interface ProductNameParams {
    name: string
}

app.get('/products', async (req: any, res: any) => {
    const allProducts = await prisma.product.findMany({
        include: {
            instances: true,
        },
    })
    res.send(allProducts, { depth: null })
})

app.get(`/products/:name`, async (req: any, res: any) => {
    const { name } = req.params

    const product = await prisma.product.findUnique({
        where: { name: name },
        include: {
            instances: true,
        },
    })
    res.send(product, { depth: null })
})

app.listen({ port: 3000 })
