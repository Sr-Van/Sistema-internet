import { Component } from '@angular/core';
import { OrderComponent } from '../../shared/components/order/order.component';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';

export interface ServiceOrder {
  orderNumber: number;
  clientName: string;
  technician: string;
  status: string;
  description: string;
  date: string;
  clientCPF: string;
  clientPhone: string;
  clientAddress: string;
}

@Component({
  selector: 'app-os',
  standalone: true,
  imports: [OrderComponent, CommonModule, ReactiveFormsModule],
  templateUrl: './os.component.html',
  styleUrl: './os.component.css',
})
export class OsComponent {
  public isModalOpen = false;
  public selectedOrder: ServiceOrder | null = null;
  public orderForm: FormGroup;

  serviceOrders: ServiceOrder[] = [
    {
      orderNumber: 1,
      clientName: 'João da Silva',
      technician: 'Carlos Pereira',
      status: 'Concluida',
      description: 'Reparo na conexão de internet.',
      date: '2024-05-20',
      clientCPF: '123.456.789-00',
      clientPhone: '(11) 98765-4321',
      clientAddress: 'Rua das Flores, 123',
    },
    {
      orderNumber: 2,
      clientName: 'Maria Oliveira',
      technician: 'Ana Souza',
      status: 'Em andamento',
      description: 'Instalação de novo ponto de acesso.',
      date: '2024-05-21',
      clientCPF: '987.654.321-11',
      clientPhone: '(22) 91234-5678',
      clientAddress: 'Av. Brasil, 456',
    },
    {
      orderNumber: 3,
      clientName: 'José Santos',
      technician: 'Carlos Pereira',
      status: 'Pendente',
      description: 'Verificação de velocidade da internet.',
      date: '2024-05-22',
      clientCPF: '111.222.333-44',
      clientPhone: '(33) 95555-4444',
      clientAddress: 'Rua São Paulo, 789',
    },
    {
      orderNumber: 4,
      clientName: 'Ana Costa',
      technician: 'Mariana Lima',
      status: 'Cancelada',
      description: 'Cliente solicitou cancelamento do serviço.',
      date: '2024-05-19',
      clientCPF: '222.333.444-55',
      clientPhone: '(44) 96666-3333',
      clientAddress: 'Rua Minas Gerais, 101',
    },
    {
      orderNumber: 5,
      clientName: 'Pedro Rocha',
      technician: 'Ana Souza',
      status: 'Concluida',
      description: 'Troca de modem.',
      date: '2024-05-18',
      clientCPF: '333.444.555-66',
      clientPhone: '(55) 97777-2222',
      clientAddress: 'Av. Rio de Janeiro, 202',
    },
    {
      orderNumber: 6,
      clientName: 'Sandra Martins',
      technician: 'Rafael Ferreira',
      status: 'Pendente',
      description: 'Agendamento para visita técnica.',
      date: '2024-05-23',
      clientCPF: '444.555.666-77',
      clientPhone: '(66) 98888-1111',
      clientAddress: 'Rua Bahia, 303',
    },
  ];

  public statusOptions = [
    'Pendente',
    'Em andamento',
    'Concluida',
    'Cancelada',
  ];

  constructor(private fb: FormBuilder) {
    this.orderForm = this.fb.group({
      description: ['', Validators.required],
      status: ['', Validators.required],
      technician: [''],
      date: [''],
    });
  }

  public openModal(order: ServiceOrder) {
    this.selectedOrder = order;
    this.orderForm.patchValue({
      description: order.description,
      status: order.status,
      technician: order.technician,
      date: order.date,
    });
    this.isModalOpen = true;
  }

  public closeModal() {
    this.isModalOpen = false;
    this.selectedOrder = null;
    this.orderForm.reset();
  }

  public saveChanges() {
    if (this.orderForm.valid && this.selectedOrder) {
      const updatedData = this.orderForm.value;
      const orderIndex = this.serviceOrders.findIndex(
        (o) => o.orderNumber === this.selectedOrder!.orderNumber,
      );
      if (orderIndex > -1) {
        this.serviceOrders[orderIndex] = {
          ...this.serviceOrders[orderIndex],
          ...updatedData,
        };
      }
      this.closeModal();
    }
  }
}
