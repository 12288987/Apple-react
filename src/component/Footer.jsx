import flag from "../images/icons/16.png"
import { useState } from 'react'

function Footer() {
  return (
    <footer>
      <div className="trade-in">
        <p>
          1. Trade In: Trade‑in values vary. iPhone 11 and iPhone 11 Pro
          promotional pricing is after trade‑in of iPhone 8 Plus and iPhone X in
          good condition. Additional trade‑in values require purchase of a new
          iPhone, subject to availability and limits. Must be at least 18. Apple
          or its trade-in partners reserve the right to refuse or limit any
          Trade In transaction for any reason. In‑store trade‑in requires
          presentation of a valid, government-issued photo ID (local law may
          require saving this information). Sales tax may be assessed on full
          value of new iPhone. Additional terms from Apple or Apple’s trade-in
          partners may apply. Monthly pricing: Available to qualified customers
          and requires 0% APR, 24‑month installment loan with Citizens One, and
          iPhone activation with AT&T, Sprint, T‑Mobile, or Verizon.
          <a id="tradeA" href="#">Full terms apply.</a>
        </p>
      </div>
      <hr className="hr" />
      <div className="container hidden">
        <div className="footer row">
          <div className="col-md newborder">
            <h4 className="1h">Shop and learn</h4>
            <div className="underline 1d">
              <div><a href="#">Mac</a></div>
              <div><a href="#">ipad</a></div>
              <div><a href="#">iphone</a></div>
              <div><a href="#">Watch</a></div>
              <div><a href="#">Tv</a></div>
              <div><a href="#">Music</a></div>
              <div><a href="#">Airpods</a></div>
              <div><a href="#">Homepods</a></div>
              <div><a href="#">ipod touch</a></div>
              <div><a href="#">Accessories</a></div>
              <div><a href="#">Gift Cards</a></div>
            </div>
          </div>
          <div className="col-md">
            <div className="newborder">
              <h4 className="2h">Services</h4>
              <div className="underline 2d">
                <div><a href="#">Apple Music</a></div>
                <div><a href="#">Apple News+</a></div>
                <div><a href="#">Apple Tv+</a></div>
                <div><a href="#">Apple Arcade</a></div>
                <div><a href="#">Apple Card</a></div>
                <div><a href="#">iCloud</a></div>
              </div>
            </div>
            <div className="newborder">
              <h4 className="3h">Account</h4>
              <div className="underline 3d">
                <div><a href="#">Manage Your Apple ID</a></div>
                <div><a href="#">Apple Store Account</a></div>
                <div><a href="#">iCloud.com</a></div>
              </div>
            </div>
          </div>
          <div className="col-md newborder">
            <h4 className="4h">Apple Store</h4>
            <div className="underline 4d">
              <div><a href="#">Find a store</a></div>
              <div><a href="#">Genius Bar</a></div>
              <div><a href="#">Today at Apple</a></div>
              <div><a href="#">Apple Camp</a></div>
              <div><a href="#">Field Trip</a></div>
              <div><a href="#">Apple Store App</a></div>
              <div><a href="#">Refurbished and Clearance</a></div>
              <div><a href="#">Finincing</a></div>
              <div><a href="#">Apple Trade In</a></div>
              <div><a href="#">Order Status</a></div>
              <div><a href="#">Shopping Help</a></div>
            </div>
          </div>
          <div className="col-md">
            <div className="newborder">
              <h4 className="5h">For Business</h4>
              <div className="underline 5d">
                <div><a href="#">Apple and Business</a></div>
                <div><a href="#">Shop for Business</a></div>
              </div>
            </div>
            <div className="newborder">
              <h4 className="6h">For Education</h4>
              <div className="underline 6d">
                <div><a href="#">Apple Education</a></div>
                <div><a href="#">Shop for College</a></div>
              </div>
            </div>
            <div className="newborder">
              <h4 className="7h">For Healthcare</h4>
              <div className="underline 7d">
                <div><a href="#">Manage Your Apple ID</a></div>
                <div><a href="#">Apple Store Account</a></div>
                <div><a href="#">iCloud.com</a></div>
              </div>
            </div>
            <div className="newborder">
              <h4 className="8h">For Government</h4>
              <div className="underline 8d">
                <div><a href="#">Apple and Education</a></div>
                <div><a href="#">Shop For College</a></div>
              </div>
            </div>
          </div>
          <div className="col-md">
            <div className="newborder">
              <h4 className="9h">Apple Values</h4>
              <div className="underline 9d">
                <div><a href="#">Find a Store</a></div>
                <div><a href="#">Genius Bar</a></div>
                <div><a href="#">Today at Apple</a></div>
                <div><a href="#">Apple Camp</a></div>
                <div><a href="#">Field Trip</a></div>
                <div><a href="#">Apple Store App</a></div>
              </div>
            </div>
            <div className="newborder">
              <h4 className="10h">About Apple</h4>
              <div className="underline 10d">
                <div><a href="#">Find a Store</a></div>
                <div><a href="#">Genius Bar</a></div>
                <div><a href="#">Today at Apple</a></div>
                <div><a href="#">Apple Camp</a></div>
                <div><a href="#">Field Trip</a></div>
                <div><a href="#">Apple Store App</a></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <p className="more">
          More ways to shop: <a href="#">Find an Apple Store</a> or
          <a href="#">other retailer</a> near you. Or call 1-800-MY-APPLE.
        </p>
      </div>
      <hr className="hr" />
      <div className="container">
        <div className="Copyright row">
          <div className="col-md-5">
            <p>Copyright © 2019 Apple Inc. All rights reserved.</p>
          </div>
          <div className="col-md">
            <div className="privacy">
              <div>
                <p>privacy policy</p>
              </div>
              <div>
                <p>Terms of use</p>
              </div>
              <div>
                <p>Sales and Refunds</p>
              </div>
              <div>
                <p>Legal</p>
              </div>
              <div className="site">
                <p>Site Maps</p>
              </div>
            </div>
          </div>
          <div className="col-md-2">
            <div className="flag-country">
              <div className="flag">
                <img src={flag} alt="" />
              </div>
              <div className="country">United States</div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer