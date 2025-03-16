import { Injectable } from '@nestjs/common';
import { Dataset } from './dataset.interface';

@Injectable()
export class DatasetService {
  private datasets: Dataset[] = []; 

  findAll(): Dataset[] {
    return this.datasets;
  }

  findOne(id: string): Dataset | undefined {
    return this.datasets.find(dataset => dataset.id === id);
  }

  create(data: Dataset): Dataset {
    this.datasets.push(data);
    return data;
  }

  update(id: string, data: Partial<Dataset>): Dataset | null {
    const index = this.datasets.findIndex(dataset => dataset.id === id);
    if (index > -1) {
      this.datasets[index] = { ...this.datasets[index], ...data };
      return this.datasets[index];
    }
    return null;
  }

  remove(id: string): Dataset | null {
    const index = this.datasets.findIndex(dataset => dataset.id === id);
    if (index > -1) {
      const deleted = this.datasets.splice(index, 1);
      return deleted[0];
    }
    return null;
  }
}
