const conversionTable = [
  {
    id: "Morphine_IV",
    medication: "Morphine",
    route: "IV",
    ratio: 10,
    label: "Morphine IV",
  },
  {
    id: "Morphine_Oral",
    medication: "Morphine",
    route: "Oral",
    ratio: 30,
    label: "Morphine oral",
  },
  {
    id: "Oxycodone_Oral",
    medication: "Oxycodone",
    route: "Oral",
    ratio: 20,
    label: "Oxycodone oral",
  },
  {
    id: "Hydromorphone_IV",
    medication: "Hydromorphone",
    route: "IV",
    ratio: 1.5,
    label: "Hydromorphone IV",
  },
  {
    id: "Hydromorphone_Oral",
    medication: "Hydromorphone",
    route: "Oral",
    ratio: 7.5,
    label: "Hydromorphone oral",
  },
];

const form = document.querySelector("#calculatorForm");
const currentDrugSelect = document.querySelector("#currentDrug");
const targetDrugSelect = document.querySelector("#targetDrug");
const currentDoseInput = document.querySelector("#currentDose");
const reductionRange = document.querySelector("#reductionRange");
const reductionNumber = document.querySelector("#reductionNumber");
const exampleButton = document.querySelector("#exampleButton");
const referenceTable = document.querySelector("#referenceTable");

const resultTitle = document.querySelector("#resultTitle");
const finalDose = document.querySelector("#finalDose");
const resultSentence = document.querySelector("#resultSentence");
const ivMorphineEquivalentOutput = document.querySelector("#ivMorphineEquivalent");
const rawTargetDoseOutput = document.querySelector("#rawTargetDose");
const reductionAppliedOutput = document.querySelector("#reductionApplied");

const formatDose = (value) => {
  if (!Number.isFinite(value)) {
    return "0";
  }

  if (value >= 100) {
    return value.toFixed(0);
  }

  if (value >= 10) {
    return value.toFixed(1).replace(/\.0$/, "");
  }

  return value.toFixed(2).replace(/0$/, "").replace(/\.0$/, "");
};

const findDrug = (id) => conversionTable.find((item) => item.id === id);

const optionMarkup = (item) =>
  `<option value="${item.id}">${item.label}</option>`;

const renderOptions = () => {
  const options = conversionTable.map(optionMarkup).join("");
  currentDrugSelect.innerHTML = options;
  targetDrugSelect.innerHTML = options;
  currentDrugSelect.value = "Hydromorphone_IV";
  targetDrugSelect.value = "Oxycodone_Oral";
};

const renderReferenceTable = () => {
  referenceTable.innerHTML = conversionTable
    .map(
      (item) => `
        <tr>
          <td>${item.medication}</td>
          <td>${item.route}</td>
          <td>${formatDose(item.ratio)} mg</td>
        </tr>
      `,
    )
    .join("");
};

const clampReduction = (value) => Math.min(75, Math.max(0, Number(value) || 0));

const syncReduction = (source) => {
  const value = clampReduction(source.value);
  reductionRange.value = value;
  reductionNumber.value = value;
};

const calculate = () => {
  const currentDrug = findDrug(currentDrugSelect.value);
  const targetDrug = findDrug(targetDrugSelect.value);
  const currentDose = Number(currentDoseInput.value);
  const reductionPercentage = clampReduction(reductionNumber.value);

  if (!currentDrug || !targetDrug || !Number.isFinite(currentDose) || currentDose < 0) {
    finalDose.textContent = "0";
    resultTitle.textContent = "Enter a valid dose";
    resultSentence.textContent =
      "Dose must be a non-negative number before the conversion can run.";
    ivMorphineEquivalentOutput.textContent = "0 mg";
    rawTargetDoseOutput.textContent = "0 mg";
    reductionAppliedOutput.textContent = `${reductionPercentage}% reduction`;
    return;
  }

  const ivMorphineEquivalent = (currentDose / currentDrug.ratio) * 10;
  const rawTargetDose = (ivMorphineEquivalent / 10) * targetDrug.ratio;
  const adjustedTargetDose = rawTargetDose * (1 - reductionPercentage / 100);

  resultTitle.textContent = `${targetDrug.label} target dose`;
  finalDose.textContent = formatDose(adjustedTargetDose);
  resultSentence.textContent =
    `Converted from ${formatDose(currentDose)} mg ${currentDrug.label.toLowerCase()} with ` +
    `${reductionPercentage}% incomplete cross-tolerance reduction.`;
  ivMorphineEquivalentOutput.textContent = `${formatDose(ivMorphineEquivalent)} mg`;
  rawTargetDoseOutput.textContent = `${formatDose(rawTargetDose)} mg`;
  reductionAppliedOutput.textContent = `${reductionPercentage}% reduction`;
};

form.addEventListener("submit", (event) => {
  event.preventDefault();
  calculate();
});

[
  currentDrugSelect,
  targetDrugSelect,
  currentDoseInput,
  reductionRange,
  reductionNumber,
].forEach((control) => {
  control.addEventListener("input", () => {
    if (control === reductionRange || control === reductionNumber) {
      syncReduction(control);
    }

    calculate();
  });
});

exampleButton.addEventListener("click", () => {
  currentDrugSelect.value = "Hydromorphone_IV";
  targetDrugSelect.value = "Oxycodone_Oral";
  currentDoseInput.value = "10";
  reductionRange.value = "25";
  reductionNumber.value = "25";
  calculate();
});

renderOptions();
renderReferenceTable();
calculate();
