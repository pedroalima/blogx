# BlogX

Desenvolvi uma aplicação de página única (SPA) de blog que consome uma fakeAPI (JSONPlaceholder). Embora não seja possível criar, editar ou excluir artigos de fato, a aplicação simula essas ações, tendo como finalidade principal praticar o uso dos métodos HTTP (GET, POST, PUT, DELETE) por meio da biblioteca Axios.

O projeto é de minha autoria e foi inspirado em outras aplicações existentes, adaptando seus designs e recursos. A aplicação foi construída utilizando as tecnologias TypeScript, React, Styled Components e Material-UI (MUI). Estou satisfeito com o resultado alcançado: 💻<https://blogx-flame.vercel.app/>.

![#](./public/Frame.png)

</br>

## 🎯 Objetivos

> - Ver o layout ideal para a interface de acordo com o tamanho de tela do seu dispositivo
> - Ver os estados de "hover" e "focus" para todos os elementos interativos na página
> - Simular a criação, edição e exclusão de artigos

Com o principal objetivo de criar um repositório de prática de uso dos métodos HTTP (GET, POST, PUT, DELETE) por meio da biblioteca Axios, utilizando a fakeAPI JSONPlaceholder.

</br>

## 🔧 Propriedades e Tecnologias

> - Vite
> - TypeScript
> - React
> - React Router DOM v6
> - React Context API
> - Styled Components
> - Axios
> - Material-UI (MUI)
> - FakeAPI (JSONPlaceholder)

</br>

## 🧠 Meu aprendizado

> - Axios
> - Styled Components
> - Material-UI (MUI)

O Axios é um cliente HTTP amplamente utilizado para realizar requisições de rede em ambientes JavaScript, tanto no navegador quanto em plataformas de servidor como o Node.js. Reconhecido por sua simplicidade e eficiência, o Axios simplifica a comunicação entre aplicativos e servidores, oferecendo uma interface amigável para enviar solicitações HTTP, lidar com respostas e gerenciar interceptadores de requisição e resposta.

React.ts:
![#](./public/axios.png)

Conforme sua documentação recomenda, é boa prática criar uma instancia de configuração. O método "create" possibilita configurar alguns padrões como baseURL e headers, assim evitando repetição de código e nos permitindo trabalhar apenas com os endpoints. No exemplo acima, nomeamos a instancia de "blogAxios".

![#](./public/axios1.png)

Assim, conforme chamamos "blogAxios", temos acesso aos métodos GET, POST, PUT, DELETE, etc... Sendo necessário passar como argumento o endpoint, e em alguns métodos o objeto corpo para alterações.

[saiba mais!](https://axios-http.com/ptbr/docs/config_defaults)

</br>