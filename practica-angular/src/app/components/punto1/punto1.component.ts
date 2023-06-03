import { Component, OnInit } from '@angular/core';
import { Punto1Service } from 'src/app/services/punto1.service';

@Component({
  selector: 'app-punto1',
  templateUrl: './punto1.component.html',
  styleUrls: ['./punto1.component.css']
})
export class Punto1Component implements OnInit {
  ubicacion!: string;
  ip!: string;
  constructor(private punto1Service : Punto1Service) { }

  ngOnInit(): void {
  }

  public buscarIp(){
    this.punto1Service.getBuscarIp(this.ip).subscribe(
      result=>{
        console.log(result)
        this.ubicacion=result.city;
      }
    )
    console.log(this.ubicacion);
   }

 
}
