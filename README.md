# Express Rest API

## Getting Started

First install dependencies.

```cmd
npm install
# or
yarn install
# or
pnpm install
# or
bun install
```

### Set up Prisma

```cmd
npx prisma migrate dev --name init
```

### Script for run this project

```json
  "scripts": {
    "dev": "nodemon -L src/app.js",
    "test": "jest -i",
    "seeds": "node ./prisma/seeds/seed.js"
  }
```

## API Requirements

### API Summary

- [x] Jumlah Unique User per hari
- [x] Jumlah Unique User keseluruhan data
- [x] Jumlah New and Returning per hari
- [x] Jumlah New and Returning keseluruhan data
- [x] Hari Ramai keseluruhan data
- [x] Jam Ramai keseluruhan data
- [x] Total Data

### API Segment Data

- [x] Segmentation Age Group dalam persentase ex: < 18, 18 - 24, 25 - 34, 35 - 44, 45 - 64, > 64
- [x] Segmentation Gender dalam persentase
- [x] Segmentation Merk HP dalam persentase
- [x] Segmentation Digital Interest dalam persentase

### API User Data

- [x] Detail User Data
- [x] Top 5 User Data per Location
