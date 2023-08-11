import { Query, Resolver } from '@nestjs/graphql';
import { CurrentUser } from './current-user.decorator';
import { User } from './user.entity';
import { UseGuards } from '@nestjs/common';
import { AuthGuardJwtGql } from './auth-guard-jwt.gql';

@Resolver()
export class UserResolver {
  @Query(() => User, { nullable: true })
  @UseGuards(AuthGuardJwtGql)
  public async me(@CurrentUser() user: User): Promise<User> {
    return user;
  }
}
