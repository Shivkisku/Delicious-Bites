import styles from '../styles/Home.module.css';
import { useState } from 'react';

export default function Home() {
  const [email, setEmail] = useState('');

  const handleSubscribe = () => {
    if (email) {
      // Handle subscription logic, e.g., call an API endpoint
      alert(`Subscribed with: ${email}`);
      setEmail(''); // Clear the input after submission
    } else {
      alert('Please enter a valid email address.');
    }
  };

  return (
    <div>
      {/* Header Section */}
      <nav className={styles.nav}>
        <div className={`${styles.header} ${styles.container}`}>
          <div className={styles.headImg}>
            <img src="/images/logo.png" alt="Logo" />
          </div>
          <div className={styles.headIcon}>
            <i className="fa-solid fa-bars"></i>
          </div>
        </div>
      </nav>

      {/* Main Section */}
      <div className={`${styles.mainSection} ${styles.container}`}>
        <div className={styles.heroImg}>
          <img src="/images/hero_image.png" alt="Hero Image" />
        </div>
        <div className={styles.mainIntro}>
          <span className={styles.offer}>50% OFF All products</span>
          <h2 className={styles.title}>Enjoy Your Delicious Food</h2>
          <p>
            Quisque velit nisi, pretium ut lacinia in, elementum id enim. Mauris
            blandit aliquet elit, eget tincidunt nibh pulvinar a.
          </p>
          <button className={styles.explore}>Explore now</button>
        </div>
      </div>

      {/* Features Section */}
      <div className={`${styles.features} ${styles.container}`}>
        <div className={styles.feature}>
          <div className={styles.featureIcon}>
            <img src="/icons/discount.png" alt="Discount Voucher" />
          </div>
          <div className={styles.featureTitle}>
            <h3>Discount voucher</h3>
            <p>Redeem your discount voucher</p>
          </div>
        </div>
        <div className={styles.feature}>
          <div className={styles.featureIcon}>
            <img src="/icons/fresh.png" alt="Fresh Healthy Food" />
          </div>
          <div className={styles.featureTitle}>
            <h3>Fresh Healthy Food</h3>
            <p>Fresh and healthy food</p>
          </div>
        </div>
        <div className={styles.feature}>
          <div className={styles.featureIcon}>
            <img src="/icons/delivery.png" alt="Fast Home Delivery" />
          </div>
          <div className={styles.featureTitle}>
            <h3>Fast Home Delivery</h3>
            <p>Delivery under 30 mins</p>
          </div>
        </div>
      </div>

      {/* Menu Section */}
      <div className={`${styles.menu} ${styles.container}`}>
        <div className={styles.offer}>Our Menu</div>
        <h2>Explore Our Menu</h2>
        <div className={styles.grid}>
          <div className={styles.item1}>
            <img src="/images/grid_image1.png" className={styles.gridImg} alt="Menu Item 1" />
          </div>
          <div className={styles.item2}>
            <img src="/images/grid_image2.png" className={styles.gridImg} alt="Menu Item 2" />
          </div>
          <div className={styles.item3}>
            <img src="/images/grid_image3.png" className={styles.gridImg} alt="Menu Item 3" />
          </div>
          <div className={styles.item4}>
            <img src="/images/grid_image4.png" className={styles.gridImg} alt="Menu Item 4" />
          </div>
          <div className={styles.item5}>
            <img src="/images/grid_image5.png" className={styles.gridImg} alt="Menu Item 5" />
          </div>
          <div className={styles.item6}>
            <img src="/images/grid_image6.png" className={styles.gridImg} alt="Menu Item 6" />
          </div>
          <div className={styles.item7}>
            <img src="/images/grid_image7.png" className={styles.gridImg} alt="Menu Item 7" />
          </div>
        </div>
      </div>

      {/* Footer Section */}
      <div className={styles.footer}>
        <div className={`${styles.footerCont} ${styles.container}`}>
          <div className={styles.footerLogo}>
            <img src="/images/logo.png" alt="Footer Logo" />
          </div>
          <div className={`${styles.linkList} ${styles.opact}`}>
            <h3>Main link</h3>
            <ul>
              <li>Order Tracking</li>
              <li>New Order</li>
              <li>Contact Us</li>
              <li>News & Blogs</li>
            </ul>
          </div>
          <div className={`${styles.linkList} ${styles.opact}`}>
            <h3>Support</h3>
            <ul>
              <li>About us</li>
              <li>Privacy Policy</li>
              <li>Terms & Condition</li>
            </ul>
          </div>
          <div className={`${styles.newsletter} ${styles.opact}`}>
            <h3>Join Our Newsletter</h3>
            <p>Get updates about our latest offers and products directly in your inbox.</p>
            <div className={styles.newsletterForm}>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                aria-label="Email for newsletter"
              />
              <button onClick={handleSubscribe} className={styles.subscribeButton}>
                Subscribe
              </button>
            </div>
            <h3>Follow us</h3>
            <div className={styles.socialMediaIcon}>
              <div className={styles.icon}>
                <i className="fa-brands fa-facebook-f"></i>
              </div>
              <div className={styles.icon}>
                <i className="fa-brands fa-twitter"></i>
              </div>
              <div className={styles.icon}>
                <i className="fa-brands fa-instagram"></i>
              </div>
              <div className={styles.icon}>
                <i className="fa-brands fa-youtube"></i>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
