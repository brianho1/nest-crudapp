import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import {TypeOrmCrudService} from '@nestjsx/crud-typeorm';
import { List } from './list';

@Injectable()
export class ListService extends TypeOrmCrudService<List>{
    constructor(@InjectRepository(List) repo) {
        super(repo);
    }
}
