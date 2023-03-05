import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { UserType } from './user.type';

@Entity()
export class UserEntity {
  @PrimaryGeneratedColumn('uuid')
  uuid: string;

  @Column({ nullable: false })
  email: string;

  @Column({ nullable: false })
  id: string;

  @Column({ nullable: false })
  password: string;

  @Column({ nullable: false })
  crypto_salt: string;

  @Column({ nullable: false })
  nickname: string;

  @Column({ nullable: false, default: UserType.normal })
  user_type: UserType;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}
