import 'dotenv/config';

import './database';

import AdminJS from 'adminjs';
import AdminJSExpress from '@adminjs/express';
import AdminJSSequelize from '@adminjs/sequelize';
import express from 'express';

import UsuariosResources from './resources/UsuariosResources';

AdminJS.registerAdapter(AdminJSSequelize);

const app = express();

const adminjs = new AdminJS({
    databases: [],
    rootPath: '/admin',
    resources: [UsuariosResources],
    locale: {
        translations: {
            actions: {
                new: "Criar novo",
            },
            labels: {
                usuarios: "Usuários", 
            },
            resources: {
                 usuarios: {
                    actions: {
                        resetPassword: 'Redefinir senha',
                    },
                    properties: {
                        nome: "Nome",
                    }
                 }
            }
        }
    }
});

const router = AdminJSExpress.buildRouter(adminjs);

app.use(adminjs.options.rootPath, router);
app.listen(8000, () => {
    console.log('AdminJS is under http://localhost:8000/admin');
})