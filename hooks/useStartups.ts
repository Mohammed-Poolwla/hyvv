import { gql, useQuery as UseQuery } from "@apollo/client";
import { useUser } from "@auth0/nextjs-auth0";
import { useEffect, useState } from "react";

const AllStartUpsQuery = gql(`
  query StartUp($userEmail: String!) {
    startupsByUser(userEmail: $userEmail) {
      id
      companyName
    }
  }
`);

const Hook = () => {
  const { user } = useUser();
  const { data, loading, error, refetch } = UseQuery(AllStartUpsQuery, {
    variables: { userEmail: user ? user.email : "" },
  });
  const [startups, setStartups] = useState([]);

  useEffect(() => {
    if (data) setStartups(data.startupsByUser);
  }, [data]);

  return { startups: startups, loading, error, reQuery: refetch };
};

export default Hook;
