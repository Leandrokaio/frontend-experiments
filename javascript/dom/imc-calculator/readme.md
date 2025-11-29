# 🧮 Calculadora de IMC

Este é um mini projeto de **calculadora de IMC (Índice de Massa Corporal)** desenvolvido com **HTML, CSS e JavaScript**.  
O objetivo é treinar manipulação do DOM, eventos, validação simples de formulários e exibição dinâmica de resultados na tela.

---

## 📝 Objetivo do Projeto
Esse projeto foi criado como um exercício prático para consolidar:
- Lógica básica de programação  
- DOM e eventos no JavaScript  
- Estilização e pequenos efeitos  
- Organização inicial de um mini projeto  

Ele serve como base para evoluções futuras e para compor um portfólio de aprendizado.

---

## 📌 Funcionalidades
- Entrada de **peso** e **altura**
- Cálculo automático do **IMC**
- Exibição da **categoria** do IMC (abaixo do peso, normal, sobrepeso, etc.)
- Feedback visual simples com mensagem na tela

---

## 🛠️ Tecnologias Utilizadas
- HTML5
- CSS3
- JavaScript (DOM)

---

## 📈 Pontos a Melhorar (para a versão no repositório *frontend-projects*)
Quando este projeto for migrado para o repositório de **projetos reais**, há alguns pontos importantes que poderão ser aprimorados:

### ✔️ **1. Refatorar a lógica do JavaScript**
- Separar melhor responsabilidades.
- Criar funções independentes, como:
  - `calcularIMC()`
  - `validarCampos()`
  - `categorizarIMC()`
  - `atualizarResultado()`
- Facilitar manutenção e leitura.

### ✔️ **2. Melhorar o fluxo do `addEventListener`**
Organizar a ordem dos passos ao clicar no botão:
1. Prevenir o envio padrão  
2. Pegar os dados da tela  
3. Validar  
4. Calcular  
5. Atualizar interface  
6. Exibir animações (opcional)

Isso deixa o código mais limpo e previsível.

### ✔️ **3. Adicionar animações**
- Suavizar o surgimento do resultado.
- Efeitos no botão ao clicar.
- Pequenas transições na mudança de estado.

### ✔️ **4. Melhorias no CSS**
- Implementar **variáveis CSS** para cores e tamanhos.
- Revisar estrutura e padronização.
- Futuramente adicionar **Bootstrap** ou **TailwindCSS** para:
  - Melhor responsividade  
  - Componentes mais elegantes  
  - Layout mais consistente

  ---

## 📌 Status
**Concluído (versão inicial)**  
📍 *Refatoração e melhorias planejadas para futuro upload no repositório* **frontend-projects**.