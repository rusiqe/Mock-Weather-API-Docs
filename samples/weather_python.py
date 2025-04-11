import requests

API_KEY = "YOUR_API_KEY"
city = "London"
response = requests.get(f"https://api.mockweather.dev/v1/current?city={city}&apikey={API_KEY}")
print(response.json())
