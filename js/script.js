async function fetchAndRenderTables() {
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

      if (indicador.nome.includes("Erros Críticos")) {
        statusIcon = execucao <= meta ? '✅' : '❌'; // Se erros for 0, OK
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

  
  createTable('novoTrello-table', allData.novoTrello);
  createTable('prontuario-table', allData.prontuario);
  createTable('tutor-table', allData.tutor);
}


fetchAndRenderTables();
