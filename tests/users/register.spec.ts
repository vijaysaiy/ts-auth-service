/* eslint-disable @typescript-eslint/no-misused-promises */
import request from 'supertest';
import app from '../../src/app';

describe('POST /auth/register', () => {
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
      const response = await request(app).post('/auth/register').send(userData);
      // Assert
     
    });
  });
  describe('Missing fields', () => {});
});
