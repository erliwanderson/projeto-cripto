# Visão Geral do Projeto
Este projeto é uma aplicação web para rastrear dados de criptomoedas. Ele fornece funcionalidades como visualização de detalhes de criptomoedas, busca por criptomoedas específicas e exibição de uma lista das principais criptomoedas por capitalização de mercado.

## Funcionalidades 

  - ### Página Inicial:

     - Exibe uma barra de pesquisa para buscar criptomoedas por símbolo.
     - Lista as principais criptomoedas por capitalização de mercado.
     - Cada criptomoeda na lista é clicável e redireciona para sua página de detalhes.

  - ### Página de Detalhes:
  
     - Exibe informações detalhadas sobre uma criptomoeda específica.
     - As informações incluem nome, símbolo, preço atual, capitalização de mercado, altos/baixos das últimas 24 horas e delta de 24 horas.
  
  - ### Página Não Encontrada:

     - Renderiza uma página 404 quando uma página solicitada não é encontrada.
     - Fornece um link para retornar à página inicial.

# Tecnologias Utilizadas
    
 - React.js: Utilizado para construir o front-end da aplicação.
 - React Router: Usado para roteamento entre diferentes páginas da aplicação.
 - Módulos CSS: Empregado para estilizar componentes individuais do React.
 - Fetch API: Utilizado para buscar dados da API de criptomoedas.
 - Internacionalização (Intl): Usado para formatar valores de moeda.


# Instalação

1- Clone o repositório:

    git clone https://github.com/erliwanderson/projeto-crypto.git
2- Navegue até p diretório do projeto:

    cd projeto-crypto

           
3- Instale as dependências:

    npm install     

4- Execulte a plicaçãp:

    npm run dev

# Uso

- Ao acessar a aplicação, você será direcionado para a página inicial, onde poderá ver uma lista das principais criptomoedas e buscar criptomoedas específicas usando a barra de pesquisa.

- Clicar em uma criptomoeda na lista irá redirecioná-lo para sua página de detalhes, onde você pode visualizar informações mais detalhadas.
- Se você navegar para uma página inexistente, será redirecionado para a página 404.
