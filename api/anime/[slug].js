export default async function handler(req, res) {
  const { slug } = req.query;
  if (!slug) return res.status(400).json({ error: 'Slug required' });
  try {
    const response = await fetch(`https://otakudesu-api.sinkronmedia.com/anime/${slug}`);
    const data = await response.json();
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.json(data);
  } catch (error) {
    res.status(500).json({ error: 'Detail failed' });
  }
}
