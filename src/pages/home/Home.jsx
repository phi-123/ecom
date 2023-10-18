import "./home.css";
function Home() {
  return (
    <div>
      <div className="Home">
        <div className="Navbar">
          <div className="Menu">
            <p className="rect1" />
            <p className="rect2" />
            <p className="rect3" />
          </div>
          <div className="logo">
            <img src="/src/assets/image/logo2.jpg" alt="" className="Logo" />
          </div>
          <div className="srcbar">
            <img className="icon" src="/src/assets/image/src.jpg" />
            <input
              className="icon1"
              type="text"
              placeholder="Search food ..."
            />
          </div>
          <div className="sign">
            <img className="Signin" src="/src/assets/image/sign.jpg" />
            <p className="text">Sign In</p>
          </div>
          <div className="wishlist">
            <img className="Wishlist" src="/src/assets/image/wish.jpg" />
            <p className="text1">Wishlist</p>
          </div>
          <div className="cart">
            <img className="Cart" src="/src/assets/image/cart.jpg" />
            <p className="text2">$0.00</p>
          </div>
        </div>
        <div className="Bread">
          <p className="home"> Home &gt; Gala Apples</p>
        </div>
        <p className="che">Checkout</p>
        <div className="Biling">
          <p className="Details">Billing Details</p>
          <div className="full">
            <div className="fist">
              <p className="p1p">Fist Name</p>
              <input className="txt1" type="text"></input>
            </div>
            <div className="last1">
              <p className="p1p">Last Name</p>
              <input className="txt1" type="text"></input>
            </div>
          </div>
          <div className="last">
            <p className="p1p">Coutry</p>
            <input className="txt2" type="text"></input>
          </div>
          <div className="last">
            <p className="p1p">Street Address</p>
            <input
              className="txt2"
              type="text"
              placeholder="House Number or No Apt"
            ></input>
          </div>
          <div className="last">
            <p className="p1p">Town/City</p>
            <input className="txt2" type="text"></input>
          </div>
          <div className="last">
            <p className="p1p">State</p>
            <input className="txt2" type="text"></input>
          </div>
          <div className="last">
            <p className="p1p">Postcode</p>
            <input className="txt2" type="text"></input>
          </div>
          <div className="last">
            <p className="p1p">Phone Number</p>
            <input className="txt2" type="text"></input>
          </div>
          <div className="last">
            <p className="p1p">Email Address</p>
            <input className="txt2" type="text"></input>
          </div>
          <label className="checkbox1">
            <input type="checkbox" />
            Create an account?
          </label>
        </div>

        <div className="Addi">
          <p className="Details1a1">Additional Information</p>
          <p className="p4p">Order Notes (Optional)</p>
          <input
            className="txt30"
            type="text"
            placeholder="Notes about your order"
          ></input>
        </div>
        <div className="yourr">
          <p className="Details1a3">Your Order</p>
          <div className="a520">
            <p className="g1g"></p>
            <div className="h11">
              <a className="h22">Apple Jumbo(1 kg)</a>
              <a className="h23">$8.21 x1</a>
            </div>
            <div className="line-9"></div>
          </div>
          <div className="a519">
            <div className="ah1">
              <a className="h25">Sub Total</a>
              <a className="h24">$8.21</a>
            </div>
            <div className="ah2">
              <a className="h25">Shopping</a>
              <a className="h24">$5.00</a>
            </div>
            <div className="line-10"></div>
            <div className="ah3">
              <a className="h25">Total</a>
              <a className="h24">$12.21</a>
            </div>
          </div>
          <button className="btt5" type="reset">
            Contonue to Payment
          </button>
        </div>

        <div className="footer3">
          <div className="Groud477">
            <img src="/src/assets/image/logo2.jpg" alt="" className="Logo1" />
            <img className="a1a" src="/src/assets/image/dc.jpg"></img>
            <p className="ph1">221 B Santa Monica, Los Angeles</p>
            <img className="a2a" src="/src/assets/image/te.jpg"></img>
            <p className="ph2">(+1) 923 2341 22</p>
            <img className="a3a" src="/src/assets/image/gm.jpg"></img>
            <p className="ph3">Contact@tanahairstudio.com</p>
            <p className="gg">@2020 TanahAir Studio. All rights reserved.</p>
          </div>
          <div className="Category">
            <p className="c1c">Categories</p>
            <p className="c0c">Dairy & Milk</p>
            <p className="c0c">Fresh Produce</p>
            <p className="c0c">Meat</p>
            <p className="c0c">Snacks</p>
            <p className="c0c">Frozen</p>
            <p className="c0c">Vegetables</p>
          </div>
          <div className="Company">
            <p className="b1b">Company</p>
            <p className="b0b">About Us</p>
            <p className="b0b">Contact Us</p>
            <p className="b0b">Privacy & Poilicy</p>
            <p className="b0b">Payment Method</p>
          </div>
          <div className="join">
            <p className="Join">Join Our Newsletter</p>
            <p className="em">Your Email</p>
            <input className="gml" type="text" placeholder="Enter Your Email" />
            <button className="re1" type="reset">
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Home;
