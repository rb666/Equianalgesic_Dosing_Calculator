const ORAL_MORPHINE_FOR_TEN_MG_IV_MORPHINE = 25;

const conversionOptions = [
  {
    id: "Morphine_IV",
    medication: "Morphine",
    route: "IV",
    referenceDose: 10,
    doseUnit: "mg",
    oralMorphineEquivalent: 25,
    label: "Morphine IV",
    targetable: true,
  },
  {
    id: "Morphine_Oral",
    medication: "Morphine",
    route: "Oral",
    referenceDose: 25,
    doseUnit: "mg",
    oralMorphineEquivalent: 25,
    label: "Morphine oral",
    targetable: true,
  },
  {
    id: "Oxycodone_Oral",
    medication: "Oxycodone",
    route: "Oral",
    referenceDose: 20,
    doseUnit: "mg",
    oralMorphineEquivalent: 25,
    label: "Oxycodone oral",
    targetable: true,
  },
  {
    id: "Hydromorphone_IV",
    medication: "Hydromorphone",
    route: "IV",
    referenceDose: 2,
    doseUnit: "mg",
    oralMorphineEquivalent: 25,
    label: "Hydromorphone IV",
    targetable: true,
  },
  {
    id: "Hydromorphone_Oral",
    medication: "Hydromorphone",
    route: "Oral",
    referenceDose: 5,
    doseUnit: "mg",
    oralMorphineEquivalent: 25,
    label: "Hydromorphone oral",
    targetable: true,
  },
  {
    id: "Meperidine_IV",
    medication: "Meperidine",
    route: "IV",
    referenceDose: 100,
    doseUnit: "mg",
    oralMorphineEquivalent: 25,
    label: "Meperidine IV",
    targetable: true,
  },
  {
    id: "Meperidine_Oral",
    medication: "Meperidine",
    route: "Oral",
    referenceDose: 300,
    doseUnit: "mg",
    oralMorphineEquivalent: 25,
    label: "Meperidine oral",
    targetable: true,
  },
  {
    id: "Fentanyl_Patch_12",
    medication: "Fentanyl",
    route: "Patch 12 mcg/hr",
    referenceDose: 12,
    doseUnit: "mcg/hr",
    oralMorphineEquivalent: 25,
    label: "Fentanyl patch 12 mcg/hr",
    targetable: false,
  },
  {
    id: "Fentanyl_IV",
    medication: "Fentanyl",
    route: "IV",
    referenceDose: 0.15,
    doseUnit: "mg",
    oralMorphineEquivalent: 25,
    label: "Fentanyl IV",
    targetable: true,
  },
  {
    id: "Hydrocodone_Oral",
    medication: "Hydrocodone",
    route: "Oral",
    referenceDose: 30,
    doseUnit: "mg",
    oralMorphineEquivalent: 25,
    label: "Hydrocodone oral",
    targetable: true,
  },
  {
    id: "Tramadol_IV",
    medication: "Tramadol",
    route: "IV",
    referenceDose: 100,
    doseUnit: "mg",
    oralMorphineEquivalent: 25,
    label: "Tramadol IV",
    targetable: true,
  },
  {
    id: "Tramadol_Oral",
    medication: "Tramadol",
    route: "Oral",
    referenceDose: 120,
    doseUnit: "mg",
    oralMorphineEquivalent: 25,
    label: "Tramadol oral",
    targetable: true,
  },
  {
    id: "Tapentadol_Oral",
    medication: "Tapentadol",
    route: "Oral",
    referenceDose: 100,
    doseUnit: "mg",
    oralMorphineEquivalent: 25,
    label: "Tapentadol oral",
    targetable: true,
  },
  {
    id: "Oxymorphone_IV",
    medication: "Oxymorphone",
    route: "IV",
    referenceDose: 1,
    doseUnit: "mg",
    oralMorphineEquivalent: 25,
    label: "Oxymorphone IV",
    targetable: true,
  },
  {
    id: "Oxymorphone_Oral",
    medication: "Oxymorphone",
    route: "Oral",
    referenceDose: 10,
    doseUnit: "mg",
    oralMorphineEquivalent: 25,
    label: "Oxymorphone oral",
    targetable: true,
  },
  {
    id: "Buprenorphine_Patch_5",
    medication: "Buprenorphine",
    route: "Patch 5 mcg/hr",
    referenceDose: 1,
    doseUnit: "patch",
    oralMorphineEquivalent: 15,
    label: "Buprenorphine patch 5 mcg/hr",
    targetable: false,
  },
  {
    id: "Buprenorphine_Patch_10",
    medication: "Buprenorphine",
    route: "Patch 10 mcg/hr",
    referenceDose: 1,
    doseUnit: "patch",
    oralMorphineEquivalent: 30,
    label: "Buprenorphine patch 10 mcg/hr",
    targetable: false,
  },
  {
    id: "Buprenorphine_Patch_20",
    medication: "Buprenorphine",
    route: "Patch 20 mcg/hr",
    referenceDose: 1,
    doseUnit: "patch",
    oralMorphineEquivalent: 48,
    label: "Buprenorphine patch 20 mcg/hr",
    targetable: false,
  },
];

