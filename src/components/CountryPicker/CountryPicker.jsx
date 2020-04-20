import React, { useState, useEffect } from "react";
import { NativeSelect, FormControl } from "@material-ui/core";

import styles from "./CountryPicker.module.css";
import { countries } from "../../api";

const CountryPicker = ({ handleCountryChange }) => {
  const [fetchCountries, setFetchedCountries] = useState([]);

  useState(() => {
    const fetchAPI = async () => {
      setFetchedCountries(await countries());
    };
    fetchAPI();
  });

  return (
    <FormControl className={styles.formControl}>
      <NativeSelect
        defaultValue=''
        onChange={(e) => handleCountryChange(e.target.value)}
      >
        <option value=''>Global</option>
        {fetchCountries.map((country, index) => (
          <option value={country} key={index}>
            {country}
          </option>
        ))}
      </NativeSelect>
    </FormControl>
  );
};

export default CountryPicker;
