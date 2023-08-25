import { gql, useQuery } from "@apollo/client";

import { useEffect, useState } from "react";

const AllDefineItemsQuery = gql(`
  query DefineItems {
    defineItems {
      title
      time
      duration
    }
  }
`);

const Hook = () => {
  const { data, loading, error, refetch } = useQuery(AllDefineItemsQuery);

  const [defineItems, setDefineItems] = useState([]);

  useEffect(() => {
    if (data) setDefineItems(data.defineItems);
  });

  return {
    defineItems: defineItems,
    loading,
    error,
    reQuery: refetch,
  };
};

export default Hook;
