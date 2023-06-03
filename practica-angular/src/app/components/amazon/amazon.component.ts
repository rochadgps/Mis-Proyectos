import { Component, OnInit } from '@angular/core';
import { AmazonService } from 'src/app/services/amazon.service';

@Component({
  selector: 'app-amazon',
  templateUrl: './amazon.component.html',
  styleUrls: ['./amazon.component.css']
})
export class AmazonComponent implements OnInit {
  art!: string;
  imagen!: string;
  productos!: Array<any>;
  asin!: Array<any>;
  asing!: string;
  constructor(private amazonService : AmazonService) { }

  ngOnInit(): void {
  }

  public buscarArt(){
    this.amazonService.getBuscarArt(this.art).subscribe(
      result=>{
        this.productos=result.products;
        console.log(this.productos);
      }
    )
  }
  public mostrarAsin(asing:string){
    this.amazonService.getMostrarDescripcion(this.asing).subscribe(
      result=>{
        console.log(result)
        this.asin=result
      }
    )
  }
}
