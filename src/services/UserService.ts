import { PrismaClient } from '@prisma/client';
import { UserData } from '../types';

const prisma = new PrismaClient();

export class UserService {
  async create({ firstName, lastName, email, password }: UserData) {
    await prisma.user.create({
      data: { firstName, lastName, email, password },
    });
  }
}
