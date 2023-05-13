import AdminJS from 'adminjs';
import Relatorio from '../models/relatorio';
import { password } from 'pg/lib/defaults';

export default {
    resource: Relatorio,
    options: {
        parent: {
            icon: "Report"
        },
        properties: {
            id: {
                position: 1,
            },
            dataInicio: {
                position: 2,
                isRequired: true,
            },
            dataFim: {
                position: 3,
            },
            valorTotal: {
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