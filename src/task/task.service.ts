import { Injectable } from '@nestjs/common';

@Injectable()
export class TaskService {

    findAll(){
        return [
            {
                id:1,
                title:'Learn NestJS',
                isCompleted:false,
            },
            {
                id:2,
                title:'Build API',
                isCompleted:true,
            }
        ]
    }
}
