import React from 'react'
import '../css/sideBar.css'
import navList from '../data/navItem.js'
import NavItem from './NavItem.jsx'

function SideBar() {
    const scrollToChart = (chartId) => {
        const element = document.getElementById(chartId);
        if (element) {
            const headerOffset = 80; // Offset para considerar el header fijo
            const elementPosition = element.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
            });
        }
    };

    return (
        <aside id='sidebar' className='sidebar'>
            <ul className="sidebar-nav" id='sidebar-nav'>
                <li className="nav-item">
                    <a className="nav-link" href="/">
                        <i className="bi bi-grid"></i>
                        <span>Dashboard</span>
                    </a>
                </li>

                <li className="nav-item">
                    <button className="nav-link collapsed" data-bs-target="#components-nav" data-bs-toggle="collapse">
                        <i className="bi bi-menu-button-wide"></i>
                        <span>Documents</span>
                        <i className="bi bi-chevron-down ms-auto"></i>
                    </button>
                    <ul id="components-nav" className="nav-content collapse" data-bs-parent="#sidebar-nav">
                        <li>
                            <a href="/customers">
                                <i className="bi bi-circle"></i>
                                <span>Customers</span>
                            </a>
                        </li>
                        <li>
                            <a href="/suppliers">
                                <i className="bi bi-circle"></i>
                                <span>Suppliers</span>
                            </a>
                        </li>
                        <li>
                            <a href="/logistics">
                                <i className="bi bi-circle"></i>
                                <span>Logistic</span>
                            </a>
                        </li>
                    </ul>
                </li>

                <li className="nav-item">
                    <button className="nav-link collapsed" data-bs-target="#forms-nav" data-bs-toggle="collapse">
                        <i className="bi bi-journal-text"></i>
                        <span>Forms</span>
                        <i className="bi bi-chevron-down ms-auto"></i>
                    </button>
                    <ul id="forms-nav" className="nav-content collapse" data-bs-parent="#sidebar-nav">
                        <li>
                            <a href="/forms/application">
                                <i className="bi bi-circle"></i>
                                <span>Application Form</span>
                            </a>
                        </li>
                        <li>
                            <a href="/forms/release">
                                <i className="bi bi-circle"></i>
                                <span>Release Form</span>
                            </a>
                        </li>
                        <li>
                            <a href="/forms/cancellation">
                                <i className="bi bi-circle"></i>
                                <span>Cancellation Form</span>
                            </a>
                        </li>
                    </ul>
                </li>

                <li className="nav-item">
                    <button className="nav-link collapsed" data-bs-target="#tables-nav" data-bs-toggle="collapse">
                        <i className="bi bi-layout-text-window-reverse"></i>
                        <span>Tables</span>
                        <i className="bi bi-chevron-down ms-auto"></i>
                    </button>
                    <ul id="tables-nav" className="nav-content collapse" data-bs-parent="#sidebar-nav">
                        <li>
                            <button onClick={() => scrollToChart('recent-sales')}>
                                <i className="bi bi-circle"></i>
                                <span>Recent Sales</span>
                            </button>
                        </li>
                        <li>
                            <button onClick={() => scrollToChart('top-selling')}>
                                <i className="bi bi-circle"></i>
                                <span>Top Selling</span>
                            </button>
                        </li>
                    </ul>
                </li>

                <li className="nav-item">
                    <button className="nav-link collapsed" data-bs-target="#charts-nav" data-bs-toggle="collapse">
                        <i className="bi bi-bar-chart"></i>
                        <span>Charts</span>
                        <i className="bi bi-chevron-down ms-auto"></i>
                    </button>
                    <ul id="charts-nav" className="nav-content collapse" data-bs-parent="#sidebar-nav">
                        <li>
                            <button onClick={() => scrollToChart('budget-chart')}>
                                <i className="bi bi-circle"></i>
                                <span>Budget Chart</span>
                            </button>
                        </li>
                        <li>
                            <button onClick={() => scrollToChart('web-traffic')}>
                                <i className="bi bi-circle"></i>
                                <span>Web Traffic</span>
                            </button>
                        </li>
                        <li>
                            <button onClick={() => scrollToChart('news-updates')}>
                                <i className="bi bi-circle"></i>
                                <span>News Updates</span>
                            </button>
                        </li>
                    </ul>
                </li>

                <li className="nav-item">
                    <button className="nav-link collapsed" data-bs-target="#icons-nav" data-bs-toggle="collapse">
                        <i className="bi bi-gem"></i>
                        <span>Icons</span>
                        <i className="bi bi-chevron-down ms-auto"></i>
                    </button>
                    <ul id="icons-nav" className="nav-content collapse" data-bs-parent="#sidebar-nav">
                        <li>
                            <a href="https://icons.getbootstrap.com/" target="_blank" rel="noopener noreferrer">
                                <i className="bi bi-circle"></i>
                                <span>Bootstrap Icons</span>
                            </a>
                        </li>
                        <li>
                            <a href="https://remixicon.com/" target="_blank" rel="noopener noreferrer">
                                <i className="bi bi-circle"></i>
                                <span>Remix Icons</span>
                            </a>
                        </li>
                        <li>
                            <a href="https://boxicons.com/" target="_blank" rel="noopener noreferrer">
                                <i className="bi bi-circle"></i>
                                <span>Boxicons</span>
                            </a>
                        </li>
                    </ul>
                </li>

                <li className='nav-heading'>Pages</li>
                {navList.map(nav => (
                    <NavItem key={nav._id} nav={nav} />
                ))}
            </ul>
        </aside>
    )
}

export default SideBar
