import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

import { EventStatus, EventVisibility } from './enums';

@Entity()
export class Event {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column({ nullable: true })
  deleteDate!: Date;

  @Column({ length: 1000, nullable: true, type: 'varchar' })
  description!: string;

  @Column({ nullable: true })
  endDate!: Date;

  @Column({ nullable: true, precision: 8, scale: 6, type: 'decimal' })
  latitude!: number;

  @Column({ nullable: true, precision: 9, scale: 6, type: 'decimal' })
  longitude!: number;

  @Column({ length: 50, nullable: false, type: 'varchar' })
  name!: string;

  @Column({ nullable: false })
  organizer!: number;

  @Column({ nullable: true, precision: 10, scale: 2, type: 'decimal' })
  price!: number;

  @Column({ nullable: true })
  startDate!: Date;

  @Column({
    default: EventStatus.WAITING,
    enum: EventStatus,
    nullable: false,
    type: 'enum'
  })
  status!: string;

  @Column({
    default: EventVisibility.LIMITED,
    enum: EventVisibility,
    nullable: false,
    type: 'enum'
  })
  visibility!: string;
}
