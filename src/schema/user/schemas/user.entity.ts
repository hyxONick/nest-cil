import {Column, Entity, PrimaryGeneratedColumn} from "typeorm";


@Entity()
export class User {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column({ nullable: false })
  name: string;

  @Column({ nullable: false })
  email: string;

  @Column({ nullable: true })
  password: string;

  @Column({ nullable: true })
  token: string;

  @Column({ nullable: true })
  role: string;
}