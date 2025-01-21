# Frontend Mentor - Tech book club landing page solution

This is a solution to the [Tech book club landing page challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/tech-book-club-landing-page-fZQidjHU73). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
- [Author](#author)

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the interface depending on their device's screen size
- See hover and focus states for all interactive elements on the page

### Screenshot

![previewDesktop](./public/Preview%20Tech%20Book%20Club%20Landing%20Page%20Desktop.png)
![previewTablet](./public/Preview%20Tech%20Book%20Club%20Landing%20Page%20Tablet.png)
![previewMobile](./public/Preview%20Tech%20Book%20Club%20Landing%20Page%20Mobile.png)

### Links

- Solution URL: [Github.com](https://github.com/oloude)

### Built with

- Semantic HTML5 markup
- Flexbox
- CSS Grid
- Tailwind css
- [React](https://reactjs.org/) - JS library
- [Typescript](https://www.typescriptlang.org/) - extends JavaScript by adding types to the language

### What I learned

Use this section to recap over some of your major learnings while working through this project. Writing these out and providing code samples of areas you want to highlight is a great way to reinforce your own knowledge.

To see how you can add code snippets, see below:

```js
let arr = [1, 2, 3, 4, 5];
function HeroContent() {
  return (
    <div className="flex flex-col gap-9 lg:basis-1/2 lg:self-center">
      <div className="flex flex-col gap-8">
        <h1 className="text-gradient text-3xlM font-bold font-Martian_Mono sm:text-4xlD sm:leading-[1.2] sm:tracking-[-2px]">
          Join the ultimate tech book club{" "}
        </h1>
        <p className="text-lgD text-neutral700 leading-[1.4] tracking-[-0.5px]">
          Turn your reading time into learning time with fellow tech
          enthusiasts. Get curated recommendations, join vibrant discussions,
          and level up your skills one chapter at a time.
        </p>
      </div>
      <div className="flex flex-col gap-7">
        <button className="flex gap-6 px-8 py-7 items-center rounded-sm border-2 border-neutral900 text-baseD text-neutral900 uppercase font-Martian_Mono font-semibold sm:self-start btn-gradient focus:outline focus:outline-neutral900 focus:outline-2 focus:outline-offset-2">
          Review membership options
          <img src={arrowDown} alt="" />
        </button>
        <div className="flex gap-5 ">
          <img src={avatar} alt="" className="w-[110px] h-[40px] block" />
          <div className="flex flex-col gap-2">
            <div className="flex">
              {arr.map((_, index) => (
                <Ratings key={index} />
              ))}
            </div>
            <p className="text-neutral700 text-smD font-Martian_Mono">
              200+ developers joined already{" "}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
```

## Author

- Frontend Mentor - [@Oloude](https://www.frontendmentor.io/profile/oloude)
- Twitter - [@AbosedeOloude](https://www.twitter.com/AbosedeOloude)
