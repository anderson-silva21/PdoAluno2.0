import AdminJS from 'adminjs';
import Usuario from '../models/usuario';
import { password } from 'pg/lib/defaults';

export default {
    resource: Usuario,
    options: {
        parent: {
            icon: "User"    
        },
        actions: {
            resetPassword: {
                actionType: 'record',
                icon: "Password",
                handler: async (request, response, context) => {
                    return {
                        record: context.record.toJSON(),

                    }
                }

            }
        },
        properties: {
            id: {
                position: 1,
            },
            initials: {
                position: 2,
                isVisible: {list: true, filter: false, show: true, edit: false },
            },
            nome: {
                position: 3,
                isRequired: true,
            },
            email: {
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
            password: {
                isVisible: false,
            },
            password_hash: {
                isVisible: false,
            },
        }
    }   
}