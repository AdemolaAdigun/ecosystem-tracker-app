import {Growbed} from './growbed';
export class Pond {
  id: string;
  ecosystemId: string;
  harvestId: string;
  temperature: number;
  pH: number;
  waterLevel: number;

  constructor(pond: Pond) {
    this.id = pond.id;
    this.ecosystemId = pond.ecosystemId;
    this.harvestId = pond.harvestId;
    this.temperature = pond.temperature;
    this.pH = pond.pH;
    this.waterLevel = pond.waterLevel;
  }
}
