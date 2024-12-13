import { NestFactory } from '@nestjs/core'
import { AppModule } from './app.module'
import { NestiaSwaggerComposer } from '@nestia/sdk'
import { SwaggerModule } from '@nestjs/swagger'

const main = async (): Promise<void> => {
    const app = await NestFactory.create(AppModule)

    const document = await NestiaSwaggerComposer.document(app, {
        info: {
            title: 'REDUCE TAX API',
            description: 'REDUCE TAX BACKEND API',
            version: '1.0.0',
            license: {
                name: 'proprietary',
                url: 'https://mockingmagician.com',
                identifier: 'proprietary',
            },
        },
        decompose: true,
        servers: [
            {
                url: 'http://localhost:3000',
                description: 'Localhost',
            },
        ],
    })

    SwaggerModule.setup('api', app, document as any)

    await app.listen(3000)
}

main().catch((error) => {
    console.error(error)
})
