import { atualizarCategoriaUseCase, deletarCategoriaUseCase, inserirCategoriaUseCase, recuperarCategoriaPorIdUseCase, recuperarTodasCategoriasUseCase } from "@modules/catalogo/application/use-case";
import { RecuperarCategoriaPorIdExpressController } from "./recuperar-categoria-por-id.express.controller";
import { RecuperarTodasCategoriaExpressController } from "./recuperar-todas-categorias.express.controller";
import { InserirCategoriaExpressController } from "./inserir-categoria.express.controller";
import { AtualizarCategoriaExpressController } from "./atualizar-categoria.express.controller";
import { DeletarCategoriaExpressController } from "./deletar_categoria.express.controller";

const recuperarCategoriaPorIdController = new RecuperarCategoriaPorIdExpressController(recuperarCategoriaPorIdUseCase);
const recuperarTodasCategoriasController = new RecuperarTodasCategoriaExpressController(recuperarTodasCategoriasUseCase);
const inserirCategoriaController = new InserirCategoriaExpressController(inserirCategoriaUseCase);
const atualizarCategoriaExpressController = new AtualizarCategoriaExpressController(atualizarCategoriaUseCase);
const deletarCategoriaExpressController = new DeletarCategoriaExpressController(deletarCategoriaUseCase);

export {
    recuperarCategoriaPorIdController,
    recuperarTodasCategoriasController,
    inserirCategoriaController,
    atualizarCategoriaExpressController,
    deletarCategoriaExpressController
}