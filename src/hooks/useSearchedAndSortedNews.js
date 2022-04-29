import { ref, computed } from "vue";

export default function useSearchedAndSortedNews(news) {
  const searchQuery = ref("");
  const searchedAndSortedNews = computed(() => {
    return news.value.filter((el) => {
      if (el.author !== null) {
        return el.author
          .toLowerCase()
          .includes(searchQuery.value.toLowerCase());
      }
    });
  });

  return {
    searchQuery,
    searchedAndSortedNews,
  };
}
