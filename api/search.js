export default async function handler(req, res) {
  const { s } = req.query; // ?s=one+piece
  if (!s) return res.status(400).json({ error: 'Query required' });
  try {
    const response = await fetch(`https://otakudesu-api.sinkronmedia.com/search?s=${s}`);
    const data = await response.json();
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.json(data);
  } catch (error) {
    res.status(500).json({ error: 'Search failed' });
  }
}
