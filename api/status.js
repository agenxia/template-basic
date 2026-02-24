export default async function handler(req, res) {
  if (req.method !== 'GET') {
    return res.status(405).json({ error: 'Method not allowed' });
  }
  const status = {
    agent_name: process.env.AGENT_NAME || '{{AGENT_NAME}}',
    version: process.env.API_VERSION || 'v1',
    status: 'running',
    timestamp: new Date().toISOString(),
    uptime: process.uptime(),
  };
  res.status(200).json({ success: true, data: status });
}