const form = document.querySelector("#calculatorForm");
const calculationModeSelect = document.querySelector("#calculationMode");
const currentDrugSelect = document.querySelector("#currentDrug");
const targetDrugSelect = document.querySelector("#targetDrug");
const currentDoseInput = document.querySelector("#currentDose");
const currentDoseLabel = document.querySelector("#currentDoseLabel");
const currentDoseHint = document.querySelector("#currentDoseHint");
const targetField = document.querySelector("#targetField");
const reductionField = document.querySelector("#reductionField");
const reductionRange = document.querySelector("#reductionRange");
const reductionNumber = document.querySelector("#reductionNumber");
const exampleButton = document.querySelector("#exampleButton");
const mmeExampleButton = document.querySelector("#mmeExampleButton");
const referenceTable = document.querySelector("#referenceTable");

const resultTitle = document.querySelector("#resultTitle");
const finalDose = document.querySelector("#finalDose");
const finalUnit = document.querySelector("#finalUnit");
const resultSentence = document.querySelector("#resultSentence");
const oralMorphineEquivalentOutput = document.querySelector("#oralMorphineEquivalent");
const ivMorphineEquivalentOutput = document.querySelector("#ivMorphineEquivalent");
const targetStepLabel = document.querySelector("#targetStepLabel");
const rawTargetDoseOutput = document.querySelector("#rawTargetDose");
const reductionStep = document.querySelector("#reductionStep");
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

  return value.toFixed(3).replace(/0+$/, "").replace(/\.$/, "");
};

const findOption = (id) => conversionOptions.find((item) => item.id === id);

const optionMarkup = (item) =>
  `<option value="${item.id}">${item.label}</option>`;

const getDoseUnitLabel = (option) => {
  if (!option) {
    return "mg";
  }

  return option.doseUnit === "patch" ? "patch count" : option.doseUnit;
};

const getDoseDescription = (option, dose) => {
  if (option.doseUnit === "patch") {
    const noun = Number(dose) === 1 ? "patch" : "patches";
    return `${formatDose(dose)} ${noun} of ${option.route.toLowerCase()}`;
  }

  return `${formatDose(dose)} ${option.doseUnit} ${option.label.toLowerCase()}`;
};

const getReferenceDoseDescription = (option) => {
  if (option.doseUnit === "patch") {
    return `1 ${option.route.toLowerCase()}`;
  }

  return `${formatDose(option.referenceDose)} ${option.doseUnit}`;
};

const renderOptions = () => {
  currentDrugSelect.innerHTML = conversionOptions.map(optionMarkup).join("");
  targetDrugSelect.innerHTML = conversionOptions
    .filter((item) => item.targetable)
    .map(optionMarkup)
    .join("");
  currentDrugSelect.value = "Hydromorphone_IV";
  targetDrugSelect.value = "Oxycodone_Oral";
};

