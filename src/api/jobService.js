
const API_KEY2 = process.env.REACT_APP_API_KEY2;

export async function fetchCatBreed() {
  try {
    const res = await fetch('https://api.api-ninjas.com/v1/cats?name=a', {
      headers: {
        'X-Api-Key': API_KEY2,
        'Content-Type': 'application/json',
      },
    });

    const text = await res.text();
    if (!res.ok) throw new Error(`API error ${res.status}: ${text}`);

    const data = JSON.parse(text);
    const breedNames = data.map((item) => item.name).filter(Boolean); // filter out empty/null

    return breedNames;
  } catch (err) {
    console.error('fetchCatBreed failed:', err);
    return []; // fail safely
  }
}


export async function fetchDogBreed() {
  try {
    const res = await fetch('https://api.api-ninjas.com/v1/dogs?name=a', {
      headers: {
        'X-Api-Key': API_KEY2,
        'Content-Type': 'application/json',
      },
    });

    const text = await res.text();
    if (!res.ok) throw new Error(`API error ${res.status}: ${text}`);

    const data = JSON.parse(text);
    const breedNames = data.map((item) => item.name).filter(Boolean); // filter out empty/null

    return breedNames;
  } catch (err) {
    console.error('fetchDogBreed failed:', err);
    return []; // fail safely
  }
}
