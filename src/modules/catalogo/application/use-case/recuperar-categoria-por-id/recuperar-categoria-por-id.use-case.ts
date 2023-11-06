import { Categoria } from "@modules/catalogo/domain/categoria/categoria.entity";
import { ICategoriaRepository } from "@modules/catalogo/domain/categoria/categoria.repository.interface";
import { ICategoria } from "@modules/catalogo/domain/categoria/categoria.types";
import { CategoriaMap } from "@modules/catalogo/infra/mappers/categoria.map";
import { IUseCase } from "@shared/application/use-case.interface";
import { CategoriaApplicationExceptions } from "../../exception/categoria.application.exception";

class RecuperarCategoriaPorIdUseCase implements IUseCase<string, ICategoria> {

    private_categoriaRepositorio: ICategoriaRepository<Categoria>

    constructor(repositorio: ICategoriaRepository<Categoria>) {
        this.private_categoriaRepositorio = repositorio;
    }

    async execute(uuid: string): Promise<ICategoria> {
        const existeCategoria: boolean = await this.private_categoriaRepositorio.existe(uuid)

        if (!existeCategoria) {
            throw new CategoriaApplicationExceptions.CategoriaNaoEncontrada;
        }

        const categoria = await this.private_categoriaRepositorio.recuperarPorUuid(uuid)

        return CategoriaMap.toDTO(categoria as Categoria);

    }

}

export { RecuperarCategoriaPorIdUseCase }