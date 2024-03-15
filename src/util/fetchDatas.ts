export default async function fetchDatas(query: string, method: string = "POST") {

  const res = await fetch(`https://api.react-finland.fi/graphql?`, {
    method: method,
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ query }),
    // next: { revalidate: 0 }
    cache: 'no-cache'
  })
  return res.json()
}

