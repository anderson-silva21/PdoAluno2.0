import AdminJS from 'adminjs';
import Produto from '../models/produtos';
import { password } from 'pg/lib/defaults';

export default {
    resource: Produto,
    options: {
        parent: {
            icon: "Product"
        },
        properties: {
            id: {
                position: 1,
            },
            nome: {
                position: 2,
                isRequired: true,
            },
            valor: {
                position: 3,
                isRequired: true,
            },
            categoria: {
                position: 4,
                isRequired: true,
            },
            createdAt: {
                position: 5,
                isVisible: {list: true, filter: true, show: true, edit: false },
            },
            updatedAt: {
                position: 6,
                isVisible: {list: true, filter: true, show: true, edit: false },
            },
        }
    }   
}