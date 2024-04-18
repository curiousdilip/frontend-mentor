# Front-end Style Guide

## Layout

The designs were created to the following widths:

- Mobile: 375px
- Desktop: 1440px

## Colors

### Primary

#### Text

- Very dark desaturated blue: hsl(238, 29%, 16%)
- Soft red: hsl(14, 88%, 65%)

#### Gradient

Background gradient:

- Soft violet: hsl(273, 75%, 66%)
- Soft blue: hsl(240, 73%, 65%)

### Neutral

#### Text

- Very dark grayish blue: hsl(237, 12%, 33%)
- Dark grayish blue: hsl(240, 6%, 50%)

#### Dividers

- Light grayish blue: hsl(240, 5%, 91%)

## Typography

### Body Copy

- Font size: 12px

### Font

- Family: [Kumbh Sans](https://fonts.google.com/specimen/Kumbh+Sans)
- Weights: 400, 700



    :root {
      --soft-violet: hsl(273, 75%, 66%);
      --soft-blue: hsl(240, 73%, 65%);
      --very-dark-grayish-blue: hsl(237, 12%, 33%);
      --dark-grayish-blue: hsl(240, 6%, 50%);
      --light-grayish-blue: hsl(240, 5%, 91%);
    }

    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }

    body {
      /* height: 100vh; */
      font-family: 'Kumbh Sans', sans-serif;
      background-color: var(--soft-violet);
    }

    main {
      display: grid;
      place-items: center;
      min-height: 100vh;
    }

    .box {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 57.5rem;
      background-color: var(--light-grayish-blue);

    }

    .box .left {
      width: 50%;
      background: url('./images/bg-pattern-desktop.svg');
      background-position: left center;
      background-size: cover;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      overflow: hidden;
    }

    .box .right {
      width: 50%;
    }

    .box .right .faq-container {
      padding: 4rem 2rem;
    }

    .faq-btn {
      width: 100%;
      padding: 1.6rem 2rem;
      font-size: 1.6rem;
      cursor: pointer;
      background: inherit;
      border: none;
      outline: none;
      text-align: left;
      transition: all 0.5s linear;
    }

    .faq-btn:after {
      content: "";
      background: url('./images/icon-arrow-down.svg');
      /* content: "\27A4"; */
      color: #fa8d0c;
      float: right;
      transition: all 0.3s linear;
    }

    .faq-btn.is-open:after {
      transform: rotate(90deg);
    }

    .faq-btn:hover,
    .faq-btn.is-open {
      color: #000;
      font-weight: bold;
    }

    .faq-content {
      max-height: 0;
      color: rgba(0, 0, 0, 0.75);
      font-size: 1.5rem;
      margin: 0 2rem;
      padding-left: 1rem;
      overflow: hidden;
      transition: max-height 0.3s ease-in-out;
      border-bottom: 1px solid #ccc;
    }


    .attribution {
      font-size: 11px;
      text-align: center;

    }

    .attribution a {
      color: hsl(228, 45%, 44%);
    }

    footer {
      position: absolute;
      width: 100%;
      bottom: 12px;
    }