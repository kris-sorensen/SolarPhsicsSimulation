# **Kristopher Sorensen - Solar Thermal Water Heating Simulation**

Simulates the heat transfer from **solar thermal collectors** to a water storage tank over time.

---

## **Overview**

This function calculates the time required to heat a given mass of water from an **initial temperature** to a **target temperature** using a specified number of solar thermal collectors producing a fixed amount of energy. The calculation is based on the total energy output of the solar collectors and its effect on water temperature over discrete time steps until the target temperature is reached.

---

## **Assumptions and Limitations**

> **Note**: This simulation simplifies many real-world variables. Here are some key assumptions and limitations:

### 1. **Heat Loss**

This simulation **does not** account for heat loss, such as thermal dissipation through the tank walls or piping, and the gradual cooling of water over time. In a real-world system, these factors would increase the total time required to heat the water. These aspects are excluded here for simplicity and due to unknown variables (e.g., tank insulation, pipe material, ambient temperature).

### 2. **Constant Solar Power**

The simulation assumes a **constant power output** from the solar collectors. In reality, power output varies depending on factors like solar irradiance, weather conditions, time of day, and panel orientation. A more realistic model would include dynamic adjustments to the power input based on real-time solar data, but these variations are omitted here for simplicity.

### 3. **No Continuous Heating-Cooling Cycle**

This model only simulates a **single heating cycle** until the target temperature is reached. Real systems experience continuous heating and cooling, especially during day-night cycles, and use insulated storage tanks to maintain temperature. This complexity is not included to keep the simulation straightforward.

### 4. **Automated Control**

In practical applications, solar water heating systems use **sensors and automated controls** to manage heating. For example, temperature sensors in the storage tank can trigger pumps when the solar collectors reach a certain temperature or shut them off when the target temperature is met, preventing overheating and unnecessary energy consumption. This simulation does not include these automated mechanisms due to its simplicity.

### 5. **Water Mixing**

The simulation assumes **uniform heating** throughout the entire tank. In reality, water tanks may experience temperature gradients (stratification), where the temperature varies from the top to the bottom of the tank, affecting heating efficiency. These gradients are not modeled here for simplicity and to avoid simulating complex fluid dynamics.

---

## **Notes**

- The model is designed to be a **simplified version** of a solar water heating system, focusing solely on the heat transfer process.
- For a more comprehensive simulation, one would need to incorporate real-world variables such as **weather data**, **tank insulation properties**, and **automated control mechanisms**.
