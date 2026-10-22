
const nominees = [
  {
    name: "Mr. Kwame Adu Gyamfi",
    position: "DCE",
    district: "Asante Akyem North",
    score: 88,
    remarks: "Outstanding performance"
  },
  {
    name: "Ms. Linda Serwaa Mensah",
    position: "MCE",
    district: "Tema Metropolitan",
    score: 82,
    remarks: "Satisfactory performance"
  },
  {
    name: "Mr. Emmanuel Tetteh",
    position: "DCE",
    district: "Ejisu",
    score: 76,
    remarks: "Satisfactory performance"
  },
  {
    name: "Ms. Rashida Sulemana",
    position: "MCE",
    district: "Kumasi Metropolitan",
    score: 68,
    remarks: "Needs improvement in key areas"
  },
  {
    name: "Mr. Isaac Mensah",
    position: "DCE",
    district: "Ga West",
    score: 61,
    remarks: "Meets minimum requirements"
  },
  {
    name: "Ms. Abena Owusuaa",
    position: "MCE",
    district: "Cape Coast Metropolitan",
    score: 54,
    remarks: "Did not meet the required threshold"
  },
  {
    name: "Mr. Felix Nkrumah",
    position: "DCE",
    district: "Sefwi Wiawso",
    score: 49,
    remarks: "Did not meet the required threshold"
  }
];

// Change these thresholds to match the official vetting criteria.
function getResult(score) {
  if (score >= 70) {
    return {
      label: "APPROVED",
      className: "approved"
    };
  }

  if (score >= 60) {
    return {
      label: "CONDITIONALLY APPROVED",
      className: "conditional"
    };
  }

  return {
    label: "NOT APPROVED",
    className: "rejected"
  };
}

function renderResults() {
  const body = document.getElementById("resultsBody");

  body.replaceChildren();

  nominees.forEach((nominee, index) => {
    const score = Number(nominee.score);

    if (!Number.isFinite(score) || score < 0 || score > 100) {
      return;
    }

    const result = getResult(score);
    const row = document.createElement("tr");

    const values = [
      index + 1,
      nominee.name,
      nominee.position,
      nominee.district,
      score,
      `${score}%`
    ];

    values.forEach(value => {
      const cell = document.createElement("td");
      cell.textContent = value;
      row.appendChild(cell);
    });

    // Result badge
    const resultCell = document.createElement("td");
    const badge = document.createElement("span");

    badge.className = `status ${result.className}`;
    badge.textContent = result.label;

    resultCell.appendChild(badge);
    row.appendChild(resultCell);

    // Remarks
    const remarksCell = document.createElement("td");
    remarksCell.textContent = nominee.remarks;
    row.appendChild(remarksCell);

    body.appendChild(row);
  });
}

renderResults();
