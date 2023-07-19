## Rick and Morty API

Esta API fornece acesso aos dados da série animada Rick and Morty. Os dados incluem personagens, episódios, locais e muito mais.

- Usando a API

Para usar a API, você precisará de uma chave de API. Você pode obter uma chave de API criando uma conta no site da API.

Depois de ter uma chave de API, você pode usar o seguinte formato de URL para acessar os dados:

https://rickandmortyapi.com/api/v1/[endpoint]?api_key=[key]

Por exemplo, para recuperar a lista de todos os personagens, você usaria o seguinte URL:

https://rickandmortyapi.com/api/v1/characters?api_key=[key]

### Endpoints

A API oferece os seguintes endpoints:

    personagens - Lista de todos os personagens
    episódios - Lista de todos os episódios
    locais - Lista de todos os locais
    citações - Lista de todas as citações
    personagens/[id] - Detalhes do personagem
    episódios/[id] - Detalhes do episódio
    locais/[id] - Detalhes do local

### Parâmetros de consulta

A API aceita os seguintes parâmetros de consulta:

    api_key - Sua chave de API
    page - O número da página a ser retornada
    per_page - O número de registros por página

### Exemplos

Aqui estão alguns exemplos de como usar a API:

    Recuperar a lista de todos os personagens:

https://rickandmortyapi.com/api/v1/characters?api_key=[key]

    Recuperar a lista de todos os episódios:

https://rickandmortyapi.com/api/v1/episodes?api_key=[key]

    Recuperar a lista de todos os locais:

https://rickandmortyapi.com/api/v1/locations?api_key=[key]

    Recuperar a lista de todas as citações:

https://rickandmortyapi.com/api/v1/quotes?api_key=[key]

    Recuperar detalhes do personagem:

https://rickandmortyapi.com/api/v1/characters/1?api_key=[key]

    Recuperar detalhes do episódio:

https://rickandmortyapi.com/api/v1/episodes/1?api_key=[key]

    Recuperar detalhes do local:

https://rickandmortyapi.com/api/v1/locations/1?api_key=[key]

### Licença

A API é licenciada sob a licença MIT.
