import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';
import { ReporteAreas } from 'src/app/models/reporteAreas';
import { ReporteService } from 'src/app/services/reporte.service';
import { Chart, registerables } from 'chart.js';
Chart.register(...registerables);
@Component({
  selector: 'app-reportes',
  templateUrl: './reportes.component.html',
  styleUrls: ['./reportes.component.css'],
})
export class ReportesComponent implements OnInit {
  formulario: FormGroup;
  private subs = new Subscription();

  meses = [
    { numero: 1, mes: 'Enero' },
    { numero: 2, mes: 'Febrero' },
    { numero: 3, mes: 'Marzo' },
    { numero: 4, mes: 'Abril' },
    { numero: 5, mes: 'Mayo' },
    { numero: 6, mes: 'Junio' },
    { numero: 7, mes: 'Julio' },
    { numero: 8, mes: 'Agosto' },
    { numero: 9, mes: 'Septiembre' },
    { numero: 10, mes: 'Octubre' },
    { numero: 11, mes: 'Noviembre' },
    { numero: 12, mes: 'Diciembre' },
  ];
  constructor(private fb: FormBuilder, private repService: ReporteService) {}

  ngOnInit(): void {
    this.formulario = this.fb.group({
      ano: ['', Validators.required],
      mes: ['', Validators.required],
    });
  }
  generar() {
    this.subs.add(
      this.repService
        .getReportePorPeriodo(this.formulario.value as ReporteAreas)
        .subscribe({
          next: (rep: any) => {
            //console.log(rep);
            let chartStatus = Chart.getChart('pieChart'); // <canvas> id
            console.log(chartStatus);
            if (chartStatus != undefined) {
              chartStatus.destroy();
            }
            var PieChart = new Chart('pieChart', {
              type: 'pie',
              data: {
                labels: Array.from(rep, (item: any, index) => [item.area]),
                datasets: [
                  {
                    label: 'vote Now',
                    data: Array.from(rep, (item: any, index) => [
                      item.sueldoNeto,
                    ]),
                    backgroundColor: Array.from(
                      Array(Object.keys(rep).length),
                      (item: any) =>
                        `#${Math.floor(Math.random() * 16777215).toString(16)}`
                    ),
                  },
                ],
              },
            });
          },
        })
    );
  }
}
