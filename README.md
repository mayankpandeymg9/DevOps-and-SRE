# DevOps Scraper Assignment

This project uses a multi-stage Docker setup to:

- Scrape a webpage using Node.js, Puppeteer, and Chromium
- Host the scraped data using a Flask web server

---

## 🚀 How to Build

```bash
docker build --build-arg SCRAPE_URL=https://example.com -t devops-scraper .
```

---

## ▶️ How to Run

```bash
docker run -p 5000:5000 devops-scraper
```

---

## 🌐 Access the Data

Visit: [http://localhost:5000](http://localhost:5000)

You will see the scraped data (page title and first heading) in JSON format.

---

## 🔧 Configuration

- The URL to scrape is passed at build time using `--build-arg SCRAPE_URL=...`.

---

## 📁 File Structure

- `scrape.js`: Node.js Puppeteer scraper
- `server.py`: Flask web server
- `Dockerfile`: Multi-stage Dockerfile
- `package.json`: Node.js dependencies
- `requirements.txt`: Python dependencies