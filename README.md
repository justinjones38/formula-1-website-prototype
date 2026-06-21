# Prototype F1 Website

## Project Description
A custom-built F1 website coded with React. It keeps track of the calendar, driver standings and constructor standings. It provides results for each sprint, qualifying, and race session. It is designed to be easy-to-use and allow users to gather results from Formula 1. The data is fetched with [jolpi.ca](https://api.jolpi.ca/ergast/) API

## Live Demo
[View the Website Demo](https://personalformulaone.netlify.app/)

--- 
## Table of Contents
[Installation](#installation)  
[Usage](#usage)  
[Features](#features)  
[GIFs](#gifs)  
[Conclusion](#conclusion)  
[References](#references)  

---
## Installation
To install the repository:
1. Clone the repository
```bash
git clone git@github.com:justinjones38/formula-1-website-prototype.git
```
2. Enter directory
```bash
cd formula-1-website-prototype
```

3. Install dependencies
```bash
  npm install
```

---

## Usage
To view the local website on your local machine
1. Enter the directory 
```bash
cd formula-1-website-prototype
```
2. Run the development server
```bash
npm run dev
```

---
## Features

- A **Single Page Application** that is responsive and provides a clean user interface for all users.
- A **mobile-first layout** that also looks good on bigger devices.
- Uses **API fetching** from the [jolpi.ca](https://api.jolpi.ca/ergast/) API to provide detailed information on the Formula 1 season such as full sprint, qualifying and race results. Furthermore, it provides driver and constructor standings.   

---

## GIFs
![Video Demo](src/assets/f1-prototype-website.gif)

---

## Conclusion 
Future additions to this website include: 
- [ ] A countdown clock to the race on each race event page.
- [ ] Improve various styling issues on this website.
- [ ] Added loading pages for each section
- [ ] Improve fetching process data
- [ ] Add a footer.
- [ ] Correct scrolling bug when going between links.
- [ ] Implement Dark mode
- [X] Fix netlify error when refreshing page.

---

## References
A special thanks to [jolpi.ca](https://api.jolpi.ca/ergast/) for their amazing API to fetch the formula 1 data.