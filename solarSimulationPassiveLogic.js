/**
 * KRISTOPHER SORENSEN
 *
 * Simulates the heat transfer from solar thermal collectors to a water storage tank over time.
 *
 * This function calculates the time required to heat a given mass of water from an initial temperature
 * to a target temperature using a specified number of solar thermal collectors producing a fixed amount of energy.
 * The calculation is based on the total energy output of the solar collectors and its effect on water temperature
 * over discrete time steps until the target temperature is reached.
 *
 * Notes:
 * - **Heat Loss:** This simulation does not account for heat loss, such as thermal dissipation through the tank walls
 *   or piping, and the gradual cooling of water over time. In a real-world system, these factors would increase the
 *   total time required to heat the water. These aspects are excluded here for simplicity and because there are many
 *   unknown variables (e.g., tank insulation, pipe material, ambient temperature) that would affect heat loss rates.
 * - **Constant Solar Power:** The simulation assumes a constant power output from the solar collectors. In reality,
 *   the power output varies depending on factors like solar irradiance, weather conditions, time of day, and panel orientation.
 *   A more realistic model would include dynamic adjustments to the power input based on real-time solar data, but these variations
 *   are omitted for simplicity and due to the difficulty in accurately modeling these unpredictable variables.
 * - **No Continuous Heating-Cooling Cycle:** This model only simulates a single heating cycle until the target temperature
 *   is reached. Real systems experience continuous heating and cooling, especially during day-night cycles, and use
 *   insulated storage tanks to maintain temperature. This complexity is not included in the simulation to keep it straightforward
 *   and due to the many unknowns in predicting cooling rates and operational schedules.
 * - **Automated Control:** In practical applications, solar water heating systems use sensors and automated controls
 *   to manage heating. For example, temperature sensors in the storage tank can trigger pumps when the solar collectors
 *   reach a certain temperature, or shut them off when the target temperature is met, preventing overheating and unnecessary
 *   energy consumption. This simulation does not include these automated mechanisms for simplicity and because they depend
 *   on a range of system-specific variables.
 * - **Water Mixing:** The simulation assumes uniform heating throughout the entire tank. In reality, water tanks may
 *   experience temperature gradients (stratification), where the temperature varies from the top to the bottom of the tank,
 *   affecting heating efficiency. These gradients are not modeled here for simplicity and due to the complexity of simulating
 *   fluid dynamics within the tank.
 *
 * @param {number} mass - The mass of the water in kilograms.
 * @param {number} specificHeat - The specific heat capacity of water in J/kg°C (default is 4186 J/kg°C for water).
 * @param {number} initialTemperature - The initial temperature of the water in degrees Celsius.
 * @param {number} targetTemperature - The desired target temperature of the water in degrees Celsius.
 * @param {number} numCollectors - The number of solar thermal collectors used.
 * @param {number} collectorPower - The power output of a single solar thermal collector in kilowatts.
 * @param {number} timeStep - The simulation time step in seconds (default is 60 seconds).
 * @returns {number} - The total time in seconds required to reach the target temperature.
 */
function simulateHeatTransfer(
  mass,
  specificHeat = 4186,
  initialTemperature,
  targetTemperature,
  numCollectors,
  collectorPower,
  timeStep = 60
) {
  // Initialize variables
  let currentTemperature = initialTemperature;
  let totalTime = 0;

  // Total power output of the solar collectors (converted to watts)
  const totalPowerOutput = numCollectors * collectorPower * 1000;

  // Run the simulation loop
  while (currentTemperature < targetTemperature) {
    // Calculate the energy transferred in this time step (q = P * timeStep)
    const energyTransferred = totalPowerOutput * timeStep; // in joules

    // Calculate the temperature increase (ΔT = q / (m * C))
    const temperatureIncrease = energyTransferred / (mass * specificHeat);

    // Update the current temperature
    currentTemperature += temperatureIncrease;

    // Increment the total simulation time
    totalTime += timeStep;

    // Safety check to avoid infinite loops in case of numerical issues
    if (temperatureIncrease <= 0) break;
  }

  return totalTime;
}

// Constants
const mass = 10000; // Mass of water in kg (10,000 liters)
const initialTemperature = 20; // Initial temperature in °C
const targetTemperature = 60; // Desired temperature in °C
const numCollectors = 25; // Number of solar thermal collectors
const collectorPower = 4; // Power output of each collector in kW
const timeStep = 60; // Time step in seconds (1 minute)

const totalTimeInSeconds = simulateHeatTransfer(
  mass,
  4186,
  initialTemperature,
  targetTemperature,
  numCollectors,
  collectorPower,
  timeStep
);

console.log(`Total time required: ${totalTimeInSeconds.toFixed(2)} seconds`);
console.log(
  `Total time required: ${(totalTimeInSeconds / 60).toFixed(2)} minutes`
);
console.log(
  `Total time required: ${(totalTimeInSeconds / 3600).toFixed(2)} hours`
);
