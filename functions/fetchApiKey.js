const functions = require('firebase-functions');
const { SecretManagerServiceClient } = require('@google-cloud/secret-manager');

const client = new SecretManagerServiceClient();

const fetchApiKey = functions.https.onRequest(async (req, res) => {
  res.set('Access-Control-Allow-Origin', '*');
  res.set('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
  res.set('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    res.status(200).send();
    return;
  }

  const secretName = req.query.secretName;
  const name = `projects/888141867225/secrets/${secretName}/versions/latest`;

  try {
    const [version] = await client.accessSecretVersion({ name });
    const payload = version.payload.data.toString('utf8');
    res.status(200).send({ secret: payload });
  } catch (error) {
    console.error('Error accessing secret:', error);
    res.status(500).send({ error: 'Unable to access secret' });
  }
});

module.exports = fetchApiKey;