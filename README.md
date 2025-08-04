<img src="./assets/readme/Thumbnail.png">

# Formulário de Matrícula 📄

Este projeto é um formulário de matrícula desenvolvido com HTML e CSS puro. Seu objetivo é simular o preenchimento de dados pessoais e escolares de um aluno para fins de matrícula.

🚧 **Responsividade ainda será implementada.**

---

## 📌 Funcionalidades

- Formulário completo com campos pessoais, escolares e de contato
- Uso de elementos semânticos do HTML5
- Estilização com CSS
- Layout simples e intuitivo

---

## 🌐 Acesso ao Projeto

- [Visualizar online](https://emersonromana.github.io/formulario-matricula/)
- [Repositório no GitHub](https://github.com/EmersonRomana/formulario-matricula)

---

## 🧱 Estrutura do Projeto

```
formulario-matricula/
├── index.html
└── style.css
```

---

## 🧾 Descrição dos Elementos HTML e Atributos

### 📄 `index.html`

- `<!DOCTYPE html>` — Define o tipo de documento como HTML5.
- `<html lang="pt-br">` — Define o idioma do conteúdo da página.
- `<head>`
  - `<meta charset="UTF-8">` — Define a codificação de caracteres como UTF-8.
  - `<meta name="viewport" content="width=device-width, initial-scale=1.0">` — Garante o ajuste do layout em dispositivos móveis.
  - `<title>` — Define o título exibido na aba do navegador.
  - `<link rel="stylesheet" href="style.css">` — Importa o arquivo CSS externo.

### 🧍‍♂️ Corpo do Formulário (`<body>`)

#### `<form>`

- `action="#"` — Define o destino dos dados enviados (placeholder).
- `method="post"` — Define o método de envio como POST.

#### Campos:

- `<fieldset>` — Agrupa elementos relacionados em blocos visuais.
- `<legend>` — Descreve o conteúdo do grupo de campos.

##### Campos com `<label>` + `<input>`

- `type="text"` — Entrada de texto comum (nome, cidade, etc.)
- `type="number"` — Aceita apenas números (ex: número da casa)
- `type="email"` — Entrada para email (validação automática)
- `type="tel"` — Entrada para telefone
- `type="date"` — Seletor de data de nascimento
- `required` — Torna o preenchimento obrigatório
- `placeholder` — Texto de dica dentro do campo
- `id` — Identificador único do campo (ligado ao `label` via `for`)
- `name` — Nome da variável que será enviada ao backend

##### `<select>`

- Permite a escolha de uma opção de uma lista (ex: série, estado)
- `<option>` — Cada item da lista
- `selected` — Define a opção inicial
- `value` — Valor enviado ao backend

##### `<textarea>`

- Campo de texto longo para observações ou descrições.
- `rows`, `cols` — Controlam tamanho visual
- `placeholder` — Dica de preenchimento

##### `<button type="submit">`

- Envia o formulário

---

## 🎨 CSS - `style.css`

- Uso de reset com `margin: 0; padding: 0; box-sizing: border-box;`
- Estilização dos campos com bordas arredondadas, cores suaves e espaçamento consistente
- Centralização do formulário
- Definição de fonte e espaçamento interno

---

## 📅 Melhorias Futuras

- ✅ Implementar responsividade para telas menores
- 🔒 Adicionar validação extra com JavaScript
- 🎨 Melhorar o design visual e feedback ao usuário

---

## 🤝 Contribuições

Sinta-se à vontade para abrir issues, forks ou pull requests. Toda ajuda é bem-vinda!

---

## 📧 Contato

Desenvolvido por Emerson Romana  
[GitHub](https://github.com/EmersonRomana)

<img src="./assets/readme/cover-end.jpg">
