import { Component, OnInit } from '@angular/core';
import * as Chartist from 'chartist';
import { PmesServiceService } from '../pmes.service/pmes.service.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  pmes: any[] = []; // Stocke la liste des PMEs
  filteredPmes: any[] = []; // Stocke la liste des PMEs filtrées
  sortedPmes: any[] = []; // Stocke la liste des PMEs triées
  autocompleteResults: any[] = []; // Stocke les résultats de l'autocomplétion
  defaultPmes: any[] = []; // Stocke les 4 premières PMEs par ordre alphabétique
  selectedPme: any = null; // Stocke la PME sélectionnée
  searchText: string = ''; // Texte de recherche pour l'autocomplétion
  searchCity: string = ''; // Texte de recherche pour la ville
  sortBy: string = 'Nom'; // Critère de tri par défaut
  order: string = 'asc'; // Ordre de tri par défaut
  currentList: string = 'default'; // Indique quelle liste est actuellement affichée: 'default', 'filtered', 'sorted'
  noResults: boolean = false; // Indique si aucun résultat n'a été trouvé

  constructor(private PmesServiceService: PmesServiceService, private router: Router) {}



  
  startAnimationForLineChart(chart){
      let seq: any, delays: any, durations: any;
      seq = 0;
      delays = 80;
      durations = 500;

      chart.on('draw', function(data) {
        if(data.type === 'line' || data.type === 'area') {
          data.element.animate({
            d: {
              begin: 600,
              dur: 700,
              from: data.path.clone().scale(1, 0).translate(0, data.chartRect.height()).stringify(),
              to: data.path.clone().stringify(),
              easing: Chartist.Svg.Easing.easeOutQuint
            }
          });
        } else if(data.type === 'point') {
              seq++;
              data.element.animate({
                opacity: {
                  begin: seq * delays,
                  dur: durations,
                  from: 0,
                  to: 1,
                  easing: 'ease'
                }
              });
          }
      });

      seq = 0;
  };
  startAnimationForBarChart(chart){
      let seq2: any, delays2: any, durations2: any;

      seq2 = 0;
      delays2 = 80;
      durations2 = 500;
      chart.on('draw', function(data) {
        if(data.type === 'bar'){
            seq2++;
            data.element.animate({
              opacity: {
                begin: seq2 * delays2,
                dur: durations2,
                from: 0,
                to: 1,
                easing: 'ease'
              }
            });
        }
      });

      seq2 = 0;
  };
  
  ngOnInit() {
      /* ----------==========     Daily Sales Chart initialization For Documentation    ==========---------- */

      const dataDailySalesChart: any = {
          labels: ['M', 'T', 'W', 'T', 'F', 'S', 'S'],
          series: [
              [12, 17, 7, 17, 23, 18, 38]
          ]
      };

     const optionsDailySalesChart: any = {
          lineSmooth: Chartist.Interpolation.cardinal({
              tension: 0
          }),
          low: 0,
          high: 50, // creative tim: we recommend you to set the high sa the biggest value + something for a better look
          chartPadding: { top: 0, right: 0, bottom: 0, left: 0},
      }

      var dailySalesChart = new Chartist.Line('#dailySalesChart', dataDailySalesChart, optionsDailySalesChart);

      this.startAnimationForLineChart(dailySalesChart);


      /* ----------==========     Completed Tasks Chart initialization    ==========---------- */

      const dataCompletedTasksChart: any = {
          labels: ['12p', '3p', '6p', '9p', '12p', '3a', '6a', '9a'],
          series: [
              [230, 750, 450, 300, 280, 240, 200, 190]
          ]
      };

     const optionsCompletedTasksChart: any = {
          lineSmooth: Chartist.Interpolation.cardinal({
              tension: 0
          }),
          low: 0,
          high: 1000, // creative tim: we recommend you to set the high sa the biggest value + something for a better look
          chartPadding: { top: 0, right: 0, bottom: 0, left: 0}
      }

      var completedTasksChart = new Chartist.Line('#completedTasksChart', dataCompletedTasksChart, optionsCompletedTasksChart);

      // start animation for the Completed Tasks Chart - Line Chart
      this.startAnimationForLineChart(completedTasksChart);



      /* ----------==========     Emails Subscription Chart initialization    ==========---------- */

      var datawebsiteViewsChart = {
        labels: ['J', 'F', 'M', 'A', 'M', 'J', 'J', 'A', 'S', 'O', 'N', 'D'],
        series: [
          [542, 443, 320, 780, 553, 453, 326, 434, 568, 610, 756, 895]

        ]
      };
      var optionswebsiteViewsChart = {
          axisX: {
              showGrid: false
          },
          low: 0,
          high: 1000,
          chartPadding: { top: 0, right: 5, bottom: 0, left: 0}
      };
      var responsiveOptions: any[] = [
        ['screen and (max-width: 640px)', {
          seriesBarDistance: 5,
          axisX: {
            labelInterpolationFnc: function (value) {
              return value[0];
            }
          }
        }]
      ];
      var websiteViewsChart = new Chartist.Bar('#websiteViewsChart', datawebsiteViewsChart, optionswebsiteViewsChart, responsiveOptions);

      //start animation for the Emails Subscription Chart
      this.startAnimationForBarChart(websiteViewsChart);

      // Appeler les méthodes pour obtenir les données au chargement du composant
      //this.loadPmesList();

      console.log('Composant Dashboard initialisé');
      this.loadDefaultPmes();
  }

  // Charger les 4 premières PMEs par ordre alphabétique
    loadDefaultPmes() {
      this.PmesServiceService.getList().subscribe(data => {
        console.log('Liste des PMEs:', data);
        this.pmes = data;
        this.defaultPmes = data.sort((a, b) => a.Nom.localeCompare(b.Nom)).slice(0, 4);
        this.currentList = 'default'; // Affiche uniquement la liste par défaut
      }, error => {
        console.error('Erreur lors de la récupération des PMEs:', error);
      });
    }

  // Méthode d'autocomplétion pour le champ de recherche
  searchAutocomplete() {
    if (this.searchText.length > 2) {
      this.PmesServiceService.getAutocomplete(this.searchText).subscribe(data => {
        console.log('Résultats de l\'autocomplétion pour le domaine:', data);
        this.autocompleteResults = data;
      });
    } else {
      this.autocompleteResults = [];
    }
  }

  // Méthode d'autocomplétion pour le champ de ville
  searchCityAutocomplete() {
    if (this.searchCity.length > 2) {
      this.PmesServiceService.getAutocomplete(this.searchCity).subscribe(data => {
        console.log('Résultats de l\'autocomplétion pour la ville:', data);
        this.autocompleteResults = data;
      });
    } else {
      this.autocompleteResults = [];
    }
  }


  // Méthode pour trier les PMEs
  sortPmes() {
    this.PmesServiceService.getListSorted(this.sortBy, this.order).subscribe(data => {
      console.log(`PMEs triées par ${this.sortBy} (${this.order}):`, data);
      this.sortedPmes = data;
      this.currentList = 'sorted'; // Affiche uniquement la liste triée
    });
  }

  // Sélectionner une PME dans les résultats de l'autocomplétion
  selectPme(pme: any) {
    console.log('PME sélectionnée:', pme);
    this.router.navigate(['/pme', pme._id]); // Naviguez vers la page de détails avec l'ID de la PME
  }

    // Méthode pour filtrer les PMEs
    filterPmes(filters: any) {
      this.PmesServiceService.getListFiltered(filters).subscribe(data => {
        console.log('PMEs filtrées avec les filtres:', filters, data);
        this.filteredPmes = data;
        this.currentList = 'filtered'; // Affiche uniquement la liste filtrée
        this.noResults = data.length === 0; // Vérifiez si aucun résultat n'a été trouvé
      });
    }




  // Méthode appelée lors de la soumission du formulaire de recherche
  onSearch() {
    console.log('Recherche initiée avec les critères:', {
      searchText: this.searchText,
      searchCity: this.searchCity,
      sortBy: this.sortBy,
      order: this.order
    });
  
    // Créer les filtres basés sur les critères de recherche
    const filters = {
      Nom: this.searchText,
      Localisation: this.searchCity
    };
  
    // Cacher la liste par défaut et réinitialiser les résultats précédents
    this.currentList = '';
    this.noResults = false;
  
    // Filtrer les PMEs
    this.filterPmes(filters);
  
    // Trier les PMEs après filtrage
    this.sortPmes();
  }
  

}
