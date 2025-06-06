import React from 'react'

function NavMessage() {
  const handleViewAll = () => {
    // Aquí iría la lógica para ver todos los mensajes
    console.log('View all messages')
  }

  const handleMessageClick = (message) => {
    // Aquí iría la lógica para abrir el mensaje específico
    console.log('Open message:', message)
  }

  return (
    <li className="nav-item dropdown">
      <button
        type="button"
        className="nav-link nav-icon"
        data-bs-toggle="dropdown"
        aria-expanded="false"
      >
        <i className="bi bi-chat-left-text"></i>
        <span className="badge bg-success badge-number">3</span>
      </button>

      <ul className="dropdown-menu dropdown-menu-end message">
        <li className="dropdown-header">
          You have 3 new messages
        </li>

        <li><hr className="dropdown-divider" /></li>

        <li className="message-item">
          <button 
            onClick={() => handleMessageClick('Anna Martinez')}
            className="d-flex align-items-center border-0 bg-transparent w-100 text-start"
          >
            <img src="https://ui-avatars.com/api/?name=Anna+Martinez&background=random" alt="Profile" className="rounded-circle" />
            <div>
              <h4>Anna Martinez</h4>
              <p>Could you please review the latest dashboard update? Some charts need adjustments.</p>
              <p>4 mins ago</p>
            </div>
          </button>
        </li>

        <li><hr className="dropdown-divider" /></li>

        <li className="message-item">
          <button 
            onClick={() => handleMessageClick('Charles Rodriguez')}
            className="d-flex align-items-center border-0 bg-transparent w-100 text-start"
          >
            <img src="https://ui-avatars.com/api/?name=Charles+Rodriguez&background=random" alt="Profile" className="rounded-circle" />
            <div>
              <h4>Charles Rodriguez</h4>
              <p>The monthly report is ready for review. I've included the metrics you requested.</p>
              <p>2 hrs ago</p>
            </div>
          </button>
        </li>

        <li><hr className="dropdown-divider" /></li>

        <li className="message-item">
          <button 
            onClick={() => handleMessageClick('Laura Sanchez')}
            className="d-flex align-items-center border-0 bg-transparent w-100 text-start"
          >
            <img src="https://ui-avatars.com/api/?name=Laura+Sanchez&background=random" alt="Profile" className="rounded-circle" />
            <div>
              <h4>Laura Sanchez</h4>
              <p>New meeting scheduled for tomorrow at 10:00 AM. Topic: Q2 Goals Review.</p>
              <p>5 hrs ago</p>
            </div>
          </button>
        </li>

        <li><hr className="dropdown-divider" /></li>

        <li className="dropdown-footer">
          <button onClick={handleViewAll} className="btn btn-link w-100">View all messages</button>
        </li>
      </ul>
    </li>
  )
}

export default NavMessage
