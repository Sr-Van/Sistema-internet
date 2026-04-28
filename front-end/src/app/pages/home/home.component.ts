import { Component } from '@angular/core';

interface DashboardCard {
  title: string;
  icon: string;
  action: () => void;
}

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {
  quickActions: DashboardCard[] = [
    {
      title: 'Ver Relatórios',
      icon: '📊',
      action: () => this.viewReports(),
    },
    {
      title: 'Configurar Rede',
      icon: '⚙️',
      action: () => this.configureNetwork(),
    },
    {
      title: 'Monitoramento',
      icon: '📈',
      action: () => this.monitorStatus(),
    },
    {
      title: 'Configurações',
      icon: '🔧',
      action: () => this.openSettings(),
    },
  ];

  viewReports(): void {
    console.log('Abrindo relatórios...');
  }

  configureNetwork(): void {
    console.log('Abrindo configuração de rede...');
  }

  monitorStatus(): void {
    console.log('Abrindo monitoramento...');
  }

  openSettings(): void {
    console.log('Abrindo configurações...');
  }
}
