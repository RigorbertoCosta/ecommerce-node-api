import { Categoria } from "@modules/catalogo/domain/categoria/categoria.entity";
import { CategoriaPrismaRepository } from "@modules/catalogo/infra/database/categoria.prisma.repository";
import { ProdutoPrismaRepository } from "@modules/catalogo/infra/database/produto.prisma.repository";
import { PrismaClient } from "@prisma/client";
import { DomainException } from "@shared/domain/domain.exception";
import { error, info, log } from "console";

const prisma = new PrismaClient({
    log: ['query', 'info'],
    errorFormat: 'pretty'
});
    
async function main() {
    prisma.$connect().then(
        async () => {
            console.log('Postgres Conectado');
        }
    );
    const categoriaRepo = new CategoriaPrismaRepository (prisma);
    const produtoRepo = new ProdutoPrismaRepository (prisma);

        //// recuperar por uuid ////

    //const categoriaRecuperada: Categoria | null = await categoriaRepo.recuperarPorUuid("7061d599-ab25-4182-98ce-170afdf2acd2");

    //console.log(categoriaRecuperada);

        //// recuperar todas as categorias ////

    //const todasCategorias: Array<Categoria> = await categoriaRepo.recuperarTodos();
    //console.log(todasCategorias);


        ////verifica se existe categoria////
    
    //const existeCategoria: boolean = await categoriaRepo.existe("092c7771-3a08-4ef8-8456-80c0f4656372")
    //console.log(existeCategoria);

        //// inserir categoria  ////

    //const categoria: Categoria = Categoria.criar({
    //    nome: 'Sala e Quarto'
    //})
    //const categoriaInserida = await categoriaRepo.inserir(categoria);
    //console.log(categoriaInserida);

        //// atualizar categoria  ////

    //const categoria: Categoria = Categoria.recuperar({
    //    id: "092c7771-3a08-4ef8-8456-80c0f4656372",
    //    nome: 'Mesa'
    //});
    //const atualizouCategoria: boolean = await categoriaRepo.atualizar(categoria.id,categoria);
    //console.log(atualizouCategoria)

        //// deletar categoria ////
    
    //const categoriaDeletada: boolean = await categoriaRepo.deletar("e6b68d1a-fc14-4460-ae83-81c1fbc827fc")
    //console.log(categoriaDeletada);
}  

    
main()
    .then(async () => {
      await prisma.$disconnect  
    })
    .catch(async (error) =>{
        if (error instanceof DomainException) {
            console.log('Exceção do Dóminio');
            console.log(error.message);
        }
        else {
            console.log('Outras Exceções');
            console.log(error.message);
        }  
        await prisma.$disconnect()
        process.exit(1) 
        
    })
    