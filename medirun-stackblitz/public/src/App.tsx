import { useState, type ReactNode } from "react"

const palette = {
  paleMint: "#EAF5E1",
  freshGreen: "#C8E7D6",
  orange: "#FF7A3A",
  offWhite: "#FAFAF7",
  charcoal: "#35424A",
}

type IconName = "arrow" | "bag" | "check" | "clock" | "close" | "menu" | "pharmacy" | "pin" | "search" | "shield" | "spark"

function Icon({ name, className = "" }: { name: IconName className?: string }) {
  const icons: Record<IconName, ReactNode> = {
    arrow: (
      <>
        <path d="M5 12h14" />
        <path d="m14 7 5 5-5 5" />
      </>
    ),
    bag: (
      <>
        <path d="M5 8h14l-1 13H6L5 8Z" />
        <path d="M9 9V6a3 3 0 0 1 6 0v3" />
      </>
    ),
    check: <path d="m5 12 4 4L19 6" />,
    clock: (
      <>
        <circle cx="12" cy="12" r="9" />
        <path d="M12 7v5l3.5 2" />
      </>
    ),
    close: (
      <>
        <path d="m6 6 12 12" />
        <path d="M18 6 6 18" />
      </>
    ),
    menu: (
      <>
        <path d="M4 7h16" />
        <path d="M4 12h16" />
        <path d="M4 17h16" />
      </>
    ),
    pharmacy: (
      <>
        <path d="M4 10h16v11H4z" />
        <path d="m3 10 2-6h14l2 6" />
        <path d="M9 21v-6h6v6" />
      </>
    ),
    pin: (
      <>
        <path d="M12 22s7-5.7 7-13a7 7 0 1 0-14 0c0 7.3 7 13 7 13Z" />
        <circle cx="12" cy="9" r="2.3" />
      </>
    ),
    search: (
      <>
        <circle cx="10.5" cy="10.5" r="6.5" />
        <path d="m16 16 5 5" />
      </>
    ),
    shield: (
      <>
        <path d="M12 22s8-3.8 8-10V5l-8-3-8 3v7c0 6.2 8 10 8 10Z" />
        <path d="m8.5 12 2.2 2.2 4.8-5" />
      </>
    ),
    spark: (
      <path d="M12 2c.6 6.2 3.8 9.4 10 10-6.2.6-9.4 3.8-10 10-.6-6.2-3.8-9.4-10-10 6.2-.6 9.4-3.8 10-10Z" />
    ),
  }

  return (
    <svg className={className} viewBox="0 0 24 24" aria-hidden="true">
      {icons[name]}
    </svg>
  )
}

function HeartFlow({ className = "" }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 120 96"
      role="img"
      aria-label="MediRun heart logo"
    >
      <path
        d="M106 26C95 6 68 12 60 31 52 12 25 6 14 26 1 50 23 71 60 90c37-19 59-40 46-64Z"
        fill={palette.orange}
      />
      <path
        d="M6 47h31c8 0 13-4 17-12l6-12"
        fill="none"
        stroke={palette.offWhite}
        strokeLinecap="round"
        strokeWidth="9"
      />
      <path
        d="M8 30h20"
        fill="none"
        stroke={palette.charcoal}
        strokeLinecap="round"
        strokeWidth="6"
      />
      <path
        d="M34 20c-4 0-7 3-7 7 0 6 7 11 7 11s7-5 7-11c0-4-3-7-7-7Z"
        fill={palette.charcoal}
      />
    </svg>
  )
}

function Logo({
  light = false,
  tagline = false,
}: {
  light?: boolean
  tagline?: boolean
}) {
  return (
    <div className={`logo ${light ? "logo--light" : ""}`}>
      <HeartFlow />
      <div>
        <div className="wordmark">
          <span>Medi</span>
          <span>Run</span>
        </div>
        {tagline && <div className="tagline">Care on the way.</div>}
      </div>
    </div>
  )
}

