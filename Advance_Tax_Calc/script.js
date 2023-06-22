function calculateTax() {
  const section115bac = document.getElementById("section115bac").value;
  const netTaxableIncome = parseFloat(
    document.getElementById("netTaxableIncome").value
  );
  const creditUtilized = parseFloat(
    document.getElementById("creditUtilized").value
  );

  // Resetting the results
  document.getElementById("incomeTax").textContent = "";
  document.getElementById("surcharge").textContent = "";
  document.getElementById("educationCess").textContent = "";
  document.getElementById("secondaryCess").textContent = "";
  document.getElementById("totalTaxLiability").textContent = "";
  document.getElementById("relief").textContent = "";
  document.getElementById("assessedTax").textContent = "";

  // Calculation logic
  if (section115bac === "yes") {
    // Perform calculations for taxation under Section 115BAC
    // Add your custom logic here
    // Replace the calculations below with your own calculations

    const incomeTax = netTaxableIncome * 0.2; // Placeholder calculation
    const surcharge = incomeTax * 0.1; // Placeholder calculation
    const educationCess = incomeTax * 0.04; // Placeholder calculation
    const secondaryCess = incomeTax * 0.02; // Placeholder calculation

    const totalTaxLiability =
      incomeTax + surcharge + educationCess + secondaryCess;
    const relief = 0; // Placeholder value for relief
    const assessedTax = totalTaxLiability - creditUtilized;

    // Displaying the results
    document.getElementById("incomeTax").textContent = incomeTax.toFixed(2);
    document.getElementById("surcharge").textContent = surcharge.toFixed(2);
    document.getElementById("educationCess").textContent =
      educationCess.toFixed(2);
    document.getElementById("secondaryCess").textContent =
      secondaryCess.toFixed(2);
    document.getElementById("totalTaxLiability").textContent =
      totalTaxLiability.toFixed(2);
    document.getElementById("relief").textContent = relief.toFixed(2);
    document.getElementById("assessedTax").textContent = assessedTax.toFixed(2);
  } else {
    // Perform calculations for regular taxation
    // Add your custom logic here
    // You can add another if-else block for the regular taxation calculations
    // Replace the calculations below with your own calculations

    const incomeTax = netTaxableIncome * 0.3; // Placeholder calculation
    const surcharge = incomeTax * 0.15; // Placeholder calculation
    const educationCess = incomeTax * 0.04; // Placeholder calculation
    const secondaryCess = incomeTax * 0.02; // Placeholder calculation

    const totalTaxLiability =
      incomeTax + surcharge + educationCess + secondaryCess;
    const relief = 0; // Placeholder value for relief
    const assessedTax = totalTaxLiability - creditUtilized;

    // Displaying the results
    document.getElementById("incomeTax").textContent = incomeTax.toFixed(2);
    document.getElementById("surcharge").textContent = surcharge.toFixed(2);
    document.getElementById("educationCess").textContent =
      educationCess.toFixed(2);
    document.getElementById("secondaryCess").textContent =
      secondaryCess.toFixed(2);
    document.getElementById("totalTaxLiability").textContent =
      totalTaxLiability.toFixed(2);
    document.getElementById("relief").textContent = relief.toFixed(2);
    document.getElementById("assessedTax").textContent = assessedTax.toFixed(2);
  }

  var first = document.getElementById("first");
  var second = document.getElementById("second");
  var third = document.getElementById("third");
  var forth = document.getElementById("forth");

  first.textContent = netTaxableIncome * 0.15;
  second.textContent = netTaxableIncome * 0.3;
  third.textContent = netTaxableIncome * 0.3;
  forth.textContent = netTaxableIncome * 0.25;
}
