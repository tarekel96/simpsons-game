import axios from "axios";

export default {
  fetchScores: async () => {
    try {
      const results = await axios.get("/api/userscore");
      return results.data;
    } catch (e) {
      throw e;
    }
  },
};