function HeroComposition() {
  return (
    <div
      className="hero-art"
      aria-label="Health products moving from a pharmacy to your door"
    >
      <div className="hero-orbit" />
      <div className="hero-sun">
        <Icon name="spark" />
      </div>
      <svg className="route-line" viewBox="0 0 520 470" aria-hidden="true">
        <path d="M42 128c61-51 153-41 190 15 35 53 2 93 51 128 40 28 101 7 180 68" />
      </svg>

      <div className="delivery-bag">
        <div className="bag-handle" />
        <div className="bag-fold" />
        <Logo />
        <p>
          HEALTH
          <br />
          IN HAND.
        </p>
        <span className="bag-label">FROM YOUR LOCAL PHARMACY</span>
      </div>

      <div className="hero-product hero-product--bottle">
        <div className="bottle-cap" />
        <div className="bottle-label">
          <HeartFlow />
          <span>
            Daily
            <br />
            care
          </span>
        </div>
      </div>
      <div className="hero-product hero-product--box">
        <span>EVERYDAY</span>
        <b>Essentials</b>
        <div className="box-capsule">
          <i />
          <i />
        </div>
      </div>
      <div className="hero-product hero-product--tube">
        <div className="tube-cap" />
        <HeartFlow />
        <span>
          PERSONAL
          <br />
          CARE
        </span>
      </div>

      <div className="route-pin">
        <Icon name="pin" />
      </div>
      <div className="status-chip">
        <span>
          <Icon name="bag" />
        </span>
        <div>
          <b>Care is on the way</b>
          <small>Prepared by a participating pharmacy</small>
        </div>
      </div>
      <div className="art-caption">01 / Everyday care in motion</div>
    </div>
  )
}

type Category = "All essentials" | "Pain relief" | "Hydration" | "Personal care" | "First aid"

type Product = {
  id: string
  name: string
  brand: string
  size: string
  price: number
  category: Category
  image: string
  badge?: string
}

const categories: Category[] = [
  "All essentials",
  "Pain relief",
  "Hydration",
  "Personal care",
  "First aid",
]

const products: Product[] = [
  {
    id: "panado-24",
    name: "Panado Tablets",
    brand: "Panado",
    size: "24 tablets",
    price: 38,
    category: "Pain relief",
    image:
      "https://media.takealot.com/covers_tsins/51584455/51584455-1-pdpxl.jpg",
    badge: "Family favourite",
  },
  {
    id: "rehidrat-6",
    name: "Rehidrat Blackcurrant",
    brand: "Rehidrat",
    size: "6 × 14g sachets",
    price: 119,
    category: "Hydration",
    image:
      "https://media.takealot.com/covers_images/c8105b645623474f99a2536e06fb9334/s-pdpxl.file",
    badge: "SA favourite",
  },
  {
    id: "nivea-creme",
    name: "NIVEA Creme Tin",
    brand: "NIVEA",
    size: "150ml",
    price: 59,
    category: "Personal care",
    image:
      "https://media.takealot.com/covers_images/1d3d19067b4a44b8947a7ac025cbc0c0/s-pdpxl.file",
  },
  {
    id: "dettol-250",
    name: "Dettol Antiseptic Liquid",
    brand: "Dettol",
    size: "250ml",
    price: 49,
    category: "First aid",
    image:
      "https://media.takealot.com/covers_images/9885f5d8073141b0995f8d2bad7064f7/s-pdpxl.file",
    badge: "16% off",
  },
]

