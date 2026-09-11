# Snehadeep Properties — React + Vite + Tailwind

A component-based recreation of the supplied Snehadeep Properties desktop, tablet and mobile designs.

## 1. Run the project

```bash
npm install
npm run dev
```

Then open the local Vite URL shown in the terminal.

## 2. Folder structure

```text
snehadeep_site/
├── public/
│   └── images/              # Replace images here — no React code changes needed
├── src/
│   ├── components/          # Reusable UI sections/components
│   │   ├── ArrowButton.jsx
│   │   ├── ContactBanner.jsx
│   │   ├── Footer.jsx
│   │   ├── Hero.jsx
│   │   ├── Logo.jsx
│   │   ├── Navbar.jsx
│   │   ├── ProjectsSection.jsx
│   │   ├── SectionLabel.jsx
│   │   ├── StatsStrip.jsx
│   │   ├── StorySection.jsx
│   │   └── WhyChooseUs.jsx
│   ├── config/
│   │   └── siteConfig.js    # Business info, social links, form settings and image paths
│   ├── pages/
│   │   ├── About.jsx
│   │   ├── Contact.jsx
│   │   └── Home.jsx
│   ├── styles/
│   │   └── index.css
│   ├── App.jsx
│   └── main.jsx
├── index.html
├── package.json
├── postcss.config.js
├── tailwind.config.js
└── vite.config.js
```

## 3. Navigation

- `/` → Home
- `/about` → About Us
- `/contact` → React email contact page
- Logo → Home
- Desktop: Home + About Us in navbar
- Phone/tablet: hamburger menu with Home, About Us, Contact Us, Facebook and Instagram

## 4. Change logo and images

All images are inside `public/images/`.

Example: if you replace `hero-background.jpg` with your own image using the same filename, the Home hero automatically uses it.

If you want different filenames, update only `src/config/siteConfig.js` under `images`.

The logo works the same way:

```js
images: {
  logo: '/images/logo-light.png',
  logoFooter: '/images/logo-footer.png',
}
```

Put your replacement files in `public/images/` and update those two paths if necessary.

## 5. Google Form

Create one Google Form with these questions:

1. Name
2. Phone number
3. Email address
4. Description — area, location, land details, requirements

Copy the Google Form's public responder URL and paste it into:

```js
googleFormUrl: 'PASTE_YOUR_GOOGLE_FORM_URL_HERE'
```

in `src/config/siteConfig.js`.

Every **Contact Us** button then opens that Google Form in a new tab.

## 6. React form → email

The `/contact` page uses EmailJS so you do not have to put a private SMTP password in React frontend code.

1. Create an EmailJS account.
2. Connect the email service that should receive the messages.
3. Create an email template using these variables:
   - `{{from_name}}`
   - `{{phone}}`
   - `{{reply_to}}`
   - `{{message}}`
4. Copy the Service ID, Template ID and Public Key.
5. Put them into `src/config/siteConfig.js`:

```js
emailJs: {
  serviceId: 'YOUR_EMAILJS_SERVICE_ID',
  templateId: 'YOUR_EMAILJS_TEMPLATE_ID',
  publicKey: 'YOUR_EMAILJS_PUBLIC_KEY',
}
```

The React form sends Name, Phone Number, Email Address and Description to the configured email template.

## 7. Social links

Change these in `src/config/siteConfig.js`:

```js
socialLinks: {
  facebook: 'https://www.facebook.com/your-page',
  instagram: 'https://www.instagram.com/your-page',
}
```

## Important image note

The provided reference images were screenshots, so the starter image assets in this project are clean crops taken from those supplied designs. They are used as replaceable placeholders. For the final production website, replace them with the original high-resolution property photographs for the sharpest result.
