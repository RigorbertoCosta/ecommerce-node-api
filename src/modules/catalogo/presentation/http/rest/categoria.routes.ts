import express, { response } from 'express';
import { atualizarCategoriaExpressController, deletarCategoriaExpressController, inserirCategoriaController, recuperarCategoriaPorIdController, recuperarTodasCategoriasController } from './controllers';
import { request } from 'http';

const categoriaRouter = express.Router();

categoriaRouter.get(
    '/:id',
    (request, response, next) =>  recuperarCategoriaPorIdController.recuperar(request, response, next)
);

categoriaRouter.get(
    '/',
    (request, response, next) =>  recuperarTodasCategoriasController.recuperar(request, response, next)
);

categoriaRouter.post(
    '/',
    (request, response, next) =>  inserirCategoriaController.inserir(request, response, next)
);

categoriaRouter.put(
    '/:id',
    (request, response, next) => atualizarCategoriaExpressController.atualizar(request, response, next)
)

categoriaRouter.delete(
    '/:id',
    (request, response, next) => deletarCategoriaExpressController.deletar(request, response, next)
)

export { categoriaRouter };