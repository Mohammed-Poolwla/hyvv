import { City, Country } from "country-state-city";

export function getCountryOption() {
  const tmpList: Array<any> = Country.getAllCountries().map((code) => ({
    isoCode: code.isoCode,
    name: code.name,
    phoneCode: code.phonecode.replace("+", "").split("-")[0],
  }));

  tmpList.sort((prev, current) => {
    return prev.name.localeCompare(current.name);
  });

  return tmpList;
}

export function getCityOption(countryId?: string) {
  const tmpList: Array<string> = City.getCitiesOfCountry(countryId ?? "US").map(
    (code) => code.name
  );
  const cityList = tmpList.reduce(
    (unique, item) => (unique.includes(item) ? unique : [...unique, item]),
    []
  );
  return cityList;
}
