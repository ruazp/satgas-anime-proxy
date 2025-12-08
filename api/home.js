export default async function handler(req, res) {
  try {
    const response = await fetch('https://otakudesu-anime-api.vercel.app');
    const data = await response.json();
    res.setHeader('Access-Control-Allow-Origin', '*'); // Fix CORS!
    res.json(data);
  } catch (error) {
    res.status(500).json({ error: 'API down' });
  }
}
