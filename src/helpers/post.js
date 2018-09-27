export default async (url, body) => {
  try {
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(body)
    })

    const data = response.json()
    if (!response.ok) throw data

    console.log(data)

  } catch (error) {
    console.log(error)
  }
}