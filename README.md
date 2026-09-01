# RevokX Fitness Website 💪

A modern, responsive fitness coaching website built with HTML, CSS, and JavaScript. Features include ebooks showcase, coaching plans, free tools, and an integrated contact form.

## 🌟 Features

- **Responsive Design** - Works seamlessly on desktop, tablet, and mobile
- **Hero Section** - Eye-catching landing with animated stats and video modal
- **Ebooks Showcase** - Display fitness ebooks with pricing and purchase links
- **Coaching Plans** - Multiple coaching tiers (Fat Loss, Weight Gain, Transformation)
- **Free Tools** - Collection of fitness calculators for hostel students
- **Contact Form** - Integrated with Brevo API for email notifications
- **Smooth Animations** - Scroll-triggered reveals and smooth transitions
- **Video Modal** - Built-in video player for promotional content
- **FAQ Accordion** - Interactive questions and answers section
- **Reviews Carousel** - Infinite scrolling testimonials

## 🚀 Quick Start

1. **Clone the repository**
   ```bash
   git clone https://github.com/YOUR_USERNAME/revokx.git
   cd revokx
   ```

2. **Set up the contact form**
   ```bash
   # Copy the example config file
   cp config.example.js config.js
   ```

3. **Configure your credentials**
   - Open `config.js`
   - Add your Brevo API key
   - Add your email address to receive contact form submissions

4. **Open in browser**
   - Simply open `index.html` in your web browser
   - No build process or dependencies required!

## 📧 Contact Form Setup

The contact form uses the Brevo (formerly Sendinblue) API to send emails.

### Steps:

1. Get a free Brevo API key from [https://app.brevo.com/settings/keys/api](https://app.brevo.com/settings/keys/api)

2. Copy `config.example.js` to `config.js`:
   ```bash
   cp config.example.js config.js
   ```

3. Edit `config.js` with your credentials:
   ```javascript
   const CONFIG = {
     BREVO_API_KEY: 'your-actual-api-key-here',
     RECIPIENT_EMAIL: 'your-email@example.com',
     RECIPIENT_NAME: 'Your Name'
   };
   ```

4. The `config.js` file is in `.gitignore` and won't be committed to GitHub

## 📁 Project Structure

```
revokx/
├── index.html              # Main landing page
├── style.css               # Main stylesheet
├── script.js               # JavaScript functionality
├── config.example.js       # Configuration template (safe for GitHub)
├── config.js              # Your actual config (not committed)
├── tools.html             # Free tools page
├── tools.css              # Tools page styling
├── budget-calculator.html # Budget calculator tool
├── mess-mapper.html       # Mess menu mapper tool
├── plan-switcher.html     # Goal-based plan switcher
├── progress-tracker.html  # Progress tracking tool
├── data.js                # Nutrition data for tools
└── images/                # Image assets
    ├── hero.png
    ├── about.png
    ├── fatloss43.png
    ├── muscle43.png
    ├── food43.png
    └── lv_0_20260830183008.mp4
```

## 🎨 Customization

### Colors
Edit the CSS variables in `style.css`:
```css
:root {
  --black: #0a0a0a;
  --orange: #ff5b1f;
  --white: #f5f5f5;
  /* ... more variables */
}
```

### Content
- Update text content directly in `index.html`
- Replace images in the `images/` folder
- Modify pricing and plans as needed

## 🔒 Security

- API keys are stored in `config.js` which is excluded from git via `.gitignore`
- Never commit your `config.js` file with real credentials
- The `config.example.js` shows the structure without exposing secrets

## 🛠️ Technologies Used

- **HTML5** - Semantic markup
- **CSS3** - Modern styling with CSS Grid and Flexbox
- **JavaScript (ES6+)** - Vanilla JS, no frameworks
- **Brevo API** - Email sending service
- **Google Fonts** - Anton & Poppins font families

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 📝 License

This project is open source and available for personal and commercial use.

## 🤝 Contributing

Feel free to fork this project and customize it for your own fitness coaching business!

## 📞 Contact

For questions or support, use the contact form on the website or reach out directly.

---

Built with 💪 by RevokX
