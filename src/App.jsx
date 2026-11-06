import {
  Logo,
  Wave,
  Doodles,
  InstagramIcon,
  FacebookIcon,
  XIcon,
} from './ui'
import './App.css'

/* Page content — edit these lists to change the site. */

const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Menu', href: '#menu' },
  { label: 'Blog', href: '#blog' },
  { label: 'Shop', href: '#shop' },
  { label: 'Contact', href: '#contact' },
]

const hours = [
  { days: 'Monday – Friday', time: '10:00 AM – 10:00 PM' },
  { days: 'Saturday and Sunday', time: '9:00 AM – 10:00 PM' },
]

const testimonials = [
  {
    name: 'John Peter',
    quote:
      'The best flat white in the city. Warm staff, cozy corners and beans roasted right in front of you — I stop by every single morning.',
  },
  {
    name: 'Elle Jameson',
    quote:
      'I came for the coffee and stayed for the atmosphere. The cold brew is unreal, and the pastries never last long.',
  },
]

const branches = [
  {
    city: 'New York',
    image: '/branch-new-york.png',
    alt: 'Brick-walled specialty coffee shop in SoHo, New York',
    description:
      '48 Mercer Street, SoHo. Our flagship roastery with a full espresso bar and daily cupping sessions.',
  },
  {
    city: 'Jakarta',
    image: '/branch-jakarta.png',
    alt: 'Barista pouring latte art in a plant-filled Jakarta café',
    description:
      'Jl. Senopati No. 27, South Jakarta. A quiet garden café built for slow mornings and long talks.',
  },
  {
    city: 'Paris',
    image: '/branch-paris.png',
    alt: 'Parisian café with marble tables and rattan chairs in Le Marais',
    description:
      '14 Rue des Rosiers, Le Marais. Pastries, pour-overs and a sunlit terrace on the corner.',
  },
]

const information = [
  { label: 'About us', href: '#about' },
  { label: 'Branches', href: '#branches' },
  { label: 'Menu', href: '#menu' },
  { label: 'Contact', href: '#contact' },
  { label: 'Blog', href: '#blog' },
]

