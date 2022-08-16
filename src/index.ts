import { Prisma, PrismaClient } from '@prisma/client'
const fastify = require('fastify')

const prisma = new PrismaClient()
const app = fastify()

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
    })
    res.send(product)
})

app.listen(3000, (err: any) => {
    if (err) {
        console.error(err)
        process.exit(1)
    }
    console.log(`
    🚀 Server ready at: http://localhost:3000
    ⭐️ See sample requests: http://pris.ly/e/ts/rest-fastify#3-using-the-rest-api`)
})