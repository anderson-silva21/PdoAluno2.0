import AdminJS from 'adminjs';
import Pedido from '../models/pedidos';
import { password } from 'pg/lib/defaults';

export default {
    resource: Pedido,
    options: {
        parent: {
            icon: "ShoppingBag"
        },
        properties: {
            id: {
                position: 1,
                isVisible:false,
            },
            nome: {
                position: 2,
                isRequired: true,
            },
            produto: {
                position: 3,
            },
            data: {
                position: 4,
                isRequired: true,
            },
            formaPagamento: {
                position: 5,
                isRequired: true,
            },
            observacao: {
                position: 6,
                type: "textarea",
            },
            cpf: {
                position: 7,
            },
            createdAt: {
                position: 8,
                isVisible: {list: true, filter: true, show: true, edit: false },
            },
            updatedAt: {
                position: 9,
                isVisible: {list: true, filter: true, show: true, edit: false },
            },
        }
    }   
}