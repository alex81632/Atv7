# Exemplo de formularios e rotas com Angular

Para rodar o front basta executar o comando `ng serve` e acessar a url `http://localhost:4200/` no navegador.

Para inciar o servidor basta executar o comando `node server.js`.

## Comparativo com a solução em React

#### Angular:
```
/
|-- src/
|   |-- app/
|       |-- app-routing.module.ts
|       |-- app.component.ts
|       |-- app.module.ts
|       |-- home/
|           |-- home.component.html
|           |-- home.component.css
|           |-- home.component.ts
|       |-- form/
|           |-- form.component.html
|           |-- form.component.css
|           |-- form.component.ts
|       |-- data.service.ts
|   |-- server.js
```

#### React:
```
/
|-- src/
|   |-- components/
|       |-- Home/
|           |-- Home.js
|           |-- Home.css
|       |-- Form/
|           |-- Form.js
|           |-- Form.css
|   |-- App.js
|   |-- index.js
|   |-- server.js
```

#### Comparativo:

Ambos possuem uma estrutura bem parecida, com a diferença que o Angular possui um arquivo de rotas e um arquivo de serviço. Além de que no React os componentes só possuem um arquivo, enquanto no Angular eles possuem um arquivo para cada tipo de arquivo (html, css e ts). O Angular já usa como padrão o TypeScript, isso pode ser positivo ou negativo dependendo do ponto de vista, mas no geral é uma boa prática.

O Angular embora tenha muitos arquivos para os componentes, ele tem um CLI que ajuda muito na criação de componentes, rotas, serviços, etc. O React não possui um CLI, mas existem ferramentas que ajudam na criação de componentes, como o `create-react-app`.
