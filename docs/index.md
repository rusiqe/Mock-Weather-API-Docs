# Weather API Reference

This document provides a complete reference for the Weather API.

## Endpoints

- **GET** `/current?city={city}`
- **GET** `/forecast?city={city}&days={days}`
- **GET** `/alerts?region={region}`

---

### 🔍 GET /current

Returns the current weather for a given city.

**Example request:**

```
GET /current?city=London&apikey=YOUR_API_KEY
```

**Response:**

```json
{
  "city": "London",
  "temperature": "14°C",
  "condition": "Cloudy",
  "humidity": "82%",
  "wind_speed": "12 km/h"
}
```

---

### 📅 GET /forecast

Returns the weather forecast for a given city over multiple days.

**Example request:**

```
GET /forecast?city=London&days=3&apikey=YOUR_API_KEY
```

**Response:**

```json
{
  "city": "London",
  "forecast": [
    {"date": "2025-04-11", "temperature": "14°C", "condition": "Rain"},
    {"date": "2025-04-12", "temperature": "16°C", "condition": "Cloudy"},
    {"date": "2025-04-13", "temperature": "18°C", "condition": "Sunny"}
  ]
}
```

---

### 🚨 GET /alerts

Returns weather alerts for a specified region.

**Example request:**

```
GET /alerts?region=UK&apikey=YOUR_API_KEY
```

**Response:**

```json
{
  "region": "UK",
  "alerts": [
    {
      "type": "Flood",
      "severity": "High",
      "description": "Heavy rainfall expected in Southern UK.",
      "start_time": "2025-04-11T08:00:00Z",
      "end_time": "2025-04-12T20:00:00Z"
    }
  ]
}
```
