import { ref, computed } from "vue";

export default function useSearchedAndSortedNews(news) {
  const searchQuery = ref("");
  const searchedAndSortedNews = computed(() => {
    return news.value.filter((el) => {
      if (searchQuery != "") {
        if (el.author !== null) {
          return el.author
            .toLowerCase()
            .includes(searchQuery.value.toLowerCase());
        }
      }
      return el;
    });
  });

  return {
    searchQuery,
    searchedAndSortedNews,
  };
}
