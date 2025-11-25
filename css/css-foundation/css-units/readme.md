# 📐 CSS – Unidades de Medida  
Guia completo e descritivo para estudos

As unidades de medida no CSS são essenciais para definir **proporções, tamanhos, espaçamentos e escalas** dentro da página. Entender como cada unidade funciona é fundamental para criar layouts responsivos, acessíveis e bem estruturados.

---

## 🔹 1. O que são CSS Units?

São valores usados para definir medidas em propriedades como:
- `width`
- `height`
- `font-size`
- `margin`
- `padding`
- `border`

Essas unidades podem ser **absolutas** ou **relativas**, dependendo de como se comportam no layout.

---

# 🔸 2. Unidades Absolutas

As unidades absolutas possuem valores fixos. Elas **não mudam** conforme o contexto do elemento, tamanho do navegador ou dispositivo, com exceção de questões de densidade de tela.

### Exemplos de unidades absolutas:
- **px** – pixels  
- **cm**, **mm** – medidas físicas (centímetro, milímetro)  
- **in** – polegadas  
- **pt**, **pc** – tipografia impressa  

---

## 📌 px — Pixel
É a unidade absoluta mais utilizada no CSS.

### Características
- Unidade fixa e previsível.
- Não depende do contexto do elemento pai ou root.

### Vantagens
- Precisão total.
- Perfeito para ajustes milimétricos.

### Desvantagens
- Não é responsivo por natureza.
- Pode prejudicar acessibilidade em fontes.

---

# 🔸 3. Unidades Relativas

As unidades relativas dependem de outros elementos, como:
- fonte pai (em)
- elemento root (rem)
- viewport (vw, vh)
- tamanho do pai (%)

São ideais para criar layouts dinâmicos e flexíveis.

---

## 🔹 3.1 Unidades baseadas em fonte

### **em**
Baseado no tamanho da fonte do **elemento pai**.

#### Vantagens
- Flexível para componentes.

#### Desvantagens
- Pode herdar valores em cascata e dobrar tamanhos involuntariamente (*em hell*).

---

### **rem**
Baseado no tamanho da fonte do **elemento root (`html`)**.

#### Vantagens
- Escalável e previsível.
- Excelente para responsividade.
- Muito recomendado para tamanhos de fonte, espaçamentos e grid.

#### Desvantagens
- Menos dependente do contexto local, podendo não ser ideal em alguns componentes isolados.

---

## 🔹 3.2 Unidades baseadas no viewport

### **vw** (viewport width)
1vw = 1% da largura da janela.

### **vh** (viewport height)
1vh = 1% da altura da janela.

#### Vantagens
- Ótimas para seções fullscreen e elementos responsivos.

#### Desvantagens
- Em mobile, o tamanho do viewport muda com a barra de navegação.

---

### **vmin** e **vmax**
- **vmin** = menor valor entre vw e vh  
- **vmax** = maior valor entre vw e vh  

Usados para elementos que precisam manter proporção independente da orientação da tela.

---

## 🔹 3.3 Percentual (%)

Baseia-se no tamanho **do elemento pai**.

#### Vantagens
- Perfeito para layouts fluidos.

#### Desvantagens
- Pode resultar em comportamentos imprevisíveis se o pai não tiver um tamanho claro definido.

---

# 🔸 4. Tabela: Quando usar e evitar

| Unidade | Vantagens | Desvantagens |
|--------|-----------|--------------|
| **px** | precisão máxima | pouco responsivo |
| **em** | escala pelo contexto | cascata excessiva |
| **rem** | previsível e acessível | depende do root |
| **%** | ótimo para layouts fluidos | depende totalmente do pai |
| **vw/vh** | perfeito para telas inteiras | instável no mobile |
| **vmin/vmax** | mantém proporção | pouco usado e pode confundir iniciantes |

---

# 🔸 5. Boas práticas recomendadas

- Prefira **rem** para tamanhos gerais de fontes e espaçamentos.  
- Use **px** apenas para linhas, bordas ou elementos que realmente exigem precisão.  
- Use **%** para larguras em layouts fluidos.  
- Combine unidades relativas para criar um layout responsivo sólido.  
- Evite usar **em** para fontes, a menos que queira que o tamanho dependa do contexto do elemento.  
- Em projetos modernos, um padrão comum é:
