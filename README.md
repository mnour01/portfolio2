# Renato Khael | Software Engineer Portfolio

![Portfolio Theme](public/assets/theme.jpg)

## 📋 Overview

A modern and responsive portfolio website built with Astro and React, showcasing professional experience, skills, and projects. This portfolio provides a clean, user-friendly interface for visitors to learn about Renato Khael's expertise as a Senior Frontend Developer.

## 🚀 Features

- **Responsive Design**: Fully optimized for all devices and screen sizes
- **Modern UI**: Clean and professional interface with smooth animations
- **Dark/Light Mode**: Theme switching capabilities for better user experience
- **Interactive Components**: Dynamic sections to showcase skills and projects
- **Performance Optimized**: Built with Astro for excellent performance metrics
- **SEO Friendly**: Structured metadata for better search engine visibility

## 🛠️ Tech Stack

- **Framework**: [Astro](https://astro.build/)
- **UI Library**: [React](https://reactjs.org/)
- **Styling**: [TailwindCSS](https://tailwindcss.com/)
- **Typography**: [Poppins](https://fonts.google.com/specimen/Poppins) from Google Fonts
- **Icons**: Custom SVG icons
- **Deployment**: Easily deployable to Vercel, Netlify, or other platforms

## 📦 Project Structure

```
/
├── public/
│   └── assets/
│       ├── images/
│       └── svgs/
├── src/
│   ├── components/
│   │   └── sections/
│   │       ├── Hero.astro
│   │       ├── About.astro
│   │       ├── Experience.astro
│   │       ├── Skills.astro
│   │       ├── Projects.astro
│   │       └── Contact.astro
│   ├── layouts/
│   │   └── Layout.astro
│   ├── pages/
│   │   └── index.astro
│   └── styles/
└── package.json
```

## 🖥️ Website Sections

- **Hero**: Introduction and call-to-action
- **About**: Personal and professional background
- **Experience**: Work history and professional achievements
- **Skills**: Technical abilities and expertise
- **Projects**: Portfolio of completed work
- **Contact**: Form and information for getting in touch

## 🚀 Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/renato-khael.git
   cd renato-khael
   ```

2. Install dependencies:
   ```bash
   npm install
   # or
   yarn install
   ```

3. Start the development server:
   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. Open your browser and navigate to `http://localhost:3000`

## 📝 Customization

This portfolio is designed to be easily customizable:

1. Update personal information in the component files
2. Replace images in the `public/assets/images` directory
3. Modify the color scheme in `tailwind.config.js`
4. Add or remove sections as needed in `index.astro`

## 🚢 Deployment

This site can be deployed to any platform that supports Astro, such as:

- Vercel
- Netlify
- GitHub Pages
- AWS Amplify

## 📄 License

This project is open source and available under the MIT License.

---

Created with ❤️ by [Your Name]

```sh
npm create astro@latest -- --template basics
```

[![Open in StackBlitz](https://developer.stackblitz.com/img/open_in_stackblitz.svg)](https://stackblitz.com/github/withastro/astro/tree/latest/examples/basics)
[![Open with CodeSandbox](https://assets.codesandbox.io/github/button-edit-lime.svg)](https://codesandbox.io/p/sandbox/github/withastro/astro/tree/latest/examples/basics)
[![Open in GitHub Codespaces](https://github.com/codespaces/badge.svg)](https://codespaces.new/withastro/astro?devcontainer_path=.devcontainer/basics/devcontainer.json)

> 🧑‍🚀 **Seasoned astronaut?** Delete this file. Have fun!

![just-the-basics](https://github.com/withastro/astro/assets/2244813/a0a5533c-a856-4198-8470-2d67b1d7c554)

## 🚀 Project Structure

Inside of your Astro project, you'll see the following folders and files:

```text
/
├── public/
│   └── favicon.svg
├── src/
│   ├── layouts/
│   │   └── Layout.astro
│   └── pages/
│       └── index.astro
└── package.json
```

To learn more about the folder structure of an Astro project, refer to [our guide on project structure](https://docs.astro.build/en/basics/project-structure/).

## 🧞 Commands

All commands are run from the root of the project, from a terminal:

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `npm install`             | Installs dependencies                            |
| `npm run dev`             | Starts local dev server at `localhost:4321`      |
| `npm run build`           | Build your production site to `./dist/`          |
| `npm run preview`         | Preview your build locally, before deploying     |
| `npm run astro ...`       | Run CLI commands like `astro add`, `astro check` |
| `npm run astro -- --help` | Get help using the Astro CLI                     |

## 👀 Want to learn more?

Feel free to check [our documentation](https://docs.astro.build) or jump into our [Discord server](https://astro.build/chat).
