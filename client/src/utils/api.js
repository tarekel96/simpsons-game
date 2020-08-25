import axios from "axios";

export default {
  fetchScores: async () => {
    try {
      const results = await axios.get("http://localhost:5000/api/userscore");
      return results.data;
    } catch (e) {
      throw e;
    }
  },
};
