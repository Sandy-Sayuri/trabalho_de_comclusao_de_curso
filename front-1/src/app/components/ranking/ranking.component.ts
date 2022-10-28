import { Component, OnInit } from '@angular/core';
import { RankingService } from 'src/app/shared/services/ranking.service ';



@Component({
  selector: 'app-ranking',
  templateUrl: './ranking.component.html',
  styleUrls: ['./ranking.component.css']
})
export class RankingComponent implements OnInit {
  displayedColumns: string[] = ['nome',  'pontos'];
  dataSource :any
  constructor(private RankingService:RankingService) { }

  ngOnInit(): void {
    this.RankingService.ranking().subscribe({
      next:((res:any)=>{	
        this.dataSource=res
      })})
 
  }
  public executeSelectedChange = (event :any) => {
    console.log(event);
  }
}
