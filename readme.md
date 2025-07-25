<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Dicas de React Native</title>
  </head>
      <h1>Dicas de React Native</h1>
      <h2>Instalação dos pacotes do projeto</h2>
      <h3>Usando o EXPO:</h3>

      <p>✅ Passo 1: Criar o projeto</p>
      <p>No terminal, execute:</p>
      <code> npx create-expo-app aula -t </code><br /><br />
      <li>Isso cria um novo projeto chamado aula</li>

      <li>
        "-t" ativa o assistente para escolher o template (você escolheu "Blank")
      </li>

      <li>
        O comando baixa os arquivos e instala as dependências automaticamente
      </li>

      <p>✅ Passo 2: Acessar o projeto</p>
      <p>Entre na pasta do projeto:</p>
      <code>cd aula</code>
      <p>✅ Passo 3: Iniciar o projeto</p>
      <p>Inicie o servidor de desenvolvimento:</p>
      <code>npx expo start</code>
      Isso abrirá o Expo DevTools no navegador e exibirá um QR Code.
      <p>✅ Passo 4: Emular no celular</p>
      <ol>
        <li>Instale o app Expo Go no seu celular (se ainda não tiver).</li>
        <li>Conecte o celular e o computador à mesma rede Wi-Fi.</li>
        <li>Abra o Expo Go e escaneie o QR Code gerado.</li>
        <li>O app será carregado no seu celular em tempo real.</li>
      </ol>

      <p>🔄 Dica: Se o app antigo aparecer no Expo Go</p>
      <p>
        Use o comando abaixo para forçar a limpeza do cache e carregar o novo
        projeto:
      </p>
      <code>npx expo start --clear</code>
      <p>📁 Estrutura básica do projeto criado:</p>
      <li>App.js: ponto de entrada do seu app</li>
      <li>package.json: configurações e dependências</li>
      <li>node_modules/: pacotes instalados</li>
      <li>.gitignore, babel.config.js: arquivos de configuração</li>

</html>
