import { Component } from '@angular/core';
import { OrderComponent } from '../../shared/components/order/order.component';

export interface ServiceOrder {
  technician?: string;
  orderNumber?: number;
  description?: string;
  status?: string;
  clientName?: string;
  date?: string;
}

@Component({
  selector: 'app-os',
  standalone: true,
  imports: [OrderComponent],
  templateUrl: './os.component.html',
  styleUrl: './os.component.css',
})
export class OsComponent {
  serviceOrders: ServiceOrder[] = [
    {
      orderNumber: 1,
      clientName: 'João da Silva',
      technician: 'Carlos Pereira',
      status: 'Concluida',
      description: 'Reparo na conexão de internet.',
      date: '2024-05-20',
    },
    {
      orderNumber: 2,
      clientName: 'Maria Oliveira',
      technician: 'Ana Souza',
      status: 'Em andamento',
      description: 'Instalação de novo ponto de acesso.',
      date: '2024-05-21',
    },
    {
      orderNumber: 3,
      clientName: 'José Santos',
      technician: 'Carlos Pereira',
      status: 'Pendente',
      description: 'Verificação de velocidade da internet.',
      date: '2024-05-22',
    },
    {
      orderNumber: 4,
      clientName: 'Ana Costa',
      technician: 'Mariana Lima',
      status: 'Cancelada',
      description: 'Cliente solicitou cancelamento do serviço.',
      date: '2024-05-19',
    },
    {
      orderNumber: 5,
      clientName: 'Pedro Rocha',
      technician: 'Ana Souza',
      status: 'Concluida',
      description: 'Troca de modem.',
      date: '2024-05-18',
    },
    {
      orderNumber: 6,
      clientName: 'Sandra Martins',
      technician: 'Rafael Ferreira',
      status: 'Pendente',
      description: 'Agendamento para visita técnica.',
      date: '2024-05-23',
    },
  ];
}
