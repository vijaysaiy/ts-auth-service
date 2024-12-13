/* eslint-disable @typescript-eslint/no-misused-promises */
import { PrismaClient } from '@prisma/client';
import request from 'supertest';
import app from '../../src/app';
import { truncateTables } from '../utils';

describe('POST /auth/register', () => {
  let prisma: PrismaClient;

  beforeAll(() => {
    prisma = new PrismaClient();
  });

  beforeEach(async () => {
    // database truncate
    await truncateTables(prisma);
  });

  afterAll(async () => {
    await prisma.$disconnect();
  });

  describe('Given all fields', () => {
    it('should return 201 status code', async () => {
      // AAA

      // Arrange
      const userData = {
        firstName: 'Vijaysai',
        lastName: 'Y',
        email: 'vijay@mern.space',
        password: 'secret',
      };
      // Act
      const response = await request(app).post('/auth/register').send(userData);
      // Assert
      expect(response.statusCode).toBe(201);
    });
    it('should return valid json response', async () => {
      // AAA

      // Arrange
      const userData = {
        firstName: 'Vijaysai',
        lastName: 'Y',
        email: 'vijay@mern.space',
        password: 'secret',
      };
      // Act
      const response = await request(app).post('/auth/register').send(userData);
      // Assert
      expect(response.headers['content-type']).toEqual(
        expect.stringContaining('json'),
      );
    });

    it('should persist the user in the database', async () => {
      // AAA

      // Arrange
      const userData = {
        firstName: 'Vijaysai',
        lastName: 'Y',
        email: 'vijay@mern.space',
        password: 'secret',
      };
      // Act
      await request(app).post('/auth/register').send(userData);
      // Assert
      const users = await prisma.user.findMany();
      expect(users).toHaveLength(1);
      expect(users[0].firstName).toBe(userData.firstName);
      expect(users[0].lastName).toBe(userData.lastName);
      expect(users[0].email).toBe(userData.email);
      expect(users[0].password).toBe(userData.password);
    });
  });
  describe('Missing fields', () => {});
});
