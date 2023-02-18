async function handler(req, res) {
  if (req.method === 'POST') {
    const data = req.body;
    console.log(data)
    res.status(200).send('the route works!' + JSON.stringify(data))
  }
}

export default handler;
