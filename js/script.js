async function fetchAndRenderData() {
  const response = await fetch('data/data.json');
  const allData = await response.json();

  function createTable(elementId, projectData) {
    const tableElement = document.getElementById(elementId);
    let tableHTML = `
      <thead>
        <tr>
          <th>Indicador</th>
          <th>Meta</th>
          <th>Execução</th>
          <th>Status</th>
        </tr>
      </thead>
      <tbody>
    `;

    projectData.indicadores.forEach(indicador => {
      let statusIcon;
      const meta = indicador.meta;
      const execucao = indicador.execucao;

      if (indicador.nome.includes("Erros Críticos") || indicador.nome.includes("Estabilidade da Liderança") || indicador.nome.includes("Turnover de Liderança")) {
        statusIcon = execucao <= meta ? '✅' : '❌';
      } else if (execucao >= meta) {
        statusIcon = '✅';
      } else {
        statusIcon = '❌';
      }

      tableHTML += `
        <tr>
          <td>${indicador.nome}</td>
          <td>${indicador.meta}${indicador.unidade}</td>
          <td>${indicador.execucao}${indicador.unidade}</td>
          <td>${statusIcon}</td>
        </tr>
      `;
    });

    tableHTML += `</tbody>`;
    tableElement.innerHTML = tableHTML;
  }
  
  function createChart(elementId, projectData) {
      const labels = projectData.indicadores.map(i => i.nome);
      const metaData = projectData.indicadores.map(i => i.meta);
      const execucaoData = projectData.indicadores.map(i => i.execucao);
      
      const ctx = document.getElementById(elementId).getContext('2d');
      
      new Chart(ctx, {
          type: 'bar',
          data: {
              labels: labels,
              datasets: [
                  {
                      label: 'Meta',
                      data: metaData,
                      backgroundColor: '#FFC107'
                  },
                  {
                      label: 'Execução',
                      data: execucaoData,
                      backgroundColor: '#007BFF'
                  }
              ]
          },
          options: {
              responsive: true,
              scales: {
                  y: {
                      beginAtZero: true
                  }
              }
          }
      });
  }

  createTable('novoTrello-table', allData.novoTrello);
  createChart('novoTrello-chart', allData.novoTrello);

  createTable('prontuario-table', allData.prontuario);
  createChart('prontuario-chart', allData.prontuario);

  createTable('tutor-table', allData.tutor);
  createChart('tutor-chart', allData.tutor);

  createTable('marketing-table', allData.marketing);
  createChart('marketing-chart', allData.marketing);

  createTable('seguranca-table', allData.seguranca);
  createChart('seguranca-chart', allData.seguranca);

  createTable('requisitos-table', allData.requisitos);
  createChart('requisitos-chart', allData.requisitos);

  createTable('pmo-table', allData.pmo);
  createChart('pmo-chart', allData.pmo);
}

fetchAndRenderData();