const renderReferenceTable = () => {
  referenceTable.innerHTML = conversionOptions
    .map(
      (item) => `
        <tr>
          <td>${item.medication}</td>
          <td>${item.route}</td>
          <td>${getReferenceDoseDescription(item)}</td>
          <td>${formatDose(item.oralMorphineEquivalent)} mg</td>
          <td>${item.targetable ? "Current or target" : "Current/MME only"}</td>
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

const getCurrentOralMorphineEquivalent = (currentOption, currentDose) =>
  (currentDose / currentOption.referenceDose) *
  currentOption.oralMorphineEquivalent;

const getIvMorphineEquivalent = (oralMorphineEquivalent) =>
  (oralMorphineEquivalent / ORAL_MORPHINE_FOR_TEN_MG_IV_MORPHINE) * 10;

const getTargetDose = (targetOption, oralMorphineEquivalent) =>
  (oralMorphineEquivalent / targetOption.oralMorphineEquivalent) *
  targetOption.referenceDose;

const setModeVisibility = () => {
  const isMMeMode = calculationModeSelect.value === "mme";
  targetField.classList.toggle("is-hidden", isMMeMode);
  reductionField.classList.toggle("is-hidden", isMMeMode);
};

const updateCurrentDoseHelp = () => {
  const currentOption = findOption(currentDrugSelect.value);
  const unitLabel = getDoseUnitLabel(currentOption);

  currentDoseLabel.textContent =
    unitLabel === "patch count" ? "Patch quantity" : "Dose to convert";
  currentDoseHint.textContent =
    unitLabel === "patch count" ? "Number of patches at the selected strength" : unitLabel;
  currentDoseInput.step = unitLabel === "patch count" ? "0.5" : "0.001";
  currentDoseInput.min = "0";

  if (unitLabel === "patch count" && Number(currentDoseInput.value) === 0) {
    currentDoseInput.value = "1";
  }
};

const setDefaultCurrentDose = () => {
  const currentOption = findOption(currentDrugSelect.value);

  if (!currentOption) {
    return;
  }

  currentDoseInput.value =
    currentOption.doseUnit === "patch" ? "1" : String(currentOption.referenceDose);
};

const showInvalidDose = (reductionPercentage) => {
  finalDose.textContent = "0";
  finalUnit.textContent = "mg";
  resultTitle.textContent = "Enter a valid dose";
  resultSentence.textContent =
    "Dose must be a non-negative number before the conversion can run.";
  oralMorphineEquivalentOutput.textContent = "0 mg";
  ivMorphineEquivalentOutput.textContent = "0 mg";
  rawTargetDoseOutput.textContent = "0 mg";
  reductionAppliedOutput.textContent = `${reductionPercentage}% reduction`;
};

const calculate = () => {
  setModeVisibility();
  updateCurrentDoseHelp();

  const currentOption = findOption(currentDrugSelect.value);
  const targetOption = findOption(targetDrugSelect.value);
  const currentDose = Number(currentDoseInput.value);
  const reductionPercentage = clampReduction(reductionNumber.value);
  const isMMeMode = calculationModeSelect.value === "mme";

  if (
    !currentOption ||
    (!isMMeMode && !targetOption) ||
    currentDoseInput.value.trim() === "" ||
    !Number.isFinite(currentDose) ||
    currentDose < 0
  ) {
    showInvalidDose(reductionPercentage);
    return;
  }

  const oralMorphineEquivalent = getCurrentOralMorphineEquivalent(
    currentOption,
    currentDose,
  );
  const ivMorphineEquivalent = getIvMorphineEquivalent(oralMorphineEquivalent);

  oralMorphineEquivalentOutput.textContent = `${formatDose(oralMorphineEquivalent)} mg`;
  ivMorphineEquivalentOutput.textContent = `${formatDose(ivMorphineEquivalent)} mg`;

  if (isMMeMode) {
    resultTitle.textContent = "Oral morphine equivalent";
    finalDose.textContent = formatDose(oralMorphineEquivalent);
    finalUnit.textContent = "mg MME";
    resultSentence.textContent =
      `${getDoseDescription(currentOption, currentDose)} converts to ` +
      `${formatDose(oralMorphineEquivalent)} mg oral morphine equivalent.`;
    targetStepLabel.textContent = "Target calculation";
    rawTargetDoseOutput.textContent = "Not applied";
    reductionStep.classList.add("is-hidden");
    return;
  }

  const rawTargetDose = getTargetDose(targetOption, oralMorphineEquivalent);
  const adjustedTargetDose = rawTargetDose * (1 - reductionPercentage / 100);

  resultTitle.textContent = `${targetOption.label} target dose`;
  finalDose.textContent = formatDose(adjustedTargetDose);
  finalUnit.textContent = targetOption.doseUnit;
  resultSentence.textContent =
    `Converted from ${getDoseDescription(currentOption, currentDose)} with ` +
    `${reductionPercentage}% incomplete cross-tolerance reduction.`;
  targetStepLabel.textContent = `Raw ${targetOption.label.toLowerCase()} dose`;
  rawTargetDoseOutput.textContent = `${formatDose(rawTargetDose)} ${targetOption.doseUnit}`;
  reductionAppliedOutput.textContent = `${reductionPercentage}% reduction`;
  reductionStep.classList.remove("is-hidden");
};

form.addEventListener("submit", (event) => {
  event.preventDefault();
  calculate();
});

[
  calculationModeSelect,
  currentDrugSelect,
  targetDrugSelect,
  currentDoseInput,
  reductionRange,
  reductionNumber,
].forEach((control) => {
  control.addEventListener("input", () => {
    if (control === currentDrugSelect) {
      setDefaultCurrentDose();
    }

    if (control === reductionRange || control === reductionNumber) {
      syncReduction(control);
    }

    calculate();
  });
});

exampleButton.addEventListener("click", () => {
  calculationModeSelect.value = "convert";
  currentDrugSelect.value = "Hydromorphone_IV";
  targetDrugSelect.value = "Oxycodone_Oral";
  currentDoseInput.value = "10";
  reductionRange.value = "25";
  reductionNumber.value = "25";
  calculate();
});

mmeExampleButton.addEventListener("click", () => {
  calculationModeSelect.value = "mme";
  currentDrugSelect.value = "Buprenorphine_Patch_20";
  currentDoseInput.value = "1";
  calculate();
});

renderOptions();
renderReferenceTable();
calculate();
