async function queryFauna(
    query: string,
): Promise<{
    data?: any;
    error?: any;
}> {
    const token = "fnAFAVd9CiACTaVYklQOPIGsABABMV64CXNmOmNN";

    const res = await fetch("https://graphql.fauna.com/graphql", {
        method: "POST",
        headers: {
            authorization: `Bearer ${token}`,
            "content-type": "application/json",
        },
        body: JSON.stringify({ query }),
    });

    const { data, errors } = await res.json();

    if (errors) {
        return { data, error: errors[0] };
    }

    return { data };
}

const query = `
    query {
      allData {
        data {
          key
        }
      }
    }
  `;

const response = await queryFauna(query)

console.log(response.data.allData.data)