function App() {
  return (
    <>
      {/* Navigation */}
      <header className="site-header">
        <nav className="container nav">
          <ul className="nav-links">
            {navLinks.map(({ label, href }, index) => (
              <li key={label}>
                <a href={href} className={index === 0 ? 'active' : undefined}>
                  {label}
                </a>
              </li>
            ))}
          </ul>

          <a href="#home" className="logo">
            <Logo />
            <span>YOUR LOGO</span>
          </a>
        </nav>
      </header>

      <main>
        {/* Hero */}
        <section id="home" className="hero">
          <img
            className="hero-bg"
            src="/coffee.png"
            alt="Espresso, latte and coffee beans on a marble counter"
          />
          <div className="hero-overlay" aria-hidden="true" />

          <div className="container hero-inner">
            <div className="hero-content">
              <h1 className="hero-title">Coffee Time</h1>
              <p className="hero-kicker">Your headline</p>
              <p className="hero-copy">
                Single-origin beans, roasted in small batches and brewed to
                order. From the first espresso of the morning to the last flat
                white of the night.
              </p>
              <a href="#menu" className="btn btn-teal">
                Order Now
              </a>
            </div>
          </div>

          <Wave className="wave-teal hero-wave" />
        </section>

        {/* Black coffees */}
        <section id="menu" className="section section-teal">
          <Doodles light />

          <div className="container">
            <div className="split black-split">
              <div>
                <h2 className="title-script">
                  Black
                  <br />
                  Coffees
                </h2>
                <p className="lead">
                  Bold, dark and full-bodied. Our black coffees are brewed from
                  freshly ground single-origin beans and served hot — or over
                  ice, if that&apos;s your thing.
                </p>
                <a href="#shop" className="btn btn-navy">
                  Order Now
                </a>
              </div>

              <div className="blob-wrap align-right">
                <div className="blob">
                  <img
                    src="/black-coffee.png"
                    alt="Pour-over coffee brewing into a glass carafe"
                  />
                </div>
              </div>
            </div>
          </div>

          <Wave flip />
        </section>

        {/* Hot coffees */}
        <section id="shop" className="section section-navy">
          <Doodles />

          <div className="container">
            <div className="split hot-split">
              <div className="blob-wrap">
                <div className="blob blob--alt">
                  <img
                    src="/hot-coffee.png"
                    alt="Fresh latte with latte art on a marble table"
                  />
                </div>
              </div>

              <div className="hot-copy">
                <h2 className="title-script">
                  Hot
                  <br />
                  Coffees
                </h2>
                <p className="lead">
                  Velvety steamed milk, a double shot of espresso and a little
                  patience. Every hot coffee is poured fresh, cup by cup.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section id="blog" className="section testimonials">
          <div className="container testimonials-inner">
            <div className="testimonial-grid">
              {testimonials.map(({ name, quote }) => (
                <figure key={name}>
                  <figcaption className="testimonial-name">{name}</figcaption>
                  <blockquote className="testimonial-quote">
                    &ldquo;{quote}&rdquo;
                  </blockquote>
                </figure>
              ))}
            </div>
          </div>

          <Wave className="wave-teal" />
        </section>

        {/* Opening hours */}
        <section id="about" className="section section-teal">
          <Doodles light />

          <div className="container">
            <div className="hours-inner">
              <h2 className="hours-title">We are Open</h2>

              <div className="hours-list">
                {hours.map(({ days, time }) => (
                  <div key={days}>
                    <p className="hours-days">{days}</p>
                    <p className="hours-time">{time}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <Wave flip />
        </section>

        {/* Branches */}
        <section id="branches" className="section section-navy">
          <Doodles />

          <div className="container branches-inner">
            <h2 className="branches-title">Our Branches</h2>

            <div className="branch-grid">
              {branches.map(({ city, image, alt, description }) => (
                <article key={city} className="branch">
                  <div className="branch-thumb">
                    <div className="branch-media">
                      <img src={image} alt={alt} />
                    </div>
                    <span className="branch-city">{city}</span>
                  </div>

                  <p className="branch-desc">{description}</p>
                  <div className="branch-cta">
                    <a href="#contact" className="branch-link">
                      Learn More
                    </a>
                  </div>
                </article>
              ))}
            </div>
          </div>

          <Wave className="wave-teal" />
        </section>
      </main>

      {/* Footer */}
      <footer id="contact" className="footer">
        <div className="container footer-inner">
          <div className="footer-grid">
            <div>
              <a href="#home" className="footer-brand">
                <Logo />
                <span>YOUR LOGO</span>
              </a>
              <p className="footer-tagline">
                Small-batch coffee, roasted daily. Find us in New York, Jakarta
                and Paris.
              </p>
            </div>

            <div>
              <h3 className="footer-heading">Information.</h3>
              <ul className="footer-list">
                {information.map(({ label, href }) => (
                  <li key={label}>
                    <a href={href}>{label}</a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="footer-heading">Contact Us.</h3>
              <ul className="footer-list">
                <li>
                  <a href="mailto:hello@coffeetime.com">
                    hello@coffeetime.com
                  </a>
                </li>
                <li>
                  <a href="tel:+12125550184">+1 (212) 555-0184</a>
                </li>
                <li>
                  48 Mercer Street
                  <br />
                  New York, NY 10013
                </li>
              </ul>
            </div>
          </div>

          <div className="footer-bottom">
            <ul className="footer-nav">
              {navLinks.map(({ label, href }) => (
                <li key={label}>
                  <a href={href}>{label}</a>
                </li>
              ))}
            </ul>

            <div className="socials">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
                aria-label="Instagram"
              >
                <InstagramIcon />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noreferrer"
                aria-label="Facebook"
              >
                <FacebookIcon />
              </a>
              <a
                href="https://x.com"
                target="_blank"
                rel="noreferrer"
                aria-label="X"
              >
                <XIcon />
              </a>
            </div>
          </div>

          <p className="copyright">
            © 2026 Coffee Time. All rights reserved.
          </p>
        </div>
      </footer>
    </>
  )
}

export default App
