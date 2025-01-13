import React from 'react';
import './sidebar.css';

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="sidebar-item">Dashboard</div>
      <div className="sidebar-item">Wicard <span className="notification-count">4</span></div>
      <div className="sidebar-item">Factures</div>
      <div className="sidebar-item">Statistiques</div>
      <div className="sidebar-item">Support</div>
      <div className="notification">
        <div className="notification-header">
          <span>Nouvelles fonctionnalités</span>
          <span className="close-btn">✖</span>
        </div>
        <div className="notification-content">
          <p>Nouvelle vue du tableau de bord. Les pages se chargent désormais plus rapidement.</p>
          <img src="https://www.w3schools.com/w3images/avatar2.png" alt="Notification Image" className="notification-image" />
          <div className="notification-actions">
            <button className="ignore-btn">Ignorer</button>
            <button className="discover-btn">Découvrir</button>
          </div>
        </div>
      </div>
      <div className="user-profile">
        <img src="https://www.w3schools.com/w3images/avatar2.png" alt="User" className="user-avatar" />
        <div className="user-info">
          <span className="user-name">Julien Duport</span>
          <span className="user-email">Julien@domain.ext</span>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;