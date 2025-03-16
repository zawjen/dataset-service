import { Injectable, NestMiddleware } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';
import * as fs from 'fs';
import * as path from 'path';

@Injectable()
export class MockMiddleware implements NestMiddleware {
  private mockData: any[];

  constructor() {
    const filePath = path.join(process.cwd(), 'src', 'data', 'mock-data.json');
    this.loadMockData(filePath);
  }

  private loadMockData(filePath: string): void {
    try {
      const data = fs.readFileSync(filePath, 'utf8');
      this.mockData = JSON.parse(data);
    } catch (error) {
      console.error('Error loading mock data:', error);
      this.mockData = [];
    }
  }

  use(req: Request, res: Response, next: NextFunction) {
    if (req.method === 'GET') {
      res.json(this.mockData);
    } else if (req.method === 'POST') {
      res.json({ message: 'Mocked dataset created' });
    } else if (req.method === 'PUT') {
      res.json({ message: 'Mocked dataset updated' });
    } else if (req.method === 'DELETE') {
      res.json({ message: 'Mocked dataset deleted' });
    } else {
      next();
    }
  }
}
