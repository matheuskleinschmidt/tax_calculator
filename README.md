# tax_calculator

## Sobre o projeto 

Para entender sobre o projeto vamos começar falando sobre o Deno é um ambiente de tempo de execução para JavaScript e TypeScript que oferece segurança, produtividade e desempenho, além de uma série de recursos úteis para desenvolvedores de aplicativos. Ele inclui um sistema de gerenciamento de pacotes, suporte a módulos ES nativos, um mecanismo de execução assíncrona e muito mais.

O Prisma.ts é uma biblioteca de mapeamento de objeto-relacional (ORM) para TypeScript que permite aos desenvolvedores interagir com bancos de dados de forma mais fácil e intuitiva. Ele fornece uma API de alto nível para criar, consultar, atualizar e excluir registros, bem como suporte para transações, agrupamentos, paginação e muito mais.

O Neom, por sua vez, é um banco de dados em grafo que permite modelar dados de maneira mais flexível e eficiente do que os bancos de dados relacionais tradicionais. Ele usa a linguagem Cypher para consultar e manipular dados e fornece recursos avançados, como índices em tempo real, consultas em tempo real e suporte para escalabilidade horizontal.

Com essas três ferramentas em mãos, podemos criar uma API para armazenar informações sobre o cálculo de impostos do Simples Nacional. Por exemplo, podemos criar um modelo de dados para representar as informações relevantes, como o valor da receita bruta, o percentual do imposto e o valor a ser pago. Podemos então usar o Prisma.ts para interagir com o banco de dados, criar, ler, atualizar e excluir registros.

Além disso, podemos usar o Neom para modelar relacionamentos entre as entidades, como as relações entre os valores da receita bruta e os percentuais do imposto. Isso nos permite consultar e manipular dados de forma mais poderosa e flexível do que seria possível com um banco de dados relacional tradicional.

Por fim, podemos usar o Deno para criar uma API RESTful para expor as funcionalidades da nossa aplicação. Isso nos permite criar endpoints para criar, ler, atualizar e excluir registros, além de consultar dados e executar outras operações. Podemos usar bibliotecas como o Oak para simplificar o processo de criação de rotas e middleware.

Em resumo, uma API construída com Deno, Prisma.ts e Neom para armazenar informações sobre o cálculo de impostos do Simples Nacional oferece uma série de vantagens em relação a outras tecnologias. Ela é mais segura, produtiva, flexível e eficiente, o que nos permite criar aplicativos mais poderosos e escaláveis com menos esforço.

### Links úteis

Documentação: [Documentação](https://catolicasc-my.sharepoint.com/:w:/g/personal/jonas02_silva_catolicasc_edu_br/EV8QEyhepDxNpLjpQMFMr1gBrv4pIzO94v2YLjw7JyfI8g?e=29Vnj2)
\
Canvas: [Canvas](https://www.canva.com/design/DAFetwcjUuE/xP5Nq89P-g_viNyDR7kcDA/edit?utm_content=DAFetwcjUuE&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton)
\
Link do Mockup no Figma: [Figma](https://www.figma.com/file/b858TyEGnkO3Y6PymonFtk/Untitled?node-id=0%3A1&t=oqioCtZku9452n1a-1)


## Modelo de entidade relacional

![alt text](https://github.com/matheuskleinschmidt/tax_calculator/blob/main/mer.jpg)

# Informações para o desenvolvimento

## Sobre como executar o projeto

O Deno.js simplifica o processo de desenvolvimento é através da eliminação da necessidade de executar vários comandos para iniciar um aplicativo, já que o Deno.js fornece uma única linha de comando para executar a aplicação.

Além disso, o Deno.js possui um sistema de gerenciamento de pacotes integrado, o que significa que os desenvolvedores não precisam instalar ferramentas de terceiros, como o npm, para adicionar bibliotecas e módulos aos seus projetos. O Deno.js também tem uma arquitetura segura por padrão, o que significa que os desenvolvedores podem confiar na segurança do código que estão escrevendo, sem a necessidade de configurar recursos de segurança adicionais. Em resumo, o Deno.js simplifica o processo de desenvolvimento ao fornecer uma plataforma completa e segura para a criação de aplicativos JavaScript.

### Porta que o projeto vai usar

http://localhost:8080/

### Comandos 

#### Para executar a aplicação
deno run --allow-read --allow-net --allow-env app.ts

#### Para executar a aplicação em modo de desenvolvimento
denon run --allow-read --allow-net --allow-env app.ts

## Rotas disponiveis 

#### get  "/teste"

#### get  "/"

#### get  "/dinosaur"

#### get  "/opa"

#### get  "/dinosaur/:id"

#### post  "/dinosaur"
body: name, description

#### post "/type"
body: name, description

#### post  "/range"
body: rangeName, rangeDescription, typeId

#### post "/taxation"
body: taxationName, taxationValue, isPercentage, isDividedOneHundred,rangeId
