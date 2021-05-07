export class Growbed {
  id: string;
  ecosystemId: string;
  harvestId: string;
  lightIntensity: number;
  humidity: number;
  pH: number;
  waterLevel: number;

  constructor(growbed: Growbed) {
    this.id = growbed.id;
    this.ecosystemId = growbed.ecosystemId;
    this.harvestId = growbed.harvestId;
    this.lightIntensity = growbed.lightIntensity;
    this.humidity = growbed.humidity;
    this.pH = growbed.pH;
    this.waterLevel = growbed.waterLevel;
  }
}
