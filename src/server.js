import 'dotenv/config';

import './database';

import AdminJS from 'adminjs';
import AdminJSExpress from '@adminjs/express';
import AdminJSSequelize from '@adminjs/sequelize';
import express from 'express';

import theme from './theme';

import UsuariosResources from './resources/UsuariosResources';
import ProdutosResources from './resources/ProdutosResources';
import PedidosResources from './resources/PedidosResources';

AdminJS.registerAdapter(AdminJSSequelize);

const app = express();

const adminjs = new AdminJS({
    databases: [],
    rootPath: '/admin',
    resources: [UsuariosResources, ProdutosResources, PedidosResources],
    branding: {
        companyName: 'PdoAluno',
        logo: false,
        softwareBrothers: false,
        //theme,
    },
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