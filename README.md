<p align="center">
  <a href="https://borgfinancial.com.au">
    <img alt="BorgFinancial" src="https://borgfinancial.com.au/wp-content/uploads/2019/04/Logo-website.png" width="300" />
  </a>
</p>

# 🚀 FinancialFlow App - BorgFinancial/SFG Integration

An PWA that connects BorgFinancial's website with SFG's GRaphQL API to create new leads coming from in BF's business process.

## Tech Stack

**Client:** React, JavaScript/TypeScript, TailwindCSS

**Server:** Netlify Functions, Apollo GraphQL, Node

### App Desciption

This PWA was developed on top of a gatsby template using React and TypeScript.
It relies on Netlify Functions power (which in turn run AWS Lambada Functions) to allocate a cloud server each time a new request is made.

It is easily deployed to a Netlify's site after every new release made on GitHub.

## Run Locally

Clone the project

```bash
  git clone https://github.com/Dev-Freak/bf-gatsby-pwa.git
```

Go to the project directory

```bash
  cd bf-gatsby-pwa
```

Install dependencies

```bash
  npm install
```

Start developing

```bash
  npm gatsby develop
```

## Authors

- [@Dev-Freak](https://www.github.com/Dev-Freak)
