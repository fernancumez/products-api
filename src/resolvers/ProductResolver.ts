import {
  Arg,
  Field,
  InputType,
  Int,
  Mutation,
  Query,
  Resolver,
} from "type-graphql";
import { Product } from "../entity/Product";

@InputType()
class ProductInput {
  @Field(() => String)
  name!: string;

  @Field(() => Int)
  quantity!: number;
}

@InputType()
class ProductUpdateInput {
  @Field(() => String, { nullable: true })
  name?: string;

  @Field(() => Int, { nullable: true })
  quantity?: number;
}

@Resolver()
export class ProductResolver {
  @Query(() => Product)
  async getProduct(@Arg("id", () => String) id: string) {
    const product = await Product.findOne({ where: { id } });
    if (!product) throw new Error("Product not found!");

    return product;
  }

  @Query(() => [Product])
  async getProducts() {
    return await Product.find();
  }

  @Mutation(() => Product)
  async createProduct(
    @Arg("variables", () => ProductInput) variables: ProductInput
  ) {
    const newProduct = Product.create(variables);
    const productCreated = await newProduct.save();

    return productCreated;
  }

  @Mutation(() => String)
  async updateProduct(
    @Arg("id", () => String) id: string,
    @Arg("fields", () => ProductUpdateInput) fields: ProductUpdateInput
  ) {
    const updatedPoduct = await Product.update({ id }, fields);
    if (!updatedPoduct.affected) throw new Error("Product not found!");

    return "Product updated successfully";
  }

  @Mutation(() => String)
  async deleteProduct(@Arg("id", () => String) id: string) {
    const deletedProduct = await Product.delete(id);
    if (!deletedProduct.affected) throw new Error("Product not found!");

    return "Product deleted successfully";
  }
}
