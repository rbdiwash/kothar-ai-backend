import { Body, Controller, HttpException, HttpStatus, InternalServerErrorException, Logger, Post } from "@nestjs/common";
import { AIService } from "./AIModule.service";


@Controller('ai')
export class AIController {
    private readonly logger = new Logger(AIController.name);

    constructor(private readonly aiService: AIService) { }
    
    @Post('generate-insight')
    async generateInsight(@Body() body: { query: string }): Promise<{ insight: string }> {
        try {
            const result = await this.aiService.generateResult(body.query);
            return { insight: result };
        }
        catch (error) {
            this.logger.error(`Error generating AI insight.`, error);
            throw new HttpException('Failed to generate AI insight.', HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
}