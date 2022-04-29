import { ref, computed } from "vue";
export default function useSortedNews(news) {
  const minValue = ref("");
  const maxValue = ref("");
  const setSortedNews = computed(() => {
    return news.value.filter((el) => {
      if (minValue.value === "" && maxValue.value === "") {
        return el;
      } else if (
        new Date(el.publishedAt) > new Date(minValue.value) &&
        new Date(el.publishedAt) <= new Date(maxValue.value)
      ) {
        return el;
      }
    });
  });
  // console.log(setSortedNews);
  return { minValue, maxValue, setSortedNews };
}
