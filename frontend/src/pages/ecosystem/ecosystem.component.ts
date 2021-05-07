import {Component, OnInit} from '@angular/core';
import {Ecosystem} from '../../classes/ecosystem';
import {EcosystemService} from './ecosystem.service';
import {ActivatedRoute} from '@angular/router';
import {Harvest} from '../../classes/harvest';
import {ChartType} from 'angular-google-charts';

@Component({
  selector: 'app-ecosystem',
  templateUrl: './ecosystem.component.html',
  styleUrls: ['./ecosystem.component.css']
})
export class EcosystemsComponent implements OnInit {

  public ecosystems: Ecosystem[];
  public pondChartData: (string | number)[][];
  public growbedChartData: (string | number)[][];
  public options = {
    title: 'Line Chart',
    curveType: 'function',
    legend: { position: 'bottom' }
  };
  public columnNames = ['Entity', 'Harvest-Size', 'Harvest-Revenue'];

  constructor(private route: ActivatedRoute, private ecosystemService: EcosystemService) {
    this.ecosystems = [];
  }

  ngOnInit(): void {
    this.ecosystemService.getEcosystems().subscribe(response => {
      for (const ecosystem of response['ecosystems']) {
        const newEcosystem = new Ecosystem(ecosystem);
        this.getRevenues(newEcosystem);
        this.ecosystems.push(newEcosystem);
      }
    });
  }

  public get chartType(): typeof ChartType {
    return ChartType;
  }

  getRevenues(ecosystem: Ecosystem): void {
    this.pondChartData = [];
    this.growbedChartData = [];
    this.ecosystemService.getGrowbedsHarvests(ecosystem.id).subscribe(response => {
      let x = 0;
      for (const harvest of response['harvests']) {
        ecosystem.growbedHarvests.push(new Harvest(harvest));
        x += 1;
        this.growbedChartData.push([harvest.createdAt.substring(0, 10), harvest.harvestSize, harvest.revenue]);
      }
    });

    this.ecosystemService.getPondsHarvests(ecosystem.id).subscribe(response => {
      let x = 0;
      for (const harvest of response['harvests']) {
        ecosystem.pondHarvests.push(new Harvest(harvest));
        x += 1;
        this.pondChartData.push([harvest.createdAt.substring(0, 10), harvest.harvestSize, harvest.revenue]);
      }
    });
  }
}

