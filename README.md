# Dashboard de Desempenho - Projetos BayArea

Este é um dashboard estático de indicadores de performance para os projetos do BayArea - Centro de Práticas Acadêmicas.
O objetivo é fornecer uma visualização clara e objetiva do desempenho de cada time, comparando metas e execuções em um único lugar.

O dashboard é ideal para acompanhamento rápido de KPIs (Key Performance Indicators) e é acessível publicamente através do GitHub Pages.

### 🔗 Acesse o Dashboard

Você pode acessar o dashboard público em:
https://aureliovieirarocha.github.io/

### ✨ Funcionalidades

* **Indicadores Padronizados:** Visualização de indicadores de performance padronizados para os projetos de Prontuário, Novo Trello, Tutor, Marketing, Requisitos, Segurança e PMO.
* **Visão Detalhada:** Exibição de tabelas com metas, valores de execução e status visual (✅ para meta atingida, ❌ para meta não atingida).
* **Gráficos Interativos:** Gráficos de barras que comparam visualmente a meta e a execução de cada indicador.
* **Tecnologias Simples:** Construído com HTML, CSS e JavaScript, tornando-o leve e de fácil manutenção.
* **Hospedagem Gratuita:** Publicado e mantido no GitHub Pages.

### 🛠️ Tecnologias Utilizadas

* **HTML5:** Para a estrutura da página.
* **CSS3:** Para a estilização e o design responsivo.
* **JavaScript:** Para a lógica de carregamento e manipulação dos dados.
* **Chart.js:** Biblioteca para a criação dos gráficos.

### 📁 Estrutura do Projeto

A organização dos arquivos segue uma estrutura simples e clara:

.
├── index.html          # A página principal do dashboard
├── README.md           # Este arquivo
├── css/
|  └── style.css       # Estilos visuais do dashboard
├── js/
|  └── script.js       # Lógica para criar tabelas e gráficos
└── data/
  └── data.json       # Fonte de dados com os indicadores e valores

### ⚙️ Como Atualizar os Dados

O dashboard é alimentado por um único arquivo, `data/data.json`. Para atualizar as informações dos projetos, basta seguir estes passos:

1.  Acesse o arquivo `data/data.json` no repositório.
2.  Clique no ícone de lápis (`✏️`) para editá-lo.
3.  Altere os valores de `execucao` ou `meta` para os indicadores desejados.
4.  Faça o **commit** da alteração. O GitHub Pages irá reconstruir e publicar o dashboard automaticamente em poucos minutos.

### ✍️ Autor

Este projeto foi desenvolvido pelo Time de PMO - BayArea/2025.
