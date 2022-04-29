import { computed } from "vue";
export default function useSortedNews(news) {
  const setDateQuery = computed(() => {
    return news.value.map((el) => {
      return el.publishedAt;
    });
  });
  return { setDateQuery };
}
