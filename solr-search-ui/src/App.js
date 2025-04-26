import React, { useState } from 'react';
import axios from 'axios';

function App() {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);

  const handleSearch = async (e) => {
    const searchText = e.target.value;
    setQuery(searchText);

    if (searchText.length > 2) {
      try {
        const response = await axios.get('http://localhost:5000/search', {
          params: { q: searchText }
        });
        setResults(response.data);
      } catch (error) {
        console.error('Error searching:', error);
      }
    } else {
      setResults([]);
    }
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.heading}>Lab by Syed Afaq</h2>
      <input
        type="text"
        value={query}
        placeholder="Search by title, author, or category"
        onChange={handleSearch}
        style={styles.searchInput}
      />

      <div style={styles.resultsContainer}>
        {results.length === 0 && query.length > 2 && (
          <p style={styles.noResultsText}>No results found.</p>
        )}
        {results.map((item, index) => (
          <div key={index} style={styles.resultItem}>
            <strong style={styles.title}>{item.title}</strong>
            <em style={styles.author}>{item.author}</em>
            <span style={styles.category}>{item.category}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

const styles = {
  container: {
    padding: '20px',
    fontFamily: 'Arial, sans-serif',
    backgroundColor: '#f1f3f6',  // Soft light grey background
    borderRadius: '8px',
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
    width: '100%',
    maxWidth: '600px',
    margin: '50px auto',
  },
  heading: {
    textAlign: 'center',
    color: '#4f5d75',  // Dark slate blue for the header
    fontSize: '24px',
    marginBottom: '20px',
  },
  searchInput: {
    padding: '12px',
    width: '100%',
    maxWidth: '400px',
    margin: '0 auto',
    borderRadius: '6px',
    border: '1px solid #e4e7ec',  // Light border
    backgroundColor: '#ffffff',  // Clean white background
    fontSize: '16px',
    outline: 'none',
    boxSizing: 'border-box',
    transition: 'border-color 0.3s',
  },
  searchInputFocus: {
    borderColor: '#70c7b2',  // Soft teal when focused
  },
  resultsContainer: {
    marginTop: '20px',
  },
  noResultsText: {
    color: '#ff6f61',  // Soft coral color for "No results" message
    fontStyle: 'italic',
    textAlign: 'center',
  },
  resultItem: {
    backgroundColor: '#ffffff',
    padding: '15px',
    marginBottom: '10px',
    borderRadius: '8px',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
    borderLeft: '5px solid #70c7b2',  // Teal-colored left border
  },
  title: {
    fontSize: '18px',
    fontWeight: 'bold',
    color: '#4f5d75',  // Dark slate blue for titles
  },
  author: {
    fontSize: '16px',
    color: '#6c757d',  // Medium gray for author
  },
  category: {
    display: 'block',
    fontSize: '14px',
    color: '#adb5bd',  // Lighter gray for category
    marginTop: '8px',
  },
};

export default App;
