/**
 * KRISTOPHER SORENSEN - PassiveLogic SOLAR SIMULATION
 *
 * Simulates the heat transfer from solar thermal collectors to a water storage tank over time.
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
