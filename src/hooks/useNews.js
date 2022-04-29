import axios from "axios";
import { ref, onMounted } from "vue";

export default function useNews() {
  let news = ref([]);
  const fetching = async () => {
    try {
      const response = await axios.get(
        "https://mocki.io/v1/a5814d24-4e22-49fc-96d1-0e9ae2952afc"
      );
      news.value = response.data.articles;
    } catch (e) {
      console.log(e);
    } finally {
    }
  };
  onMounted(fetching);
  return {
    news,
  };
}
