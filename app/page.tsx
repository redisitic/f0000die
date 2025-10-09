'use client';

import { useEffect } from 'react';
import './globals.css';
import ClientIonIcon from './components/ClientIonIcon';

export default function Page() {
  useEffect(() => {
    // === navbar toggle ===
    const navbar = document.querySelector<HTMLElement>("[data-navbar]");
    const navbarLinks = document.querySelectorAll<HTMLElement>("[data-nav-link]");
    const menuToggleBtn = document.querySelector<HTMLElement>("[data-menu-toggle-btn]");

    const toggleNav = () => {
      navbar?.classList.toggle("active");
      menuToggleBtn?.classList.toggle("active");
    };
    menuToggleBtn?.addEventListener("click", toggleNav);

    const closeOnLink = () => {
      navbar?.classList.toggle("active");
      menuToggleBtn?.classList.toggle("active");
    };
    navbarLinks.forEach((l) => l.addEventListener("click", closeOnLink));

    // === header sticky & back to top ===
    const header = document.querySelector<HTMLElement>("[data-header]");
    const backTopBtn = document.querySelector<HTMLElement>("[data-back-top-btn]");

    const onScroll = () => {
      if (window.scrollY >= 100) {
        header?.classList.add("active");
        backTopBtn?.classList.add("active");
      } else {
        header?.classList.remove("active");
        backTopBtn?.classList.remove("active");
      }
    };
    window.addEventListener("scroll", onScroll);

    // === search box toggle ===
    const searchBtn = document.querySelector<HTMLElement>("[data-search-btn]");
    const searchContainer = document.querySelector<HTMLElement>("[data-search-container]");
    const searchSubmitBtn = document.querySelector<HTMLElement>("[data-search-submit-btn]");
    const searchCloseBtn = document.querySelector<HTMLElement>("[data-search-close-btn]");

    const toggleSearch = () => {
      searchContainer?.classList.toggle("active");
      document.body.classList.toggle("active");
    };
    searchBtn?.addEventListener("click", toggleSearch);
    searchSubmitBtn?.addEventListener("click", toggleSearch);
    searchCloseBtn?.addEventListener("click", toggleSearch);

    // === move cycle on scroll ===
    const deliveryBoy = document.querySelector<HTMLElement>("[data-delivery-boy]");
    let deliveryBoyMove = -80;
    let lastScrollPos = 0;

    const onScrollBike = () => {
      if (!deliveryBoy) return;
      const top = deliveryBoy.getBoundingClientRect().top;
      if (top < 500 && top > -250) {
        const activeScrollPos = window.scrollY;
        if (lastScrollPos < activeScrollPos) deliveryBoyMove += 1;
        else deliveryBoyMove -= 1;
        lastScrollPos = activeScrollPos;
        deliveryBoy.style.transform = `translateX(${deliveryBoyMove}px)`;
      }
    };
    window.addEventListener('scroll', onScrollBike);

    // cleanup
    return () => {
      menuToggleBtn?.removeEventListener("click", toggleNav);
      navbarLinks.forEach((l) => l.removeEventListener("click", closeOnLink));
      window.removeEventListener("scroll", onScroll);
      searchBtn?.removeEventListener("click", toggleSearch);
      searchSubmitBtn?.removeEventListener("click", toggleSearch);
      searchCloseBtn?.removeEventListener("click", toggleSearch);
      window.removeEventListener('scroll', onScrollBike);
    };
  }, []);

  return (
    <main>
      {/* HEADER */}
      <header className="header" data-header>
        <div className="container">
          <h1>
            <a href="#" className="logo">Foodie<span className="span">.</span></a>
          </h1>

          <nav className="navbar" data-navbar>
            <ul className="navbar-list">
              <li className="nav-item"><a href="#home" className="navbar-link" data-nav-link>Home</a></li>
              <li className="nav-item"><a href="#about" className="navbar-link" data-nav-link>About Us</a></li>
              <li className="nav-item"><a href="#food-menu" className="navbar-link" data-nav-link>Shop</a></li>
              <li className="nav-item"><a href="#blog" className="navbar-link" data-nav-link>Blog</a></li>
              <li className="nav-item"><a href="#contact" className="navbar-link" data-nav-link>Contact Us</a></li>
            </ul>
          </nav>

          <div className="header-btn-group">
            <button className="search-btn" aria-label="Search" data-search-btn>
              <ClientIonIcon name="search-outline" ></ClientIonIcon>
            </button>
            <a href="#contact"><button className="btn btn-hover">Reservation</button></a>
            <button className="nav-toggle-btn" aria-label="Toggle Menu" data-menu-toggle-btn>
              <span className="line top"></span>
              <span className="line middle"></span>
              <span className="line bottom"></span>
            </button>
          </div>
        </div>
      </header>

      {/* SEARCH */}
      <div className="search-container" data-search-container>
        <div className="search-box">
          <input type="search" name="search" aria-label="Search here" placeholder="Type keywords here..." className="search-input"/>
          <button className="search-submit" aria-label="Submit search" data-search-submit-btn>
            <ClientIonIcon name="search-outline" ></ClientIonIcon>
          </button>
        </div>
        <button className="search-close-btn" aria-label="Cancel search" data-search-close-btn></button>
      </div>

      {/* CONTENT */}
      <article>
        {/* HERO */}
        <section className="hero" id="home" style={{ backgroundImage: "url('/assets/images/hero-1.jpg')" }}>
          <div className="container">
            <div className="hero-content">
              <h1><p className="hero-subtitle">Enjoyy!!</p></h1>
              <h2 className="h1 hero-title">Taste that makes you go yummmmmmmmmm!</h2>
              <p className="hero-text">Indulge your cravings with flavors that dance on your palate.</p>
              <button className="btn">Book A Table</button>
            </div>
          </div>
        </section>

        {/* PROMO */}
        <section className="section section-divider white promo">
          <div className="container">
            <ul className="promo-list has-scrollbar">

              {/* Card 1 */}
              <li className="promo-item">
                <div className="promo-card">
                  <div className="card-icon">{/* svg omitted for brevity (keep from your HTML) */}</div>
                  <h3 className="h3 card-title">Pizza!</h3>
                  <p className="card-text">Indulge your cravings with flavors that dance on your palate.</p>
                  <img src="/assets/nimage/p1.jpeg" width={300} height={300} loading="lazy" alt="Pizza" className="w-100 card-banner"/>
                </div>
              </li>

              {/* Card 2 */}
              <li className="promo-item">
                <div className="promo-card">
                  <div className="card-icon">{/* svg omitted */}</div>
                  <h3 className="h3 card-title">Drinks</h3>
                  <p className="card-text">Indulge your cravings with flavors that dance on your palate.</p>
                  <img src="/assets/nimage/dr1.jpeg" width={300} height={300} loading="lazy" alt="Soft Drinks" className="w-100 card-banner"/>
                </div>
              </li>

              {/* Card 3 */}
              <li className="promo-item">
                <div className="promo-card">
                  <div className="card-icon">{/* svg omitted */}</div>
                  <h3 className="h3 card-title">French Fry</h3>
                  <p className="card-text">Indulge your cravings with flavors that dance on your palate.</p>
                  <img src="/assets/nimage/ff1.jpg" width={300} height={300} loading="lazy" alt="French Fry" className="w-100 card-banner"/>
                </div>
              </li>

              {/* Card 4 */}
              <li className="promo-item">
                <div className="promo-card">
                  <div className="card-icon">{/* svg omitted */}</div>
                  <h3 className="h3 card-title">Burger!!</h3>
                  <p className="card-text">Indulge your cravings with flavors that dance on your palate.</p>
                  <img src="/assets/nimage/b2.jpeg" width={300} height={300} loading="lazy" alt="Burger" className="w-100 card-banner"/>
                </div>
              </li>

              {/* Card 5 */}
              <li className="promo-item">
                <div className="promo-card">
                  <div className="card-icon">{/* svg omitted */}</div>
                  <h3 className="h3 card-title">Paneer</h3>
                  <p className="card-text">Indulge your cravings with flavors that dance on your palate.</p>
                  <img src="/assets/nimage/pt2.jpeg" width={300} height={300} loading="lazy" alt="Paneer" className="w-100 card-banner"/>
                </div>
              </li>

            </ul>
          </div>
        </section>

        {/* ABOUT */}
        <section className="section section-divider gray about" id="about">
          <div className="container">
            <div className="about-banner">
              <img src="/assets/images/about-banner.png" width={509} height={459} loading="lazy" alt="Burger with Drinks" className="w-100 about-img"/>
              <img src="/assets/images/sale-shape-red.png" width={216} height={226} alt="get up to 50% off now" className="abs-img scale-up-anim"/>
            </div>
            <div className="about-content">
              <h2 className="h2 section-title">Caferio, Burgers, and Best Pizzas <span className="span">in Town!</span></h2>
              <p className="section-text">
                Indulge your cravings with flavors that dance on your palate.
                Family-run eateries preserve traditions, blending influences and catering to varied palates.
              </p>
              <ul className="about-list">
                <li className="about-item"><ClientIonIcon name="checkmark-outline"></ClientIonIcon><span className="span">Delicious & Healthy Foods</span></li>
                <li className="about-item"><ClientIonIcon name="checkmark-outline"></ClientIonIcon><span className="span">Spacific Family And Kids Zone</span></li>
                <li className="about-item"><ClientIonIcon name="checkmark-outline"></ClientIonIcon><span className="span">Music & Other Facilities</span></li>
                <li className="about-item"><ClientIonIcon name="checkmark-outline"></ClientIonIcon><span className="span">Fastest Food Home Delivery</span></li>
              </ul>
              <button className="btn btn-hover">Order Now</button>
            </div>
          </div>
        </section>

        {/* FOOD MENU */}
        <section className="section food-menu" id="food-menu">
          <div className="container">
            <p className="section-subtitle">Popular Dishes</p>
            <h2 className="h2 section-title">Our Delicious <span className="span">Foods</span></h2>
            <p className="section-text">Indulge your cravings with flavors that dance on your palate.</p>

            <ul className="fiter-list">
              <li><button className="filter-btn active">All</button></li>
              <li><button className="filter-btn">Pizza</button></li>
              <li><button className="filter-btn">Burger</button></li>
              <li><button className="filter-btn">Drinks</button></li>
              <li><button className="filter-btn">Sandwich</button></li>
            </ul>

            <ul className="food-menu-list">
              {/* Card A */}
              <li>
                <div className="food-menu-card">
                  <div className="card-banner">
                    <img src="/assets/nimage/pt1.jpeg" width={300} height={300} loading="lazy" alt="Fried Paneer Unlimited" className="w-100"/>
                    <div className="badge">-15%</div>
                    <button className="btn food-menu-btn">Order Now</button>
                  </div>
                  <div className="wrapper">
                    <p className="category">Paneer</p>
                    <div className="rating-wrapper">
                      <ClientIonIcon name="star"></ClientIonIcon><ClientIonIcon  name="star"></ClientIonIcon><ClientIonIcon  name="star"></ClientIonIcon><ClientIonIcon  name="star"></ClientIonIcon><ClientIonIcon  name="star"></ClientIonIcon>
                    </div>
                  </div>
                  <h3 className="h3 card-title">Fried Paneer Unlimited</h3>
                  <div className="price-wrapper">
                    <p className="price-text">Price:</p>
                    <data className="price">Rs.49.00</data>
                    <del className="del">Rs.69.00</del>
                  </div>
                </div>
              </li>

              {/* Card B */}
              <li>
                <div className="food-menu-card">
                  <div className="card-banner">
                    <img src="/assets/nimage/b2.jpeg" width={300} height={300} loading="lazy" alt="Burger King Whopper" className="w-100"/>
                    <div className="badge">-10%</div>
                    <button className="btn food-menu-btn">Order Now</button>
                  </div>
                  <div className="wrapper">
                    <p className="category">Noodles</p>
                    <div className="rating-wrapper">
                      <ClientIonIcon name="star"></ClientIonIcon><ClientIonIcon  name="star"></ClientIonIcon><ClientIonIcon  name="star"></ClientIonIcon><ClientIonIcon  name="star"></ClientIonIcon><ClientIonIcon  name="star"></ClientIonIcon>
                    </div>
                  </div>
                  <h3 className="h3 card-title">Burger King Whopper</h3>
                  <div className="price-wrapper">
                    <p className="price-text">Price:</p>
                    <data className="price">Rs.29.00</data>
                    <del className="del">Rs.39.00</del>
                  </div>
                </div>
              </li>

              {/* Card C */}
              <li>
                <div className="food-menu-card">
                  <div className="card-banner">
                    <img src="/assets/nimage/p1.jpeg" width={300} height={300} loading="lazy" alt="White Castle Pizzas" className="w-100"/>
                    <div className="badge">-25%</div>
                    <button className="btn food-menu-btn">Order Now</button>
                  </div>
                  <div className="wrapper">
                    <p className="category">Pizzas</p>
                    <div className="rating-wrapper">
                      <ClientIonIcon  name="star"></ClientIonIcon><ClientIonIcon  name="star"></ClientIonIcon><ClientIonIcon  name="star"></ClientIonIcon><ClientIonIcon  name="star"></ClientIonIcon><ClientIonIcon  name="star"></ClientIonIcon>
                    </div>
                  </div>
                  <h3 className="h3 card-title">White Castle Pizzas</h3>
                  <div className="price-wrapper">
                    <p className="price-text">Price:</p>
                    <data className="price">Rs.49.00</data>
                    <del className="del">Rs.69.00</del>
                  </div>
                </div>
              </li>

              {/* Card D */}
              <li>
                <div className="food-menu-card">
                  <div className="card-banner">
                    <img src="/assets/nimage/bu1.jpeg" width={300} height={300} loading="lazy" alt="Bell Burrito Supreme" className="w-100"/>
                    <div className="badge">-20%</div>
                    <button className="btn food-menu-btn">Order Now</button>
                  </div>
                  <div className="wrapper">
                    <p className="category">Burrito</p>
                    <div className="rating-wrapper">
                      <ClientIonIcon  name="star"></ClientIonIcon><ClientIonIcon  name="star"></ClientIonIcon><ClientIonIcon  name="star"></ClientIonIcon><ClientIonIcon  name="star"></ClientIonIcon><ClientIonIcon  name="star"></ClientIonIcon>
                    </div>
                  </div>
                  <h3 className="h3 card-title">Bell Burrito Supreme</h3>
                  <div className="price-wrapper">
                    <p className="price-text">Price:</p>
                    <data className="price">Rs.59.00</data>
                    <del className="del">Rs.69.00</del>
                  </div>
                </div>
              </li>

              {/* Card E */}
              <li>
                <div className="food-menu-card">
                  <div className="card-banner">
                    <img src="/assets/nimage/kp1.jpeg" width={300} height={300} loading="lazy" alt="Kung Pao Paneer BBQ" className="w-100"/>
                    <div className="badge">-5%</div>
                    <button className="btn food-menu-btn">Order Now</button>
                  </div>
                  <div className="wrapper">
                    <p className="category">Nuggets</p>
                    <div className="rating-wrapper">
                      <ClientIonIcon  name="star"></ClientIonIcon><ClientIonIcon  name="star"></ClientIonIcon><ClientIonIcon  name="star"></ClientIonIcon><ClientIonIcon  name="star"></ClientIonIcon><ClientIonIcon  name="star"></ClientIonIcon>
                    </div>
                  </div>
                  <h3 className="h3 card-title">Kung Pao Paneer BBQ</h3>
                  <div className="price-wrapper">
                    <p className="price-text">Price:</p>
                    <data className="price">Rs.49.00</data>
                    <del className="del">Rs.69.00</del>
                  </div>
                </div>
              </li>

              {/* Card F */}
              <li>
                <div className="food-menu-card">
                  <div className="card-banner">
                    <img src="/assets/nimage/pt1.jpeg" width={300} height={300} loading="lazy" alt="Wendy's Paneer" className="w-100"/>
                    <div className="badge">-15%</div>
                    <button className="btn food-menu-btn">Order Now</button>
                  </div>
                  <div className="wrapper">
                    <p className="category">Paneer</p>
                    <div className="rating-wrapper">
                      <ClientIonIcon  name="star"></ClientIonIcon><ClientIonIcon  name="star"></ClientIonIcon><ClientIonIcon  name="star"></ClientIonIcon><ClientIonIcon  name="star"></ClientIonIcon><ClientIonIcon  name="star"></ClientIonIcon>
                    </div>
                  </div>
                  <h3 className="h3 card-title">Wendy&apos;s Paneer</h3>
                  <div className="price-wrapper">
                    <p className="price-text">Price:</p>
                    <data className="price">Rs.49.00</data>
                    <del className="del">Rs.69.00</del>
                  </div>
                </div>
              </li>

            </ul>
          </div>
        </section>

        {/* CTA */}
        <section className="section section-divider white cta" style={{ backgroundImage: "url('/assets/images/hero-5.jpg')" }}>
          <div className="container">
            <div className="cta-content">
              <h2 className="h2 section-title">The Foooodie Have Excellent Of <span className="span">Quality Burgers!</span></h2>
              <p className="section-text">
                Indulge your cravings with flavors that dance on your palate.
                Family-run eateries preserve traditions, blending influences and catering to varied palates.
              </p>
              <button className="btn btn-hover">Order Now</button>
            </div>
            <figure className="cta-banner">
              <img src="/assets/images/cta-banner.png" width={700} height={637} loading="lazy" alt="Burger" className="w-100 cta-img"/>
              <img src="/assets/images/sale-shape.png" width={216} height={226} loading="lazy" alt="get up to 50% off now" className="abs-img scale-up-anim"/>
            </figure>
          </div>
        </section>

        {/* DELIVERY */}
        <section className="section section-divider gray delivery">
          <div className="container">
            <div className="delivery-content">
              <h2 className="h2 section-title">A Moments Of Delivered On <span className="span">Right Time</span> &amp; Place</h2>
              <p className="section-text">
                Indulge your cravings with flavors that dance on your palate.
                Family-run eateries preserve traditions, blending influences and catering to varied palates.
              </p>
              <button className="btn btn-hover">Order Now</button>
            </div>
            <figure className="delivery-banner">
              <img src="/assets/images/delivery-banner-bg.png" width={700} height={602} loading="lazy" alt="clouds" className="w-100"/>
              <img src="/assets/images/delivery-boy.svg" width={1000} height={880} loading="lazy" alt="delivery boy" className="w-100 delivery-img" data-delivery-boy/>
            </figure>
          </div>
        </section>

        {/* TESTIMONIALS */}
        <section className="section section-divider white testi">
          <div className="container">
            <p className="section-subtitle">Testimonials</p>
            <h2 className="h2 section-title">Our Customers <span className="span">Reviews</span></h2>
            <p className="section-text">Indulge your cravings with flavors that dance on your palate.</p>
            <ul className="testi-list has-scrollbar">
              <li className="testi-item">
                <div className="testi-card">
                  <div className="profile-wrapper">
                    <figure className="avatar">
                      <img src="/assets/images/avatar-1.jpeg" width={80} height={80} loading="lazy" alt="Robert William"/>
                    </figure>
                    <div>
                      <h3 className="h4 testi-name">Sanjeev Kapoor</h3>
                      <p className="testi-title">Masterchef</p>
                    </div>
                  </div>
                  <blockquote className="testi-text">"I would be lost without restaurant. I would like to personally thank you for your outstanding product."</blockquote>
                  <div className="rating-wrapper">
                    <ClientIonIcon  name="star"></ClientIonIcon><ClientIonIcon  name="star"></ClientIonIcon><ClientIonIcon  name="star"></ClientIonIcon><ClientIonIcon  name="star"></ClientIonIcon><ClientIonIcon  name="star"></ClientIonIcon>
                  </div>
                </div>
              </li>

              <li className="testi-item">
                <div className="testi-card">
                  <div className="profile-wrapper">
                    <figure className="avatar">
                      <img src="/assets/images/avatar-2.jpg" width={80} height={80} loading="lazy" alt="Thomas Josef"/>
                    </figure>
                    <div>
                      <h3 className="h4 testi-name">Vikas Khanna</h3>
                      <p className="testi-title">Masterchef</p>
                    </div>
                  </div>
                  <blockquote className="testi-text">"I would be lost without restaurant. I would like to personally thank you for your outstanding product."</blockquote>
                  <div className="rating-wrapper">
                    <ClientIonIcon  name="star"></ClientIonIcon><ClientIonIcon  name="star"></ClientIonIcon><ClientIonIcon  name="star"></ClientIonIcon><ClientIonIcon  name="star"></ClientIonIcon><ClientIonIcon  name="star"></ClientIonIcon>
                  </div>
                </div>
              </li>

              <li className="testi-item">
                <div className="testi-card">
                  <div className="profile-wrapper">
                    <figure className="avatar">
                      <img src="/assets/images/avatar-3.jpeg" width={80} height={80} loading="lazy" alt="Charles Richard"/>
                    </figure>
                    <div>
                      <h3 className="h4 testi-name">Ranveer Brar</h3>
                      <p className="testi-title">Masterchef</p>
                    </div>
                  </div>
                  <blockquote className="testi-text">"I would be lost without restaurant. I would like to personally thank you for your outstanding product."</blockquote>
                  <div className="rating-wrapper">
                    <ClientIonIcon  name="star"></ClientIonIcon><ClientIonIcon  name="star"></ClientIonIcon><ClientIonIcon  name="star"></ClientIonIcon><ClientIonIcon  name="star"></ClientIonIcon><ClientIonIcon  name="star"></ClientIonIcon>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </section>

        {/* BANNERS */}
        <section className="section section-divider gray banner">
          <div className="container">
            <ul className="banner-list">
              <li className="banner-item banner-lg">
                <div className="banner-card">
                  <img src="/assets/images/banner-1.jpg" width={550} height={450} loading="lazy" alt="Discount For Delicious Tasty Burgers!" className="banner-img"/>
                  <div className="banner-item-content">
                    <p className="banner-subtitle">50% Off Now!</p>
                    <h3 className="banner-title">Discount For Delicious Tasty Burgers!</h3>
                    <p className="banner-text">Sale off 50% only this week</p>
                    <button className="btn">Order Now</button>
                  </div>
                </div>
              </li>
              <li className="banner-item banner-sm">
                <div className="banner-card">
                  <img src="/assets/images/banner-2.jpg" width={550} height={465} loading="lazy" alt="Delicious Pizza" className="banner-img"/>
                  <div className="banner-item-content">
                    <h3 className="banner-title">Delicious Pizza</h3>
                    <p className="banner-text">50% off Now</p>
                    <button className="btn">Order Now</button>
                  </div>
                </div>
              </li>
              <li className="banner-item banner-sm">
                <div className="banner-card">
                  <img src="/assets/images/banner-3.jpg" width={550} height={465} loading="lazy" alt="American Burgers" className="banner-img"/>
                  <div className="banner-item-content">
                    <h3 className="banner-title">American Burgers</h3>
                    <p className="banner-text">50% off Now</p>
                    <button className="btn">Order Now</button>
                  </div>
                </div>
              </li>
              <li className="banner-item banner-md">
                <div className="banner-card">
                  <img src="/assets/images/banner-4.jpg" width={550} height={220} loading="lazy" alt="Tasty Buzzed Pizza" className="banner-img"/>
                  <div className="banner-item-content">
                    <h3 className="banner-title">Tasty Buzzed Pizza</h3>
                    <p className="banner-text">Sale off 50% only this week</p>
                    <button className="btn">Order Now</button>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </section>

        {/* BLOG */}
        <section className="section section-divider white blog" id="blog">
          <div className="container">
            <p className="section-subtitle">Latest Blog Posts</p>
            <h2 className="h2 section-title">This Is All About <span className="span">Foods</span></h2>
            <p className="section-text">Food is any substance consumed to provide nutritional support for an organism.</p>

            <ul className="blog-list">
              <li>
                <div className="blog-card">
                  <div className="card-banner">
                    <img src="/assets/nimage/p1.jpeg" width={600} height={390} loading="lazy" alt="Cheese Pizza" className="w-100"/>
                    <div className="badge">Pizza</div>
                  </div>
                  <div className="card-content">
                    <div className="card-meta-wrapper">
                      <a href="#" className="card-meta-link"><ClientIonIcon  name="calendar-outline"></ClientIonIcon><time className="meta-info" dateTime="2024-01-01">Jan 01 2024</time></a>
                      <a href="#" className="card-meta-link"><ClientIonIcon  name="person-outline"></ClientIonIcon><p className="meta-info">Jonathan Smith</p></a>
                    </div>
                    <h3 className="h3"><a href="#" className="card-title">What Do You Think About Cheese Pizza Recipes?</a></h3>
                    <p className="card-text">Financial experts support or help you to to find out which way you can raise your funds more...</p>
                    <a href="#" className="btn-link"><span>Read More</span><ClientIonIcon  name="arrow-forward" aria-hidden="true"></ClientIonIcon></a>
                  </div>
                </div>
              </li>

              <li>
                <div className="blog-card">
                  <div className="card-banner">
                    <img src="/assets/nimage/b1.webp" width={600} height={390} loading="lazy" alt="Paneer Strips" className="w-100"/>
                    <div className="badge">Burger</div>
                  </div>
                  <div className="card-content">
                    <div className="card-meta-wrapper">
                      <a href="#" className="card-meta-link"><ClientIonIcon  name="calendar-outline"></ClientIonIcon><time className="meta-info" dateTime="2024-01-01">Jan 01 2024</time></a>
                      <a href="#" className="card-meta-link"><ClientIonIcon  name="person-outline"></ClientIonIcon><p className="meta-info">Jonathan Smith</p></a>
                    </div>
                    <h3 className="h3"><a href="#" className="card-title">Making Paneer Strips With New Delicious Ingridents.</a></h3>
                    <p className="card-text">Financial experts support or help you to to find out which way you can raise your funds more...</p>
                    <a href="#" className="btn-link"><span>Read More</span><ClientIonIcon  name="arrow-forward" aria-hidden="true"></ClientIonIcon></a>
                  </div>
                </div>
              </li>

              <li>
                <div className="blog-card">
                  <div className="card-banner">
                    <img src="/assets/nimage/pas1.jpeg" width={600} height={390} loading="lazy" alt="Cheesy Pasta" className="w-100"/>
                    <div className="badge">Pasta</div>
                  </div>
                  <div className="card-content">
                    <div className="card-meta-wrapper">
                      <a href="#" className="card-meta-link"><ClientIonIcon  name="calendar-outline"></ClientIonIcon><time className="meta-info" dateTime="2024-01-01">Jan 01 2024</time></a>
                      <a href="#" className="card-meta-link"><ClientIonIcon  name="person-outline"></ClientIonIcon><p className="meta-info">Jonathan Smith</p></a>
                    </div>
                    <h3 className="h3"><a href="#" className="card-title">Innovative Hot Chessy raw Pasta Make Creator Fact.</a></h3>
                    <p className="card-text">Financial experts support or help you to to find out which way you can raise your funds more...</p>
                    <a href="#" className="btn-link"><span>Read More</span><ClientIonIcon  name="arrow-forward" aria-hidden="true"></ClientIonIcon></a>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </section>
      </article>

      {/* FOOTER */}
      <footer className="footer">
        <div className="footer-top" id="contact" style={{ backgroundImage: "url('/assets/images/footer-illustration.png')" }}>
          <div className="container">
            <div className="footer-brand">
              <a href="" className="logo">Fooodie<span className="span">.</span></a>
              <p className="footer-text">Financial experts support or help you to to find out which way you can raise your funds more.</p>

              <ul className="social-list">
                <li><a href="" className="social-link"><ClientIonIcon  name="logo-facebook"></ClientIonIcon></a></li>
                <li><a href="" className="social-link"><ClientIonIcon  name="logo-twitter"></ClientIonIcon></a></li>
                <li><a href="" className="social-link"><ClientIonIcon  name="logo-instagram"></ClientIonIcon></a></li>
                <li><a href="" className="social-link"><ClientIonIcon  name="logo-pinterest"></ClientIonIcon></a></li>
              </ul>
            </div>

            <ul className="footer-list">
              <li><p className="footer-list-title">Contact Info</p></li>
              <li><p className="footer-list-item">+91 9324656948</p></li>
              <li><p className="footer-list-item">Foooooodie@gmail.com</p></li>
              <li><address className="footer-list-item">123, ABC Street,Cityville,Mumbai,India.</address></li>
            </ul>

            <ul className="footer-list">
              <li><p className="footer-list-title">Opening Hours</p></li>
              <li><p className="footer-list-item">Monday-Friday: 08:00-22:00</p></li>
              <li><p className="footer-list-item">Saturday: 10:00-20:00</p></li>
              <li><p className="footer-list-item">Sunday : Till 4pm Mid Night</p></li>
            </ul>

            <form action="" className="footer-form" onSubmit={(e)=>e.preventDefault()}>
              <p className="footer-list-title">Book a Table</p>
              <div className="input-wrapper">
                <input type="text" name="full_name" required placeholder="Your Name" aria-label="Your Name" className="input-field"/>
                <input type="email" name="email_address" required placeholder="Email" aria-label="Email" className="input-field"/>
              </div>
              <div className="input-wrapper">
                <select name="total_person" aria-label="Total person" className="input-field" defaultValue="person">
                  <option value="person">Person</option>
                  <option value="2 person">2 Person</option>
                  <option value="3 person">3 Person</option>
                  <option value="4 person">4 Person</option>
                  <option value="5 person">5 Person</option>
                </select>
                <input type="date" name="booking_date" aria-label="Reservation date" className="input-field"/>
              </div>
              <textarea name="message" required placeholder="Message" aria-label="Message" className="input-field"></textarea>
              <button type="submit" className="btn">Book a Table</button>
            </form>
          </div>
        </div>

        <div className="footer-bottom">
          <div className="container">
            <p className="copyright-text">
              &copy; 2024 <a href="#" className="copyright-link">Aakriti Mehta</a> All Rights Reserved.
            </p>
          </div>
        </div>
      </footer>

      {/* Back to top */}
      <a href="#top" className="back-top-btn" aria-label="Back to top" data-back-top-btn>
        <ClientIonIcon  name="chevron-up"></ClientIonIcon>
      </a>
    </main>
  );
}
