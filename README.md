# Projeto Educacional: **Github Wiki Explorer**

### Atividade proposta no curso: _Formação React Developer_

**_Desenvolvido por:_** _Thiago de Oliveira Miranda_.&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;[Github](https://github.com/ThiagoOMiranda)&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;[LinkedIn](https://www.linkedin.com/in/thiago-de-oliveira-miranda-5393181a7/)

_Página da aplicação:_ [Github Wiki](https://thiagoomiranda.github.io/github-wiki/).

<br>

### **Sumário:**

- <a href="#escopo">Escopo do Projeto</a>
- <a href="#conhecimento">Conhecimento Aplicado</a>
- <a href="#resultado">Resultado Obtido</a>
- <a href="#licença">Licença</a>

<br>

### `Escopo do Projeto` <a name="escopo"></a>

O projeto consiste em uma _single page application_ que realiza consultas na API de dados do Github e apresenta miniaturas dos resultados da busca de forma dinâmica.

<br>

### `Conhecimento Aplicado` <a name="conhecimento"></a>

- **_Axios:_** A biblioteca **_Axios_** é uma biblioteca de cliente HTTP que é usada para fazer solicitações HTTP a um servidor externo. No contexto do aplicativo, a biblioteca foi usada também para _setar_ a URL base para todas as solicitações HTTP através do recurso "_baseURL_", no qual cria um prefixo que é adicionado a todos os caminhos de URL fornecidos em cada solicitação.

- **_ShortId:_** A biblioteca **_ShortId_** é uma biblioteca JavaScript usada para gerar identificadores exclusivos e aleatórios. Ao contrário de outras bibliotecas de geração de identificadores, a ShortId gera identificadores curtos, mas únicos. Usado para gerar a _key_ dos itens listados.

- **React Hooks:**
  - _useCallback_: É um _Hook_ do React que é usado para memoizar funções e evitar a criação desnecessária de funções em cada renderização de um componente.

Exemplo da estrutura de uma função callback:

```
import React, { useCallback } from 'react';

const nomeDaFunção = useCallback(() => {
    //Ações da função.
}, [dependência]);
```

No contexto o _useCallback_ recebe duas dependências, na primeira é a função que você deseja memoizar e a segunda é uma lista de dependências. Isso significa que a função será atualizada apenas quando o estado da dependência for atualizado.

- _useEffect_: É um _Hook_ do React que é usado para executar efeitos colaterais (como buscar dados de uma API ou atualizar o título de uma página) após a renderização do componente. Ele é executado após cada renderização do componente e recebe uma função de retorno que é usada para limpar os efeitos colaterais quando o componente é desmontado.

Exemplo da estrutura de uso do hook _useEffect_:

```
import React, { useEffect } from 'react';

useEffect(() => {
    //Função de callback.
}
    //Outra função.
, [dependência]);
```

<br>

O _useEffect_ recebe uma função de callback como seu primeiro argumento, que será executada após a renderização do componente. Essa função pode retornar outra função que será usada para limpar os efeitos colaterais quando o componente for desmontado.
Pode receber como segundo argumento, um array de dependências, que especifica quais variáveis o efeito é dependente. Se alguma das variáveis de dependência mudar, o _useEffect_ será executado novamente. Caso o array de dependências esteja vazio, o _useEffect_ será executado apenas uma vez após a renderização inicial do componente.

<br>

- _useState_: É um _Hook_ do React que permite a um componente ter estado interno e reativo, ou seja, que pode ser atualizado e refletido automaticamente no renderizado do componente.

Ele é usado para declarar uma variável de estado no componente e retorna um array com dois elementos: o primeiro é o valor atual do estado e o segundo é uma função que permite atualizar o valor do estado. A função para atualizar o estado pode ser chamada de qualquer lugar do componente, e a atualização do estado fará com que o componente seja re-renderizado automaticamente.

Exemplo da estrutura de uso do hook _useState_:

```
import React, { useState } from 'react';

const [variavel, setVariavel] = useState(valorInicial);

function atualizaValor() {
    setVariavel = novoValor;
}
```

<br>

## `Resultado Obtido` <a name="resultado"></a>

### _UI da Aplicação_

<p align="center"><img width="100%" src="Readme_files\UI-result.png"/></p>
<p align="center"><i>Figura 01: Layout da página: versão desktop (esquerda) e versão mobile (direita)</i></p>

1. Input de texto para busca.
2. Botão de busca.
3. Item de resultado da busca.
4. Título e caminho do repositório.
5. Descrição do repositório.
6. Linguagens do repositório.
7. Links de redirecionamento.

<br>

## `Licença` <a name="licença"></a>

Este projeto está licenciado sob a Licença MIT. Consulte o arquivo LICENSE para obter mais informações.
