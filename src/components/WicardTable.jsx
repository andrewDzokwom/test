import { useState, useEffect } from 'react';
import './wicardTable.css'; // Import the CSS file

function WicardTable() {
  const [wicards, setWicards] = useState([]);

  useEffect(() => {
    // Generate random Wicard data (replace with your actual API call)
    const generateRandomWicards = () => {
      const randomWicards = [];
      for (let i = 0; i < 10; i++) { // Generate 10 random Wicards
        randomWicards.push({
          id: i + 1,
          name: `Wicard ${i + 1}`,
          url: `https://example.com/wicard${i + 1}`,
          purchaseDate: new Date().toISOString().slice(0, 10), // Get current date
          expirationDate: new Date(new Date().getTime() + 365 * 24 * 60 * 60 * 1000).toISOString().slice(0, 10), // Get date one year from now
        });
      }
      return randomWicards;
    };

    setWicards(generateRandomWicards());
  }, []);

  return (
    <div className="wicard-table-container">
      <h2>Wicards</h2>
      <table>
        <thead>
          <tr>
            <th>Produit/Service</th>
            <th>URL</th>
            <th>Date d'achat</th>
            <th>Date d'expiration</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {wicards.map((wicard) => (
            <tr key={wicard.id}> 
              <td>{wicard.name}</td>
              <td><a href={wicard.url} target="_blank" rel="noopener noreferrer">{wicard.url}</a></td>
              <td>{wicard.purchaseDate}</td>
              <td>{wicard.expirationDate}</td>
              <td>
                <button>Modifier</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default WicardTable;