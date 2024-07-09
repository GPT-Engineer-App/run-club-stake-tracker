# run-club-stake-tracker

Make an application for a running club application where runners stake $100 to join. Clubs have requirements in terms of distance and frequency (e.g. 5 miles per week) that runners must meet. If they don't meet them the their $100 is lost and the other runners earn their stake.

There are 3 screens
1. Dashboard - Shows the amount they have staked, the interest rate the staked is earning (e.g. 7%), the amount of interested earned so far, and the amount of reward that will be earn from other runners who lose their stakes. Additionally, it should show the runners top level metrics, like a activity bar chart for the last 7 days of activity and some top level numbers like distance, time, average pace.
2. Activity Page - Shows the activity of all the runners in the club as a feed.
3. Member Page - shows stats for each member and has a button other runners can click to trigger a slashing to take the runners stake. Should also have top level aggregates about the members in the club 

## Collaborate with GPT Engineer

This is a [gptengineer.app](https://gptengineer.app)-synced repository 🌟🤖

Changes made via gptengineer.app will be committed to this repo.

If you clone this repo and push changes, you will have them reflected in the GPT Engineer UI.

## Tech stack

This project is built with .

- Vite
- React
- shadcn-ui
- Tailwind CSS

## Setup

```sh
git clone https://github.com/GPT-Engineer-App/run-club-stake-tracker.git
cd run-club-stake-tracker
npm i
```

```sh
npm run dev
```

This will run a dev server with auto reloading and an instant preview.

## Requirements

- Node.js & npm - [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating)
