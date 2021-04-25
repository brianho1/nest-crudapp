import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class List {
    @PrimaryGeneratedColumn()
    listId: number;

    @Column()
    name: string;

}
