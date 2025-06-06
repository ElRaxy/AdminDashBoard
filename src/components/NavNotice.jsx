import React from 'react'

function NavNotice() {
  const handleViewAll = () => {
    console.log('View all notifications')
  }

  const handleNotificationClick = (notification) => {
    console.log('Selected notification:', notification)
  }

  return (
    <li className="nav-item dropdown">
      {/* Botón para abrir notificaciones */}
      <button
        type="button"
        className="nav-link nav-icon"
        data-bs-toggle="dropdown"
        aria-expanded="false"
      >
        <i className="bi bi-bell"></i>
        <span className="badge bg-primary badge-number">4</span>
      </button>

      <ul className="dropdown-menu dropdown-menu-end notifications">
        <li className="dropdown-header">
          You have 4 new notifications
        </li>

        <li>
          <hr className="dropdown-divider" />
        </li>

        <li className="notifications-item">
          <button 
            onClick={() => handleNotificationClick('System Update')}
            className="d-flex align-items-center border-0 bg-transparent w-100 text-start"
          >
            <i className="bi bi-exclamation-circle text-warning"></i>
            <div>
              <h4>System Update</h4>
              <p>Scheduled update will begin tomorrow at 02:00 AM.</p>
              <p>1 hr ago</p>
            </div>
          </button>
        </li>

        <li>
          <hr className="dropdown-divider" />
        </li>

        <li className="notifications-item">
          <button 
            onClick={() => handleNotificationClick('New Support Message')}
            className="d-flex align-items-center border-0 bg-transparent w-100 text-start"
          >
            <i className="bi bi-info-circle text-primary"></i>
            <div>
              <h4>New Support Message</h4>
              <p>Your help request has been received.</p>
              <p>30 min ago</p>
            </div>
          </button>
        </li>

        <li>
          <hr className="dropdown-divider" />
        </li>

        <li className="notifications-item">
          <button 
            onClick={() => handleNotificationClick('Backup Complete')}
            className="d-flex align-items-center border-0 bg-transparent w-100 text-start"
          >
            <i className="bi bi-check-circle text-success"></i>
            <div>
              <h4>Backup Complete</h4>
              <p>Automatic backup was completed successfully.</p>
              <p>15 min ago</p>
            </div>
          </button>
        </li>

        <li>
          <hr className="dropdown-divider" />
        </li>

        <li className="notifications-item">
          <button 
            onClick={() => handleNotificationClick('Connection Error')}
            className="d-flex align-items-center border-0 bg-transparent w-100 text-start"
          >
            <i className="bi bi-x-circle text-danger"></i>
            <div>
              <h4>Connection Error</h4>
              <p>Could not connect to server. Please try again.</p>
              <p>5 min ago</p>
            </div>
          </button>
        </li>

        <li>
          <hr className="dropdown-divider" />
        </li>

        <li className="dropdown-footer">
          <button onClick={handleViewAll} className="btn btn-link w-100">
            Show all notifications
          </button>
        </li>
      </ul>
    </li>
  )
}

export default NavNotice
