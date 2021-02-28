import { Controller, Get, Post, Body, HttpStatus, Res } from '@nestjs/common';
import { ApiCreatedResponse, ApiOkResponse, ApiTags, ApiBadRequestResponse } from '@nestjs/swagger';
import { FeatureService } from './feature.service';
import { CreateFeatureDTO } from './feature.dto';
import { FeatureEntity } from './feature.entity';
import { Response } from 'express'

@ApiTags('Features')
@Controller('features')
export class FeatureController {
    constructor(private featureService: FeatureService) { }

    @Get()
    @ApiOkResponse()
    @ApiBadRequestResponse({
        description: 'Bad Request. Error fetching records.'
    })
    public async findAll() {
        return await this.featureService.findAll();
    }

    @Post()
    @ApiCreatedResponse({
        description: 'Feature has been successfully created.'
    })
    @ApiBadRequestResponse({
        description: 'Bad Request. Error creating record.',
    })
    async create(@Body() request: CreateFeatureDTO, @Res() res: Response) {
        try {
            return await this.featureService.create(request);
        }
        catch (error) {
            return res.status(HttpStatus.BAD_REQUEST).send(error.message);
        }
    }
}

