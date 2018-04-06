 const express = require('express');
 const app = express();

 const PORT = process.env.PORT || 3333;

 app.get('/api/*', (req, res) => {
   res.json({ok: true});
 });

 app.listen(PORT, () => console.log(`Listening on port ${PORT}`));

 module.exports = {app};