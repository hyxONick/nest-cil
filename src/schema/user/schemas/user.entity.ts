import { Column, Entity, PrimaryGeneratedColumn, Index } from "typeorm";


@Entity()
@Index('idx_id', ['id'])
@Index('idx_name', ['name'])
@Index('idx_email', ['email'])
@Index('idx_isDeleted', ['isDeleted'])
export class User {
  @PrimaryGeneratedColumn("uuid")
  @Index()
  id: string;

  @Column({ nullable: false })
  @Index()
  name: string;

  @Column({ nullable: false })
  @Index()
  email: string;

  @Column({ nullable: true })
  password: string;

  @Column({ nullable: true })
  token: string;

  @Column({ nullable: true })
  role: string;

  @Column({ default: false })  // 添加 isDeleted 属性，并设置默认值为 false
  @Index()
  isDeleted: boolean;
}