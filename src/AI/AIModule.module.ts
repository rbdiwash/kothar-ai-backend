import { Module } from "@nestjs/common";
import { AIService } from "./AIModule.service";
import { PrismaModule } from "src/prisma/prisma.module";
import { AIController } from "./AIModule.controller";

@Module({
    imports: [PrismaModule],
    controllers: [AIController],
    providers: [AIService],
    exports:[AIService]
})

export class AIModule {}