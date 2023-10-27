import { PrismaClient } from "@prisma/client";
import { DeepMockProxy, mockDeep, mockReset } from "vitest-mock-extended";
import { ProdutoPrismaRepository } from "./produto.prisma.repository";
import { afterEach, beforeAll, expect, test, vi, describe } from "vitest";
import { faker } from "@faker-js/faker";
import { Produto } from "@modules/catalogo/domain/produto/produto.enitity";
import { ProdutoMap } from "../mappers/produto.maps";
import { StatusProduto } from "@modules/catalogo/domain/produto/produto.types";

const prismaMock: DeepMockProxy<PrismaClient> = mockDeep<PrismaClient>();
let produtoRepositorio: ProdutoPrismaRepository;
let UUIDValido: string;

describe('Repositório Prisma: Produto', () => {

    beforeAll(async () => {

        produtoRepositorio = new ProdutoPrismaRepository(prismaMock);
        UUIDValido = faker.string.uuid();

    });

    afterEach(() => {
        vi.restoreAllMocks();
        mockReset(prismaMock);
    });

    describe('Inserir Produto', () => {

        test('Deve Inserir Um Produto', async () => {

            const ProdutoPrisma = {
                id: UUIDValido,
                nome: 'nomeProduto',
                descricao: 'nomeDescricao',
                valor: 0,
                dataCriacao: faker.date.anytime(),
                dataAtualizacao: faker.date.anytime(),
                dataExclusao: faker.date.anytime(),
                status: StatusProduto.ATIVO,
                categorias: [
                    {
                        produtoId: '6aa136db-c181-46e8-8fc1-f052a13f6f0d',
                        categoriaId: '092c7771-3a08-4ef8-8456-80c0f4656372',
                        dataCriacao: faker.date.anytime(),
                        dataAtualizacao: faker.date.anytime(),
                        categoria: {
                            id: UUIDValido,
                            nome: '',
                            dataCriacao: faker.date.anytime(),
                            dataAtualizacao: faker.date.anytime()
                        }
                    },
                ]
            };

            prismaMock.produto.create.mockResolvedValue(ProdutoPrisma);

            const produto: Produto = ProdutoMap.fromPrismaModelToDomain(ProdutoPrisma)

            const produtoInserido = await produtoRepositorio.inserir(produto);

            expect(produtoInserido).toStrictEqual(produto)
            expect(prismaMock.produto.create).toHaveBeenCalledTimes(1);
            expect(prismaMock.produto.create).toBeCalledWith({
                data: {
                    id: produto.id,
                    nome: produto.nome
                }
            });
        });
    });
});
