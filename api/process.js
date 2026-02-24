export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }
  const { data, action } = req.body;
  if (!data) {
    return res.status(400).json({ success: false, error: 'Data is required' });
  }
  let result;
  switch (action) {
    case 'uppercase': result = typeof data === 'string' ? data.toUpperCase() : data; break;
    case 'reverse': result = typeof data === 'string' ? data.split('').reverse().join('') : data; break;
    case 'length': result = typeof data === 'string' ? data.length : Array.isArray(data) ? data.length : 0; break;
    default: result = data;
  }
  res.status(200).json({
    success: true,
    data: { input: data, action: action || 'none', result, processed_at: new Date().toISOString() },
  });
}
