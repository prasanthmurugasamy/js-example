import React, { useState } from "react";
import { AutoComplete } from "antd";
import { useQuery, gql } from "@apollo/client";

const graphqlQuery = gql`
  query city($search: String, $limit: Int) {
    city(
      where: {
        _and: [
          { name: { _ilike: $search } }
          { is_connected_city: { _eq: true } }
        ]
      }
      limit: $limit
    ) {
      id
      name
      is_connected_city
    }
  }
`;

const mockVal = (str, repeat = 1) => ({
  value: str.repeat(repeat),
});

const Complete = () => {
  const [value, setValue] = useState("");

  let options = []; //Options Array

  //Use Query

  const { loading, error, data } = useQuery(graphqlQuery, {
    variables: { search: `%${value}%` },
  });

  //If Data loaded..-->load the data in options
  //map and get the city name alone

  if (!loading) {
    options = data.city.map((_city) => {
      return { value: _city.name };
    });
  }

  const onSelect = (_data) => {
    console.log("onSelect", _data);
  };

  const onChange = (_data) => {
    setValue(_data);
  };

  return (
    <>
      <AutoComplete
        value={value}
        options={options}
        style={{
          width: 200,
        }}
        onSelect={onSelect}
        onChange={onChange}
      />
    </>
  );
};

export { Complete };
