import {Growbed} from './growbed';
import {Pond} from './pond';
import {Harvest} from './harvest';

export class Ecosystem {
  id: string;
  location: string;
  address: string;
  postcode: string;
  growbedHarvests: Harvest[];
  pondHarvests: Harvest[];
  pondChart: [];
  growbedChart: [];

  constructor(ecosystem: Ecosystem) {
    this.id = ecosystem.id;
    this.location = ecosystem.location;
    this.address = ecosystem.address;
    this.postcode = ecosystem.postcode;
    this.growbedHarvests = [];
    this.pondHarvests = [];
    this.pondChart = [];
    this.growbedChart = [];
  }
}
