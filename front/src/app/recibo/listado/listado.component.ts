import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Recibo } from 'src/app/models/recibo';
import { ReciboService } from 'src/app/services/recibo.service';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css'],
})
export class ListadoComponent implements OnInit {
  listado: any[];
  legajo: number;
  private subs = new Subscription();
  constructor(private recService: ReciboService, private router: Router) {}

  ngOnInit(): void {}

  consultar() {
    this.subs.add(
      this.recService.getReciboByLegajo(this.legajo).subscribe({
        next: (recibos: Recibo[]) => {
          console.log(recibos);
          this.listado = recibos;
        },
      })
    );
  }

  nuevo() {
    this.router.navigateByUrl('/altaR');
  }
}
