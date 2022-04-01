# Weather Forecast App

Create a Weather Forecast App using the openweathermap API.

The app should have a country search field that can be used to search countries by name.

Use this API KEY in all requets: `fe9cb0fe2e4692a7963d9bbee3dbcc03`

The request to search for countries is:

```
http://api.openweathermap.org/geo/1.0/direct?q=${searchTerm}&limit=10&appid=${API_KEY}
```

The API returns:

```json
[
  {
    "name": "London",
    "local_names": {
      "vi": "Luân Đôn",
      "ne": "लण्डन",
      "cv": "Лондон",
      "sv": "London",
      "ku": "London",
      "si": "ලන්ඩන්",
      "my": "လန်ဒန်မြို့",
      "ml": "ലണ്ടൻ",
      "am": "ለንደን",
      "de": "London",
      "tr": "Londra",
      "no": "London",
      "kn": "ಲಂಡನ್",
      "br": "Londrez",
      "sk": "Londýn",
      "ab": "Лондан",
      "wo": "Londar",
      "li": "Londe",
      "mr": "लंडन",
      "ka": "ლონდონი",
      "hy": "Լոնդոն",
      "uk": "Лондон",
      "or": "ଲଣ୍ଡନ",
      "mi": "Rānana",
      "gv": "Lunnin",
      "ta": "இலண்டன்",
      "en": "London",
      "lv": "Londona",
      "af": "Londen",
      "co": "Londra",
      "fy": "Londen",
      "gd": "Lunnainn",
      "ky": "Лондон",
      "gu": "લંડન",
      "it": "Londra",
      "nl": "Londen",
      "cy": "Llundain",
      "ht": "Lonn",
      "eu": "Londres",
      "et": "London",
      "sc": "Londra",
      "sl": "London",
      "feature_name": "London",
      "is": "Lundúnir",
      "lo": "ລອນດອນ",
      "ascii": "London",
      "bn": "লন্ডন",
      "gn": "Londye",
      "yi": "לאנדאן",
      "ar": "لندن",
      "yo": "Lọndọnu",
      "os": "Лондон",
      "ps": "لندن",
      "an": "Londres",
      "th": "ลอนดอน",
      "fa": "لندن",
      "ca": "Londres",
      "fr": "Londres",
      "hu": "London",
      "ba": "Лондон",
      "tt": "Лондон",
      "eo": "Londono",
      "mn": "Лондон",
      "kk": "Лондон",
      "sq": "Londra",
      "ko": "런던",
      "gl": "Londres",
      "ga": "Londain",
      "kv": "Лондон",
      "el": "Λονδίνο",
      "ro": "Londra",
      "cs": "Londýn",
      "pl": "Londyn",
      "be": "Лондан",
      "kw": "Loundres",
      "ja": "ロンドン",
      "hi": "लंदन",
      "es": "Londres",
      "bg": "Лондон",
      "he": "לונדון",
      "rm": "Londra",
      "cu": "Лондонъ",
      "bo": "ལོན་ཊོན།",
      "tg": "Лондон",
      "mt": "Londra",
      "ru": "Лондон",
      "fi": "Lontoo",
      "zu": "ILondon",
      "oc": "Londres",
      "te": "లండన్",
      "sa": "लन्डन्",
      "ur": "لندن",
      "pt": "Londres",
      "lt": "Londonas",
      "zh": "伦敦",
      "tl": "Londres",
      "mk": "Лондон",
      "sr": "Лондон",
      "ln": "Londoni"
    },
    "lat": 51.5073219,
    "lon": -0.1276474,
    "country": "GB",
    "state": "England"
  },
  {
    "name": "City of London",
    "local_names": {
      "en": "City of London",
      "ko": "시티 오브 런던",
      "lt": "Londono Sitis",
      "ru": "Сити",
      "es": "City de Londres",
      "he": "הסיטי של לונדון",
      "uk": "Лондонське Сіті",
      "pt": "Cidade de Londres",
      "fr": "Cité de Londres",
      "zh": "倫敦市",
      "hi": "सिटी ऑफ़ लंदन"
    },
    "lat": 51.5156177,
    "lon": -0.0919983,
    "country": "GB",
    "state": "England"
  },
  {
    "name": "London",
    "local_names": {
      "en": "London",
      "fr": "London",
      "ko": "런던",
      "ru": "Лондон",
      "uk": "Лондон",
      "ar": "لندن"
    },
    "lat": 42.9836747,
    "lon": -81.2496068,
    "country": "CA",
    "state": "Ontario"
  },
  {
    "name": "London",
    "lat": 37.1289771,
    "lon": -84.0832646,
    "country": "US",
    "state": "Kentucky"
  },
  {
    "name": "London",
    "lat": 39.8864493,
    "lon": -83.448253,
    "country": "US",
    "state": "Ohio"
  }
]
```

We need the country name, state, country, lat and lon.

We will use the lat and lon to search for the weather forecast. 

The request to get the weather forecast is:
```
http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}
```

The API returns:

```
{
  "coord": {
    "lon": -0.1278,
    "lat": 51.5074
  },
  "weather": [
    {
      "id": 804,
      "main": "Clouds",
      "description": "overcast clouds",
      "icon": "04n"
    }
  ],
  "base": "stations",
  "main": {
    "temp": 282.96,
    "feels_like": 281.11,
    "temp_min": 281.42,
    "temp_max": 283.88,
    "pressure": 1018,
    "humidity": 77
  },
  "visibility": 10000,
  "wind": {
    "speed": 3.6,
    "deg": 110
  },
  "clouds": {
    "all": 100
  },
  "dt": 1646854079,
  "sys": {
    "type": 2,
    "id": 2019646,
    "country": "GB",
    "sunrise": 1646807318,
    "sunset": 1646848427
  },
  "timezone": 0,
  "id": 2643743,
  "name": "London",
  "cod": 200
}
```

The information we need to display the weather info is inside the weather array. Even though this array can contains more than one item, we're going to use only the first one. Always.


**Example:**

![](./docs/weather_forecast_example.gif)