function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [activeCategory, setActiveCategory] =
    useState<Category>("All essentials")
  const [searchQuery, setSearchQuery] = useState("")
  const [location, setLocation] = useState("Johannesburg")
  const [cartOpen, setCartOpen] = useState(false)
  const [cart, setCart] = useState<Record<string, number>>({})

  const closeMenu = () => setMenuOpen(false)
  const cartCount = Object.values(cart).reduce(
    (total, quantity) => total + quantity,
    0,
  )
  const cartItems = products.filter((product) => cart[product.id])
  const cartTotal = cartItems.reduce(
    (total, product) => total + product.price * cart[product.id],
    0,
  )
  const visibleProducts = products.filter((product) => {
    const matchesCategory =
      activeCategory === "All essentials" || product.category === activeCategory
    const query = searchQuery.trim().toLowerCase()
    const matchesSearch =
      !query ||
      `${product.brand} ${product.name} ${product.category}`
        .toLowerCase()
        .includes(query)
    return matchesCategory && matchesSearch
  })

  const updateCart = (id: string, change: number) => {
    setCart((current) => {
      const nextQuantity = Math.max(0, (current[id] ?? 0) + change)
      const next = { ...current }
      if (nextQuantity === 0) delete next[id]
      else next[id] = nextQuantity
      return next
    })
  }

  return (
    <main>
      <header className="site-header">
        <a className="brand-link" href="#home" aria-label="MediRun home">
          <Logo />
        </a>
        <nav
          className={menuOpen ? "nav nav--open" : "nav"}
          aria-label="Primary navigation"
        >
          <a className="active" href="#home" onClick={closeMenu}>
            Home
          </a>
          <a href="#how" onClick={closeMenu}>
            How It Works
          </a>
          <a href="#products" onClick={closeMenu}>
            Explore Products
          </a>
          <a href="#about" onClick={closeMenu}>
            About Us
          </a>
          <a href="#pharmacies" onClick={closeMenu}>
            For Pharmacies
          </a>
        </nav>
        <div className="header-actions">
          <a className="sign-in" href="#signin">
            Sign In
          </a>
          <button
            className="cart-button"
            type="button"
            onClick={() => setCartOpen(true)}
            aria-label={`Open cart with ${cartCount} items`}
          >
            <Icon name="bag" />
            <span>Cart</span>
            <b>{cartCount}</b>
          </button>
          <button
            className="menu-button"
            type="button"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label={menuOpen ? "Close navigation" : "Open navigation"}
          >
            <Icon name={menuOpen ? "close" : "menu"} />
          </button>
        </div>
      </header>

      <section className="hero" id="home">
        <div className="hero-copy">
          <div className="eyebrow">
            <i /> Care on the way.
          </div>
          <h1>
            Pharmacy essentials,
            <br />
            <em>delivered.</em>
          </h1>
          <p>
            Shop trusted everyday health and personal-care products from
            participating pharmacies near you.
          </p>
          <form
            className="market-search"
            onSubmit={(event) => {
              event.preventDefault()
              document.querySelector("#products")?.scrollIntoView()
            }}
          >
            <label className="location-field">
              <span>
                <Icon name="pin" /> Deliver to
              </span>
              <select
                value={location}
                onChange={(event) => setLocation(event.target.value)}
                aria-label="Delivery location"
              >
                <option>Johannesburg</option>
                <option>Cape Town</option>
                <option>Durban</option>
                <option>Pretoria</option>
              </select>
            </label>
            <label className="search-field">
              <Icon name="search" />
              <input
                type="search"
                value={searchQuery}
                onChange={(event) => setSearchQuery(event.target.value)}
                placeholder="Search Panado, first aid, skincare..."
                aria-label="Search health products"
              />
            </label>
            <button type="submit" aria-label="Search products">
              <Icon name="arrow" />
            </button>
          </form>
          <div className="popular-searches">
            <span>Popular:</span>
            {["Pain relief", "Hydration", "Personal care"].map((category) => (
              <button
                key={category}
                type="button"
                onClick={() => {
                  setActiveCategory(category as Category)
                  document.querySelector("#products")?.scrollIntoView()
                }}
              >
                {category}
              </button>
            ))}
          </div>
          <div className="hero-proof">
            <span>
              <Icon name="shield" /> Participating pharmacies
            </span>
            <span>
              <Icon name="clock" /> Same-day options in selected areas
            </span>
          </div>
        </div>
        <HeroComposition />
      </section>

      <section className="marquee" aria-label="MediRun brand promises">
        <div>
          <span>CARE IN MOTION</span>
          <Icon name="spark" />
          <span>HEALTH WITHIN REACH</span>
          <Icon name="spark" />
          <span>FROM PHARMACY TO DOOR</span>
          <Icon name="spark" />
          <span>CARE ON THE WAY</span>
        </div>
      </section>

      <section className="how section" id="how">
        <div className="section-intro">
          <div className="section-index">01 / HOW IT WORKS</div>
          <div>
            <h2>
              Three steps.
              <br />
              <em>One easier way.</em>
            </h2>
            <p>
              We connect the things you need with participating pharmacies and
              convenient delivery.
            </p>
          </div>
        </div>
        <div className="steps">
          {[
            [
              "01",
              "Tell us what you need.",
              "Search and explore everyday health products from wherever you are.",
              "search",
            ],
            [
              "02",
              "Connect with a participating pharmacy.",
              "Choose from available products supplied by a pharmacy in the MediRun network.",
              "pharmacy",
            ],
            [
              "03",
              "Get your order delivered.",
              "Your order is prepared with care and brought conveniently to your door.",
              "bag",
            ],
          ].map(([number, title, description, icon], index) => (
            <article className="step" key={number}>
              <div className="step-top">
                <span>{number}</span>
                <div className="step-icon">
                  <Icon name={icon as IconName} />
                </div>
              </div>
              <div className="step-graphic">
                <i />
                <b>{index < 2 ? "·················" : "ARRIVED"}</b>
                {index < 2 && <span />}
              </div>
              <h3>{title}</h3>
              <p>{description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="products section" id="products">
        <div className="products-heading">
          <div>
            <div className="section-index">02 / EXPLORE HEALTH ESSENTIALS</div>
            <h2>
              Trusted products.
              <br />
              Local convenience.
            </h2>
          </div>
          <p>
            Real household names, clear ZAR pricing, and easy ordering from
            pharmacies serving {location}.
          </p>
        </div>

        <div
          className="category-tabs"
          role="tablist"
          aria-label="Product categories"
        >
          {categories.map((category) => (
            <button
              className={activeCategory === category ? "active" : ""}
              key={category}
              onClick={() => setActiveCategory(category)}
              role="tab"
              type="button"
              aria-selected={activeCategory === category}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="product-grid">
          {visibleProducts.map((product, index) => (
            <article
              className={`product product--${index + 1}`}
              key={product.id}
            >
              <div className="product-card-top">
                <span className="product-number">0{index + 1}</span>
                {product.badge && (
                  <span className="product-badge">{product.badge}</span>
                )}
              </div>
              <div className="product-image">
                <img
                  src={product.image}
                  alt={`${product.name} ${product.size}`}
                />
              </div>
              <div className="product-meta">
                <div>
                  <span>
                    {product.brand} / {product.category}
                  </span>
                  <h3>{product.name}</h3>
                  <small>{product.size}</small>
                </div>
              </div>
              <div className="product-buy">
                <strong>R{product.price.toFixed(2)}</strong>
                {cart[product.id] ? (
                  <div
                    className="quantity-control"
                    aria-label={`${product.name} quantity`}
                  >
                    <button
                      type="button"
                      onClick={() => updateCart(product.id, -1)}
                      aria-label={`Remove one ${product.name}`}
                    >
                      −
                    </button>
                    <span>{cart[product.id]}</span>
                    <button
                      type="button"
                      onClick={() => updateCart(product.id, 1)}
                      aria-label={`Add another ${product.name}`}
                    >
                      +
                    </button>
                  </div>
                ) : (
                  <button
                    className="add-button"
                    type="button"
                    onClick={() => updateCart(product.id, 1)}
                  >
                    Add to cart <Icon name="bag" />
                  </button>
                )}
              </div>
            </article>
          ))}
          {visibleProducts.length === 0 && (
            <div className="empty-products">
              <Icon name="search" />
              <h3>No products found</h3>
              <p>Try another product name or browse all essentials.</p>
              <button
                type="button"
                onClick={() => {
                  setSearchQuery("")
                  setActiveCategory("All essentials")
                }}
              >
                Show all products
              </button>
            </div>
          )}
          <article className="category-promo">
            <HeartFlow />
            <div>
              <span>CAN'T FIND IT?</span>
              <h3>
                Tell us what
                <br />
                you need.
              </h3>
            </div>
            <button
              type="button"
              onClick={() =>
                document
                  .querySelector<HTMLInputElement>(".search-field input")
                  ?.focus()
              }
            >
              Start a search <Icon name="arrow" />
            </button>
          </article>
        </div>
        <p className="product-note">
          Indicative marketplace pricing. Product availability and final pricing
          vary by participating pharmacy and delivery area.
        </p>
      </section>

      <section className="why section" id="about">
        <div className="why-visual">
          <div className="why-shape" />
          <div className="doorstep-bag">
            <div className="doorstep-handle" />
            <Logo />
            <span>
              CARE
              <br />
              ON THE
              <br />
              WAY.
            </span>
          </div>
          <div className="why-route">
            <i />
            <span />
            <b />
          </div>
          <div className="why-sticker">
            <HeartFlow />
            <span>
              YOUR HEALTH.
              <br />
              YOUR TIME.
            </span>
          </div>
        </div>
        <div className="why-copy">
          <div className="section-index">03 / WHY MEDIRUN?</div>
          <h2>
            Care should fit
            <br />
            into <em>your day.</em>
          </h2>
          <p>
            MediRun creates a simpler connection between customers,
            participating pharmacies and the health products people need.
          </p>
          <div className="benefit-list">
            {[
              ["Convenience", "Explore and order from wherever you are."],
              [
                "Connected access",
                "Discover products from participating pharmacies.",
              ],
              [
                "A simpler experience",
                "Less running around for everyday health essentials.",
              ],
              ["Time back", "Convenient delivery that comes to you."],
            ].map(([title, copy], index) => (
              <div className="benefit" key={title}>
                <span>0{index + 1}</span>
                <div>
                  <h3>{title}</h3>
                  <p>{copy}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="pharmacy section" id="pharmacies">
        <div className="pharmacy-copy">
          <div className="section-index section-index--light">
            04 / PHARMACY PARTNERSHIPS
          </div>
          <h2>
            Better connected.
            <br />
            <em>Better care.</em>
          </h2>
          <p>
            Extend your pharmacy's reach and serve customers through a
            distinctive, convenient digital delivery experience.
          </p>
          <a className="button button--orange" href="#join">
            Join MediRun <Icon name="arrow" />
          </a>
          <div className="partner-points">
            <span>
              <Icon name="check" /> Reach more customers
            </span>
            <span>
              <Icon name="check" /> Extend convenient access
            </span>
          </div>
        </div>
        <div className="pharmacy-art">
          <div className="store">
            <div className="store-sign">
              <HeartFlow />
              <span>
                PARTICIPATING
                <br />
                PHARMACY
              </span>
            </div>
            <div className="awning">
              <i />
              <i />
              <i />
              <i />
              <i />
            </div>
            <div className="store-door">
              <span>OPEN</span>
            </div>
            <div className="store-window">
              <b>
                Care is
                <br />
                closer.
              </b>
              <HeartFlow />
            </div>
          </div>
          <div className="partner-seal">
            <Icon name="shield" />
            <span>
              MEDIRUN
              <br />
              PARTNER
            </span>
          </div>
          <div className="store-route">
            <span />
            <i />
            <b />
          </div>
        </div>
      </section>

      <section className="closing section">
        <div className="closing-mark">
          <HeartFlow />
          <Icon name="spark" />
        </div>
        <div className="closing-copy">
          <span>MEDIRUN / SOUTH AFRICA</span>
          <h2>
            Care on the way.
            <br />
            <em>Wherever you need it.</em>
          </h2>
          <p>
            Explore everyday health essentials and connect with participating
            pharmacies near you.
          </p>
          <a className="button" href="#products">
            Get Started <Icon name="arrow" />
          </a>
        </div>
        <div className="closing-route">
          <span />
          <i />
          <b />
        </div>
      </section>

      <footer>
        <div className="footer-top">
          <div className="footer-brand">
            <Logo light tagline />
            <p>
              Making everyday health essentials easier to access through
              participating pharmacies and convenient delivery.
            </p>
          </div>
          <div className="footer-column">
            <b>Explore</b>
            <a href="#home">Home</a>
            <a href="#how">How It Works</a>
            <a href="#products">Explore Products</a>
            <a href="#about">About Us</a>
          </div>
          <div className="footer-column">
            <b>Partners</b>
            <a href="#pharmacies">For Pharmacies</a>
            <a href="#join">Join MediRun</a>
            <a href="#signin">Pharmacy Sign In</a>
          </div>
          <div className="footer-column">
            <b>Support</b>
            <a href="#help">Help Centre</a>
            <a href="#contact">Contact Us</a>
            <a href="#delivery">Delivery Areas</a>
          </div>
        </div>
        <div className="footer-bottom">
          <span>© 2025 MediRun. All rights reserved.</span>
          <div>
            <a href="#privacy">Privacy</a>
            <a href="#terms">Terms</a>
          </div>
          <span>Care on the way.</span>
        </div>
      </footer>

      <button
        className={cartOpen ? "cart-scrim cart-scrim--open" : "cart-scrim"}
        type="button"
        onClick={() => setCartOpen(false)}
        aria-label="Close cart"
      />
      <aside
        className={cartOpen ? "cart-drawer cart-drawer--open" : "cart-drawer"}
        aria-label="Shopping cart"
        aria-hidden={!cartOpen}
      >
        <div className="cart-drawer-head">
          <div>
            <span>YOUR ORDER</span>
            <h2>
              {cartCount
                ? `${cartCount} item${cartCount === 1 ? "" : "s"}`
                : "Your cart"}
            </h2>
          </div>
          <button
            type="button"
            onClick={() => setCartOpen(false)}
            aria-label="Close cart"
          >
            <Icon name="close" />
          </button>
        </div>
        <div className="cart-location">
          <Icon name="pin" />
          <span>
            Delivering to <b>{location}</b>
          </span>
        </div>
        <div className="cart-items">
          {cartItems.length ? (
            cartItems.map((product) => (
              <article className="cart-item" key={product.id}>
                <img src={product.image} alt="" />
                <div>
                  <span>{product.brand}</span>
                  <h3>{product.name}</h3>
                  <strong>R{product.price.toFixed(2)}</strong>
                </div>
                <div className="quantity-control quantity-control--cart">
                  <button
                    type="button"
                    onClick={() => updateCart(product.id, -1)}
                    aria-label={`Remove one ${product.name}`}
                  >
                    −
                  </button>
                  <span>{cart[product.id]}</span>
                  <button
                    type="button"
                    onClick={() => updateCart(product.id, 1)}
                    aria-label={`Add another ${product.name}`}
                  >
                    +
                  </button>
                </div>
              </article>
            ))
          ) : (
            <div className="cart-empty">
              <span>
                <Icon name="bag" />
              </span>
              <h3>Your care basket is empty.</h3>
              <p>Add an everyday essential and it will appear here.</p>
              <button
                type="button"
                onClick={() => {
                  setCartOpen(false)
                  document.querySelector("#products")?.scrollIntoView()
                }}
              >
                Browse products
              </button>
            </div>
          )}
        </div>
        {cartItems.length > 0 && (
          <div className="cart-summary">
            <div>
              <span>Subtotal</span>
              <strong>R{cartTotal.toFixed(2)}</strong>
            </div>
            <p>
              Delivery is calculated after your pharmacy confirms availability.
            </p>
            <button type="button">
              Continue to checkout <Icon name="arrow" />
            </button>
          </div>
        )}
      </aside>
    </main>
  )
}

export default App
