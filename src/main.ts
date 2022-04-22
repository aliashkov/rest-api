import { NestFactory } from "@nestjs/core";
import { DocumentBuilder, SwaggerModule } from "@nestjs/swagger";
import { AppModule } from "./app.module";


async function start() {
    const PORT = process.env.PORT || 5000;
    const app = await NestFactory.create(AppModule);

    const config = new DocumentBuilder()
       .setTitle('Знакомство с nest')
       .setDescription('Документация REST API')
       .setVersion('1.0.0')
       .addTag('Shoot')
       .build()
    
    const document =  SwaggerModule.createDocument(app, config)
    SwaggerModule.setup('/api/docs' , app , document);

    await app.listen(PORT, () => console.log(`Server listend on port  ${PORT}`))

}

start()