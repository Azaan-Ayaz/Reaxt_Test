import { useMemo } from 'react';

export const useSortedAndFilteredItems = (items, searchQuery, sortOrder) => {
  return useMemo(() => {
    // Filter by search query
    let filteredItems = items.filter(item =>
      item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.content.toLowerCase().includes(searchQuery.toLowerCase())
    );

    // Sort by order
    if (sortOrder === 'alphabetical') {
      filteredItems.sort((a, b) => a.title.localeCompare(b.title));
    } else if (sortOrder === 'date') {
      filteredItems.sort((a, b) => new Date(b.date) - new Date(a.date));
    }

    return filteredItems;
  }, [items, searchQuery, sortOrder]);
};
