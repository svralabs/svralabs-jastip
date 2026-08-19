export default function handler(req, res) {
  if (req.method === 'POST') {
    console.log('Order payload:', req.body);
    res.status(200).json({ message: 'Order received' });
  } else {
    res.setHeader('Allow', ['POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
