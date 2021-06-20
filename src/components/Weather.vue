<template>
  <div>
    <form v-on:submit.prevent="getAddressData">
      <h1>Прогноз погоды</h1>
      <vue-google-autocomplete
        v-model="citySearch"
        id="map"
        class="form-control cityInput"
        placeholder="Какой город?"
        types="(cities)"
        v-on:placechanged="getAddressData"
      >
      </vue-google-autocomplete>
    </form>
    <div class="wrapper" v-if="!cityNotFound">
      <div
        :class="weather.dayOrNight === 'day' ? 'content day' : 'content night'"
        v-if="weather.dayOrNight"
      >
        <div class="city">
          <LocationSVG />
          <div class="city__name">
            {{ weather.cityName }}, {{ weather.country }}
          </div>
        </div>
        <div class="d-flex my-4">
          <div class="d-flex align-items-center">
            <WeatherIcon :definition="weather.definition" />
            <div class="temperature__degree">{{ weather.temperature }}°С</div>
          </div>
          <div class="ms-5 align-self-center">
            <div class="fs-2">{{ weather.description }}</div>
          </div>
        </div>
        <div class="weatherDetail">
          <div class="d-flex align-items-center">
            <FeelsLike />
            <div>
              <div
                :class="
                  weather.dayOrNight === 'day'
                    ? 'text-uppercase feelsLike__label-day'
                    : 'text-uppercase feelsLike__label-night'
                "
              >
                Ощущается как
              </div>
              <div>{{ weather.feels_like }}°</div>
            </div>
          </div>
          <div class="d-flex align-items-center">
            <Wind />
            <div class="ms-2">
              <div
                :class="
                  weather.dayOrNight === 'day'
                    ? 'text-uppercase feelsLike__label-day'
                    : 'text-uppercase feelsLike__label-night'
                "
              >
                ВЕТЕР
              </div>
              <div>{{ weather.windSpeed }} м/с</div>
            </div>
          </div>
          <div class="d-flex align-items-center">
            <Humidity />
            <div class="ms-2">
              <div
                :class="
                  weather.dayOrNight === 'day'
                    ? 'text-uppercase feelsLike__label-day'
                    : 'text-uppercase feelsLike__label-night'
                "
              >
                ВЛАЖНОСТЬ
              </div>
              <div>{{ weather.humidity }}%</div>
            </div>
          </div>
          <div class="d-flex align-items-center">
            <Pressure />
            <div class="ms-2">
              <div
                :class="
                  weather.dayOrNight === 'day'
                    ? 'text-uppercase feelsLike__label-day'
                    : 'text-uppercase feelsLike__label-night'
                "
              >
                ДАВЛЕНИЕ
              </div>
              <div>{{ weather.pressure }} мм</div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div v-else class="mt-3 alert alert-danger">
      Город "{{ citySearch }}"" не найден. Попробуйте еще раз!
    </div>
    <Spinner :isLoading="isLoading" />
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import VueGoogleAutocomplete from "vue-google-autocomplete";
import WeatherIcon from "./svg/WeatherIcon.vue";
import LocationSVG from "./svg/Location.vue";
import FeelsLike from "./svg/FeelsLike.vue";
import Wind from "./svg/Wind.vue";
import Humidity from "./svg/Humidity.vue";
import Pressure from "./svg/Pressure.vue";
import Spinner from "./Spinner.vue";

export default Vue.extend({
  name: "Weather",
  components: {
    VueGoogleAutocomplete,
    WeatherIcon,
    LocationSVG,
    FeelsLike,
    Wind,
    Humidity,
    Pressure,
    Spinner,
  },
  data() {
    return {
      citySearch: "",
      weather: {
        cityName: "",
        temperature: 0,
        country: "",
        description: "",
        feels_like: "",
        humidity: 0,
        dayOrNight: "",
        definition: "",
        windSpeed: "",
        pressure: "",
      },
      address: "",
      isLoading: false,
      cityNotFound: false,
    };
  },
  methods: {
    getAddressData: function (addressData, placeResultData) {
      this.isLoading = true;

      this.citySearch =
        (addressData && addressData.locality) ||
        (placeResultData && placeResultData.name);

      if (this.citySearch.trim()) {
        this.weather.country = addressData.country;
        this.getWeather();
        // console.log("placeResultData", placeResultData);
        // console.log("addressData", addressData);
      }
    },
    getWeather: async function () {
      const key = "97537b038c08a5b312da4e595e6d577e";
      const baseUrl = `http://api.openweathermap.org/data/2.5/weather?q=${this.citySearch}&appid=${key}&units=metric&lang=ru`;

      const response = await fetch(baseUrl);

      if (response.status === 404) {
        this.cityNotFound = true;
        this.isLoading = false;
        return;
      }

      const data = await response.json();
      const {
        name,
        main: { temp, feels_like, humidity, pressure },
        weather,
        wind,
      } = data;

      this.weather.cityName = name;
      this.weather.temperature = Math.round(temp);
      this.weather.description = weather[0].description;
      this.weather.feels_like = Math.round(feels_like);
      this.weather.humidity = Math.round(humidity);
      this.weather.dayOrNight = weather[0].icon.includes("n") ? "night" : "day";
      this.weather.definition = weather[0].main;
      this.weather.windSpeed = wind && Math.round(wind.speed);
      this.weather.pressure = pressure;

      this.isLoading = false;
      this.cityNotFound = false;

      console.log("WEATHER ------>", data);
    },
  },
});
</script>

<style scoped>
form {
  background: #96b9ff;
  padding: 20px 15px;
}

h1 {
  color: #fff;
}

.cityInput {
  border-radius: 20px;
  width: 500px;
  margin: 0 auto;
}

.content {
  width: 500px;
  border-radius: 12px;
  margin: 20px auto 0;
  padding: 15px;
  text-align: left;
}

.day {
  background: #ebde34;
  color: #000;
}

.night {
  background: gray;
  color: #fff;
}

.city {
  display: flex;
  align-items: center;
}

.city__name {
  margin-left: 5px;
}

.temperature__degree {
  margin-left: 10px;
  font-size: 40px;
}

.feelsLike__label-day {
  color: #6e6b6b;
}

.feelsLike__label-night {
  color: #fff;
  opacity: 0.8;
}

.weatherDetail {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  gap: 10px;
  font-size: 13px;
}
</style>
