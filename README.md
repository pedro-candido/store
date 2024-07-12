## Introdução

<p align="center">
<img src="https://github.com/pedro-candido/store/blob/master/src/assets/Logo-white.png?raw=true" />
</p>
Olá pessoal, espero que estejam muito bem!

Este projeto tem a intenção de validar meus conhecimentos perante o React Native.

## Tecnologias utilizadas

Segue lista das bibliotecas principais utilizadas no app para a realização:

- Expo
- TypeScript
- Axios
- Styled-components
- Google fonts
- FlashList
- Zustand
- jest

## Escolha das Libs

- Expo: foi escolhida para agilizar o desenvolvimento sendo uma recomendação do próprio react-antive utilizar um framework como expo.
- Axios: Foi escolhido o axios tendo em mente que é uma lib que tenho mais conhecimento, além de ser de fácil utilização.
- Styled-components: Foi escolhido o styled-components pois é a tecnologia de estilos que eu já utilizo no dia a dia, agilizando a parte de desenvolvimento.
- FlashList: Há alguns estudos referente a FlashList vs FlatList mostrando os ganhos de performance em momentos de renderização de listas. Exemplo: https://shopify.engineering/instant-performance-upgrade-flatlist-flashlist
- Zustand: Já possuo conhecimento com context, redux, redux saga, toolkit, e gostaria de finalizar um projeto com algo diferente, e olhando ao projeto do https://github.com/expo/react-conf-app, utilizei de inspiração para utilizar o zustand também!

## Arquitetura de Pastas

Atuei em alguns projetos durante minha carreira, com organizações diferentes, escolhi uma que se aproximasse ao máximo de uma estrutura que me agradasse, tudo separado ficando de fácil uso pra qualquer pessoa que entrasse e fosse utilizar o projeto.

```

├── src
│   ├── assets          # Assets folder for app icon and splashscreen
│   ├── types           # Types declarations to images .png.d.ts or .svg.d.ts
│   ├── assets          # Assets folder for icons, illustrations
│   ├── constants       # All constants reutilized
│   ├── components      # Components reutilized
│   ├── routes          # Navigation configuration
│   ├── screens         # Screens (can have or not a folder with specific components)
│   ├── api             # API creation
│   ├── hooks           # Hooks used on all project
│   ├── store           # Zustand stores
│   ├── stories         # StorybookContent
│   ├── theme           # Files to configure Tamagui tokens and fonts
│   ├── utils           # Utils methods
```

Segue imagem com conteúdo representado.

<img src="https://raw.githubusercontent.com/pedro-candido/store/b5c834e418cbfabd59480c9b569f4c28d27a0cd2/src/assets/organization.svg"/>

