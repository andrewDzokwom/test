import React from 'react';
import './wicard.css';

const WicardManagement = () => {
  const wicards = [
    { product: 'Wicard Simple Blanc', user: 'Alicia Loris', email: 'alicia@gmail.com', url: 'wicard.fr/marta', creationDate: '12/01/2024', expirationDate: '' },
    { product: 'Wicard Classe Gold', user: 'Adam Dupont', email: 'adam@gmail.com', url: 'wicard.fr/adamdupont', creationDate: '12/01/2024', expirationDate: '' },
    // ... Add other entries here
  ];

  return (
    <div className="wicard-management">
      <header className="wicard-header">
        <div>
            <h1>Wicard <span role="img" aria-label="card">💳</span></h1>
            <p>Gérez les Wicards clients facilement et rapidement</p>
        </div>
        <div className="header-actions">
          <button className="btn">➕ Nouvelle Wicard</button>
          <button className="btn btn-primary"> ⚡ Activer une Wicard</button>
        </div>
      </header>
      <nav className="wicard-nav">
        <button className="nav-btn">Afficher tous</button>
        <button className="nav-btn">Wicard</button>
        <button className="nav-btn">QR Code</button>
        <button className="nav-btn">Social et Pet Tag</button>
        <input type="text" placeholder="Rechercher" className="search-input" />
        <select className="filter-select">
          <option>Aucun filtre</option>
          {/* Add more filter options here */}
        </select>
      </nav>
      <section className="results">
        <h2>Résultats : <span>2,953</span></h2>
        <table className="wicard-table">
          <thead>
            <tr>
              <th>Produit / Service</th>
              <th>Utilisateur</th>
              <th>URL</th>
              <th>Date de création</th>
              <th>Date d'expiration</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {wicards.map((wicard, index) => (
              <tr key={index}>
                <td>{wicard.product}</td>
                <td>
                  <img src={`https://www.w3schools.com/w3images/avatar2.png`} alt={wicard.user} className="user-avatar" />
                  <div>
                    <span>{wicard.user}</span>
                    <span className="user-email">{wicard.email}</span>
                  </div>
                </td>
                <td>{wicard.url}</td>
                <td>{wicard.creationDate}</td>
                <td>{wicard.expirationDate || '-'}</td>
                <td>
                  <button className="action-btn">👀</button>
                  <button className="action-btn">✏️</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className="pagination">
          <span>Page 1 sur 300</span>
          <button className="btn">Précédent</button>
          <button className="btn">Suivant</button>
        </div>
      </section>
    </div>
  );
};

export default WicardManagement;