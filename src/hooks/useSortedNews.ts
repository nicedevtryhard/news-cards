import { ref, computed } from "vue";

export default function useSearchedNews(news: any): any {
  const searchQuery = ref("");
  const searchedNews = computed(() => {
    return news.value.filter((el: any) => {
      if (el.author !== null) {
        return el.author
          .toLowerCase()
          .includes(searchQuery.value.toLowerCase());
      }
    });
  });

  return {
    searchQuery,
    searchedNews,
  };
}
