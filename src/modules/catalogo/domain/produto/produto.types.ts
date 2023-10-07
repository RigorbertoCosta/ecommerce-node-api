import { IDatasControle, KeysDatasControles } from "@shared/domain/datas.types";
import { Categoria } from "../categoria/categoria.entity";
import { ICategoria } from "../categoria/categoria.types";

interface IProduto extends IDatasControle{
    id?: string;
    nome:string;
    descricao:string;
    valor: number;
    categorias: Array<Categoria>
}

type CriarProdutoProps = Omit<IProduto, "id" | KeysDatasControles>;

type RecuperarProdutoProps = IProduto & {
    id: NonNullable<IProduto['id']>
};

export {
    IProduto, 
    CriarProdutoProps,
    RecuperarProdutoProps
}