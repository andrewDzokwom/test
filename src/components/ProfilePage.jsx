import "./profilePage.css"

const ProfilePage = () => {
    return (
        <div className="container">
            {/* Header */}
            <header className="header">
                <div className="header-left">
                    <span className="header-title">Wicard Simple /</span>
                    <span className="header-name">Julien Dupont</span>
                </div>
                <div className="header-buttons">
                    <button className="btn btn-outline">Partager</button>
                    <button className="btn btn-primary">Modifier</button>
                </div>
            </header>

            <div className="content">
                {/* Left Column */}
                <div className="left-column">
        
                    <div className="card-preview">
                        <div className="wicard">
                            <div className="hexagon-pattern"></div>
                        </div>
                    </div>

                    {/* Stats */}
                    <div className="stats-card">
                        <div className="stats-header">
                            <span className="active">Aperçu général</span>
                            <span>Timeline</span>
                        </div>
                        <div className="stats-content">
                            <div className="stat-row">
                                <span>Total des visites</span>
                                <span>930</span>
                            </div>
                            <div className="stat-row">
                                <span>Total des clics</span>
                                <span>735</span>
                            </div>
                            <div className="stat-row">
                                <span>Visites ce mois</span>
                                <span className="positive">↑ 39% 45</span>
                            </div>
                            <div className="stat-row">
                                <span>Clics ce mois</span>
                                <span className="positive">↑ 25% 59</span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Right Column */}
                <div className="right-column">
                
                    <div className="profile-card">
                        <div className="profile-header"></div>
                        <div className="profile-content">
                            <div className="profile-image">
                                <img src="https://www.w3schools.com/w3images/avatar2.png" alt="Profile" />
                                <span className="verified-badge">✓</span>
                            </div>
                            <h2>Julien Dupont</h2>
                            <p className="title">Expert Designer, DigiLabs</p>
                            <p className="quote">{"Less is more"}</p>
                            <p className="location">Paris, France</p>
                            <div className="profile-buttons">
                                <button className="btn btn-outline">Ajouter</button>
                                <button className="btn btn-primary">✉️Contacter</button>
                            </div>
                            <button className="btn btn-outline full-width">Prendre un RdV</button>
                        </div>
                    </div>

                    
                    <div className="about-card">
                        <h3>Qui suis-je ?</h3>
                        <p>Je suis Product Designer basé à Paris, en France. J'apprécie de travailler sur la conception de produits, les systèmes de design et les projets Webflow, mais je ne me prends pas trop au sérieux.</p>
                        <button className="link">Lire plus</button>
                    </div>

                    
                    <div className="portfolio-card">
                        <h3>Portfolio</h3>
                        {'behance'}
                        <a href="#" className="portfolio-link">behance.net/juliendupont</a>
                        <div className="portfolio-grid">
                            <div className="portfolio-item"></div>
                            <div className="portfolio-item"></div>
                            <div className="portfolio-item"></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProfilePage;

