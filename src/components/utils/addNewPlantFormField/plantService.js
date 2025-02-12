import axios from "axios";
import { debounce } from "lodash";

export const addPlant = debounce(async (plantData, resetForm) => {
  try {
    await axios.post("/api/plants", plantData);
    alert("Plant added successfully!");
    resetForm(); // Reset form after submission
  } catch (error) {
    console.error("Error adding plant:", error);
  }
}, 500); // Debounce for 500ms
