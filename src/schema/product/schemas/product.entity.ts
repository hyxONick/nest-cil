import { Entity, PrimaryGeneratedColumn, Column, Index } from 'typeorm';

@Entity('product')
@Index('idx_id', ['id'])
@Index('idx_category', ['category'])
@Index('idx_update_time', ['updateTime'])
@Index('idx_isDeleted', ['isDeleted'])
export class Product {
  @PrimaryGeneratedColumn('uuid')
  @Index()
  id: string;

  @Column({ nullable: false })
  name: string;

  @Column({ type: 'decimal', precision: 10, scale: 2, nullable: false })
  originalPrice: number;

  @Column({ type: 'decimal', precision: 10, scale: 2, nullable: false })
  discountPrice: number;

  @Column({ nullable: false })
  category: string;

  @Column({ nullable: false })
  store: string;

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  updateTime: Date;

  @Column({ default: false })
  @Index()
  isDeleted: boolean;
}
