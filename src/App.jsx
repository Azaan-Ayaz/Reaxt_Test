import { useState } from 'react';
import { items } from './data';
import { useSortedAndFilteredItems } from './hooks/useSortedAndFilteredItems';

const App = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [sortOrder, setSortOrder] = useState('alphabetical');

  const sortedAndFilteredItems = useSortedAndFilteredItems(items, searchQuery, sortOrder);

  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-50 to-blue-100 flex items-center justify-center p-6">
      <div className="w-full max-w-4xl bg-white rounded-lg shadow-lg p-8">
        <h1 className="text-4xl font-extrabold text-blue-600 text-center mb-8">SortMate</h1>

        {/* Search Bar */}
        <div className="relative mb-6">
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="🔍 Search items by title or content..."
            className="w-full border border-gray-300 rounded-lg p-3 shadow-sm focus:outline-none focus:border-blue-500 focus:ring focus:ring-blue-200 transition-all duration-200"
          />
        </div>

        {/* Sort Controls */}
        <div className="flex justify-between items-center mb-8">
          <label className="text-lg font-semibold text-gray-700">Sort By:</label>
          <select
            value={sortOrder}
            onChange={(e) => setSortOrder(e.target.value)}
            className="border border-gray-300 p-3 rounded-lg shadow-sm focus:outline-none focus:border-blue-500 focus:ring focus:ring-blue-200 transition-all duration-200"
          >
            <option value="alphabetical">Alphabetical (A-Z)</option>
            <option value="date">Date (Newest First)</option>
          </select>
        </div>

        {/* Item List */}
        <ul className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {sortedAndFilteredItems.map((item) => (
            <li
              key={item.id}
              className="bg-blue-50 border border-blue-200 p-6 rounded-lg shadow-sm hover:shadow-lg transition-shadow duration-300 transform hover:scale-105"
            >
              <h2 className="text-xl font-semibold text-blue-700 mb-2">{item.title}</h2>
              <p className="text-gray-500 text-sm mb-3">
                {new Date(item.date).toLocaleDateString()}
              </p>
              <p className="text-gray-700">{item.content}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default App;
