import React, { Dispatch, SetStateAction, useEffect, useState } from "react";
import {
  getCityOption,
  getCountryOption,
} from "../../../../utils/functions/options";
import SelectMenu from "../../Select/SelectMenu";

export interface ICountry {
  countryId: string;
  setCountryId?: Dispatch<SetStateAction<string>>;
}

export interface ICity {
  countryId: string;
  city: string;
  setCity?: Dispatch<SetStateAction<string>>;
}

export const CountryInput: React.FC<ICountry> = ({
  countryId,
  setCountryId,
}) => {
  const countryList = getCountryOption();

  return (
    <SelectMenu
      placeholder="Select Country"
      data={countryList.map((code) => ({
        label: code.name,
        value: code.isoCode,
      }))}
      selected={countryId}
      setSelected={setCountryId}
    />
  );
};

export const CityByCountryInput: React.FC<ICity> = ({
  countryId,
  city,
  setCity,
}) => {
  const [cityList, setCountryList] = useState<Array<any>>([]);
  useEffect(() => {
    setCountryList(getCityOption(countryId));
  }, [countryId]);

  return (
    <SelectMenu
      placeholder="Select City"
      data={cityList.map((code) => ({
        label: code,
      }))}
      selected={city}
      setSelected={setCity}
    />
  );
};
