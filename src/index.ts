import { Prisma, PrismaClient } from '@prisma/client'
import Fastify from 'fastify'
import cors from '@fastify/cors'

const prisma = new PrismaClient()
const app = Fastify()

app.register(cors, {
    origin: true,
    methods: ['GET', 'PUT', 'POST']
})

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
            instances: {
                orderBy: {
                    expirationDate: 'asc'
                }
            },
        },
    })

    if (product) {

        let nextToExpireDate = ''
        let nextToExpireUnits = 0

        if (product.instances?.length) {
            nextToExpireDate = product.instances[0].expirationDate
            nextToExpireUnits = product.instances
                .filter(instance => instance.expirationDate === nextToExpireDate)
                .reduce((p, c) => p + c.units, 0)
        }

        const productResponse = {
            name: product.name,
            howLongToFreeze: product.monthsToExpire,
            nextToExpireDate,
            nextToExpireUnits
        }

        res.send(productResponse, { depth: null })
    }

    res.send(product, { depth: null })
})

app.post(`/products/:name`, async (req: any, res: any) => {
    const { name, howLongToFreeze, storageDate, units } = req.params

    console.log(req.params)
})

app.get(`/products/instances/:name`, async (req: any, res: any) => {
    const { name } = req.params

    const product = await prisma.product.findUnique({
        where: { name: name },
        include: {
            instances: {
                orderBy: {
                    expirationDate: 'asc'
                }
            },
        },
    })

    if (product && product.instances?.length) {
        interface ProductDetails {
            name: string
            expirationDate: string
            units: number
        }

        const productInstancesResponse: Array<ProductDetails> = []

        product.instances.forEach(instance => productInstancesResponse.push({
            name: instance.name,
            expirationDate: instance.expirationDate,
            units: instance.units
        }))

        res.send(productInstancesResponse, { depth: null })
    }

    res.send(product, { depth: null })
})

app.listen({ port: 3000 })
