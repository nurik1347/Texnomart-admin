import React from 'react';
import { Link } from 'react-router-dom'; // Link komponentini import qilish
import './style.css'; // Home komponentining CSS faylini import qilish

function Home() {
    return (
        <>
            <div className='flex'>
                <nav className="navbar">
                    <ul className="navbar-list">
                        <li>
                            <Link to="/product">Products</Link>
                        </li>
                        <li>
                            <Link to="/cattegory">Cattegory</Link>
                        </li>
                        <li>
                            <Link to="/combo">Combo</Link>
                        </li>
                        <li>
                            <Link to="/brands">Brands</Link>
                        </li>
                        <li>
                            <Link to="/statistics">Statistik</Link>
                        </li>
                    </ul>
                </nav>
            </div>

        </>
    );
}

export default Home;
