export class Harvest {
  id: string;
  harvestSize: number;
  revenue: number;
  createdAt: string;

  constructor(harvest: Harvest) {
    this.id = harvest.id;
    this.harvestSize = harvest.harvestSize;
    this.revenue = harvest.revenue;
    this.createdAt = harvest.createdAt;
  }
}
