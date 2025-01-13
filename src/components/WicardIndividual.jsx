import './wicardIndividual.css';

const WicardSimple = () => {
  return (
    <div className="wicard-simple">
      <header className="wicard-header">
        <div>
        <h1>Wicard Simple / Julien Dupont</h1>
        <p>Gérez vos produits facilement et rapidement</p>
        </div>
        <div className="header-actions">
          <img src="https://www.w3schools.com/w3images/avatar2.png" alt="Julien Dupont" className="user-avatar" />
          <button className="btn">Partager</button>
          <button className="btn btn-primary">Modifier</button>
        </div>
      </header>
      <div className="wicard-content">
        <div>

            <div className="wicard-card">
            <img src="https://t3.ftcdn.net/jpg/05/74/43/12/360_F_574431210_icdpLDlDxAfsNacnV56vIWb4pCRnaNBA.webp" alt="Wicard Design" className="card-image" />
            </div>
            <div className="wicard-stats">
            <nav className="tabs">
                <button className="tab active">Aperçu général</button>
                <button className="tab">Timeline</button>
            </nav>
            <div className="stats">
                <div className="stat-item">
                <span>Total des visites</span>
                <span>930</span>
                </div>
                <div className="stat-item">
                <span>Total des clics</span>
                <span>735</span>
                </div>
                <div className="stat-item">
                <span>Visites ce mois</span>
                <span>45 <span className="increase">▲ 39%</span></span>
                </div>
                <div className="stat-item">
                <span>Clics ce mois</span>
                <span>59 <span className="increase">▲ 25%</span></span>
                </div>
                <button className="btn btn-secondary">Afficher plus de statistiques</button>
            </div>
            </div>
        </div>
        <div className="profile-preview">
          <img src="https://www.w3schools.com/w3images/avatar2.png" alt="Profile Preview" className="mobile-preview" />
        </div>
      </div>
    </div>
  );
};

export default WicardSimple;