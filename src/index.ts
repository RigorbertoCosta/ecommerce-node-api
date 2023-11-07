import { Categoria } from "@modules/catalogo/domain/categoria/categoria.entity";
import { CategoriaPrismaRepository } from "@modules/catalogo/infra/database/categoria.prisma.repository";
import { ProdutoPrismaRepository } from "@modules/catalogo/infra/database/produto.prisma.repository";
import { DomainException } from "@shared/domain/domain.exception";
import { prisma } from "@main/infra/database/orm/prisma/client";
import { error, info, log } from "console";
import { Produto } from "@modules/catalogo/domain/produto/produto.enitity";
import { categoriaRepositorio as categoriaRepo} from "@modules/catalogo/infra/database";
import { produtoRepositorios as produtoRepo } from "@modules/catalogo/infra/database";
import { deletarCategoriaUseCase, recuperarTodasCategorias } from "@modules/catalogo/application/use-case";

async function main() {
    
    prisma.$connect().then(
        async () => {
            console.log('Postgres Conectado');
        }
    );



    ////////////////////////////////
    //Recuperar Categoria por UUID//
    ////////////////////////////////
    
    //const categoriaRecuperada: Categoria | null = await categoriaRepo.recuperarPorUuid('5ccdd6ab-d043-42f0-937b-1260fe47886a');

    //console.log(categoriaRecuperada);

    ////////////////////////////////
    //Recuperar Categoria por UUID 2//
    ////////////////////////////////
   
    //console.log(await recuperarCategoriaPorIdUseCase.execute("6aa136db-c181-46e8-8fc1-f052a13f6f0d"));

    /////////////////////////////////
    //Recuperar Todas as Categorias//
    /////////////////////////////////
    
    //const todasCategorias: Array<Categoria> = await categoriaRepo.recuperarTodos();

    //console.log(todasCategorias);

    //console.log(await recuperarTodasCategorias.execute());

    ////////////////////////////////
    //Verifica se Existe Categoria//
    ////////////////////////////////
    
    //const existeCategoria: boolean = await categoriaRepo.existe("7061d559-ab25-4182-98ce-170afdf2acd2");

    //console.log(existeCategoria);

    /////////////////////
    //Inserir Categoria//
    /////////////////////
    
    //const categoria: Categoria = Categoria.criar({
    //    nome:'Banheiro'
    //});     

    //const categoriaInserida = await categoriaRepo.inserir(categoria);

    //console.log(categoriaInserida);

    ///////////////////////
    //Atualizar Categoria//
    ///////////////////////
    
    //const categoria: Categoria = Categoria.recuperar({
    //    id: "5ccdd6ab-d043-42f0-937b-1260fe47886a",
    //    nome: "Cozinha Americana"
    //});     

   //const atualizouCategoria: boolean = await categoriaRepo.atualizar(categoria.id,categoria);

    //console.log(atualizouCategoria)

    /////////////////////
    //Deletar Categoria//
    /////////////////////
    
    //const categoriaDeletada: boolean = await categoriaRepo.deletar('5ccdd6ab-d043-42f0-937b-1260fe47886a');
    
    //console.log(categoriaDeletada);

       /////////////////////
    //Deletar Categoria//
    /////////////////////
   
    // console.log(await deletarCategoriaUseCase.execute("55acc0f4-45ec-4f97-8087-4763a7893c54"));

    ////////////////////////////////
	//Recuperar Produto por UUID//
	////////////////////////////////
		
	//const produtoRecuperado: Produto | null = await produtoRepo.recuperarPorUuid("7f35c7f4-ce26-4503-bfce-0afd937adfb8");

	//console.log(produtoRecuperado);

    //console.log(produtoRecuperado?.estaDeletado());

    ///////////////////
	//Inserir Produto//
	///////////////////
	
    /*
    const categoria01: Categoria = Categoria.recuperar({
        id: "00d8c8a4-7afb-4aa9-9a0f-8f005b5a2816",
        nome: 'Cozinha'
    });     

    const categoria02: Categoria = Categoria.recuperar({
        id: "fc762da1-8d2c-4ffa-9559-901db94cb92e",
        nome: 'Banho'
    })

    const produto: Produto = Produto.criar({
        nome:'Pano de Prato',
        descricao:'Algodão fio 60',
        valor:30,
        categorias:[categoria01]
    });

	const produtoInserido = await produtoRepo.inserir(produto);

	console.log(produtoInserido);
    */

    

    /////////////////////////////////////////////////
	//Recuperar Todos os Produtos e Suas Categorias//
	/////////////////////////////////////////////////
		
	//const todosProdutos: Array<Produto> = await produtoRepo.recuperarTodos();

	//console.log(todosProdutos);

    ///////////////////////////////////////////////
	//Atualizar Produto - Sem Atulizar Categorias//
	///////////////////////////////////////////////

    /*
    const produto = {
        id: "7d6a14d5-02f3-4b6d-8cb8-8601ff151f10",
        nome: "Toalha de Cozinha",
        descricao: "toalha de algodão",
        valor: 200
    }; 

    const atualizouProduto: boolean = await produtoRepo.atualizar(produto.id,produto);
    
    */
    ///////////////////
	//Deletar Produto//
	///////////////////
		
	//const produtoDeletado: boolean = await produtoRepo.deletar("7d6a14d5-02f3-4b6d-8cb8-8601ff151f10");

	//console.log(produtoDeletado);

    ////////////////////////////////////////////
	//Adicionar e Remover Categoria ao Produto//
	////////////////////////////////////////////
    
    //const produtoRecuperado: Produto | null = await produtoRepo.recuperarPorUuid("737f111b-eba1-457f-9552-5b5f28511d5d");

    //const categoriaRecuperada: Categoria | null = await categoriaRepo.recuperarPorUuid("03f890b0-684a-44ba-a887-170e26bb2cd2");

    //if (produtoRecuperado && categoriaRecuperada){

        //if (produtoRecuperado.adicionarCategoria(categoriaRecuperada)) {
        //    await produtoRepo.adicionarCategoria(produtoRecuperado,categoriaRecuperada);
        //}

       //if (produtoRecuperado.removerCategoria(categoriaRecuperada)) {
        //    await produtoRepo.removerCategoria(produtoRecuperado,categoriaRecuperada);
        //}

    //}

    //////////////////////////
    //Alterar Status Produto//
    //////////////////////////

    //const produtoRecuperado: Produto | null = await produtoRepo.recuperarPorUuid("ace8780f-1aac-4219-9b36-e13b60159e4b");

    //if (produtoRecuperado) {
    //    const alterouStatusProduto: boolean = await produtoRepo.alterarStatus(produtoRecuperado,StatusProduto.ATIVO)
    //    console.log(alterouStatusProduto);
    //}

    ////////////////////////////////////
	//Recuperar Produtos por Categoria//
	////////////////////////////////////
			
	//const todosProdutosPorCategoria: Array<Produto> = await produtoRepo.recuperarPorCategoria("03f890b0-684a-44ba-a887-170e26bb2cd2");

	//console.log(todosProdutosPorCategoria);
    

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
    