import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { UserType } from './user.type';

@Entity({ name: 'user' })
export class UserEntity {
  @PrimaryGeneratedColumn('uuid')
  uuid: string;

  @Column({ nullable: false })
  email: string;

  @Column({ nullable: false })
  id: string;

  @Column({ nullable: false, select: false })
  encrypted_password: string;

  @Column({ nullable: false, select: false })
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
