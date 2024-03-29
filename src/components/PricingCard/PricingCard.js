import "./PricingCardStyles.css"

import React from 'react'
import { Link } from "react-router-dom"

const PricingCard = () => {
  return (
    <div className="pricing">
      <div className="card-container">

        <div className="card">
          <h3>- BASIC -</h3>
          <span className="bar"></span>
          <p className="btc">$ 100</p>
          <p>- 3 DAYS -</p>
          <p>- 3 Pages -</p>
          <p>- Featured -</p>
          <p>- Responsive Design -</p>
          <Link to="/contact" className="btn">BUY</Link>
        </div>

        <div className="card">
          <h3>- PREMIUM -</h3>
          <span className="bar"></span>
          <p className="btc">$ 200</p>
          <p>- 2 DAYS -</p>
          <p>- 5 Pages -</p>
          <p>- Featured -</p>
          <p>- Responsive Design -</p>
          <Link to="/contact" className="btn">BUY</Link>
        </div>

        <div className="card">
          <h3>- BUSINESS -</h3>
          <span className="bar"></span>
          <p className="btc">$ 300</p>
          <p>- 5 DAYS -</p>
          <p>- 8 Pages -</p>
          <p>- Featured -</p>
          <p>- Responsive Design -</p>
          <Link to="/contact" className="btn">BUY</Link>
        </div>

      </div>
    </div>
  )
}

export default PricingCard