# 🕒 Relógio Digital — Mini Projeto em HTML, CSS e JavaScript

Este é um mini projeto desenvolvido para praticar **HTML**, **CSS** e **JavaScript**, com foco especial em **manipulação do DOM**, **uso de funções**, **objetos nativos do JavaScript** (como `Date`) e **lógica básica de programação**.

O projeto consiste em um **relógio digital funcional**, que atualiza automaticamente a cada segundo, exibindo horas, minutos e segundos com formatação de dois dígitos.

---

## 🚀 Tecnologias Utilizadas

- **HTML5**  
  Estrutura básica da página e elementos usados para exibir as horas.

- **CSS3**  
  Estilização simples para dar aparência de um relógio digital.

- **JavaScript (DOM + lógica)**  
  - Manipulação dos elementos da interface (`getElementById`, `textContent`);
  - Uso de `setInterval()` para atualizar o relógio a cada segundo;
  - Utilização do objeto `Date` para capturar horário atual do sistema;
  - Lógica condicional para formatação de dígitos.

---

## 📌 Como Funciona o Relógio

O JavaScript executa estes passos:

1. Captura os elementos HTML que exibem as horas, minutos e segundos.
2. Usa `setInterval()` para rodar uma função repetidamente a cada 1 segundo.
3. A função:
   - Cria uma nova instância de `Date()` para obter a hora atual.
   - Extrai `hours`, `minutes` e `seconds`.
   - Adiciona um zero à esquerda quando necessário.
   - Atualiza o conteúdo HTML dinamicamente.

Esse fluxo cria um relógio digital em tempo real.

---

## 🔧 Possíveis Melhorias

Aqui estão ideias para evoluir o projeto e continuar praticando:

## 📈 Funcionalidades

- Adicionar AM/PM e opção para alternar entre formato 12h e 24h.

- Criar um botão para alternar temas (modo claro/escuro).

- Adicionar data atual (dia, mês e ano).

- Incluir um cronômetro ou contador regressivo usando a mesma lógica.

## 🎨 Estilo

- Criar uma interface modernizada com glassmorphism, neumorphism ou dark mode.

- Adicionar animações suaves quando os números mudam.

- Aplicar fontes digitais para parecer relógio LED.

## ⚙️ Refatoração de Código

- Separar responsabilidades em funções menores;

- Criar um módulo JS dedicado ao relógio (caso o projeto cresça);

- Utilizar const e let seguindo boas práticas de escopo;

- Usar destructuring caso queira deixar o código mais limpo;

- Remover duplicação criando funções reutilizáveis.

---

## 🧠 O que Aprendi Nesse Projeto

- Como funciona o setInterval e por que ele é perfeito para atualizações automáticas.

- Como utilizar o objeto Date do JavaScript.

- Como manipular o DOM de forma prática.

- Como formatar números e trabalhar com condicionais simples.

- Como estruturar um mini projeto do zero usando HTML + CSS + JS.