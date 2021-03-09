import { Field, Int, ObjectType } from "type-graphql";
import {
  Entity,
  Column,
  BaseEntity,
  CreateDateColumn,
  PrimaryGeneratedColumn,
} from "typeorm";

@ObjectType()
@Entity()
export class Product extends BaseEntity {
  @Field(() => String)
  @PrimaryGeneratedColumn("uuid")
  id!: string;

  @Field(() => String)
  @Column("varchar", { length: 100 })
  name!: string;

  @Field(() => Int)
  @Column("int", { default: 0 })
  quantity!: number;

  @Field(() => String)
  @CreateDateColumn({ type: "timestamp" })
  createdAt!: string;
}
