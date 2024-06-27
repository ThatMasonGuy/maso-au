import { ref, onMounted, watch } from 'vue';
import { useRouter, useRoute } from 'vue-router';

export function useHashNavigation(defaultTab, validTabs) {
  const router = useRouter();
  const route = useRoute();
  const activeTab = ref(defaultTab);

  const setTabFromHash = () => {
    const hash = window.location.hash.slice(1);
    if (validTabs.includes(hash)) {
      activeTab.value = hash;
    } else if (hash === '') {
      activeTab.value = defaultTab;
    }
  };

  const updateHash = (newTab) => {
    if (validTabs.includes(newTab)) {
      router.push({ hash: `#${newTab}` });
    }
  };

  onMounted(() => {
    setTabFromHash();
    window.addEventListener('hashchange', setTabFromHash);
  });

  watch(() => route.fullPath, setTabFromHash);

  return { activeTab, updateHash };
}