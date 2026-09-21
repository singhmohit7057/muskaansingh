export default async function handler(req, res) {
  const { code } = req.query;

  const tokenRes = await fetch('https://github.com/login/oauth/access_token', {
    method: 'POST',
    headers: { Accept: 'application/json', 'Content-Type': 'application/json' },
    body: JSON.stringify({
      client_id: process.env.GITHUB_OAUTH_CLIENT_ID,
      client_secret: process.env.GITHUB_OAUTH_CLIENT_SECRET,
      code,
    }),
  });

  const { access_token, error } = await tokenRes.json();

  res.setHeader('Content-Type', 'text/html');

  if (!access_token) {
    res.send(`<!doctype html><html><body><script>
      window.opener && window.opener.postMessage(
        'authorization:github:error:' + JSON.stringify({ message: ${JSON.stringify(error ?? 'OAuth failed')} }),
        '*'
      );
      window.close();
    </script></body></html>`);
    return;
  }

  // Decap CMS handshake: send 'authorizing:github' first, then reply with token
  // when the CMS responds with its origin so we can target the correct window.
  const content = JSON.stringify({ token: access_token, provider: 'github' });

  res.send(`<!doctype html><html><body><script>
    (function() {
      var content = ${JSON.stringify(content)};
      function receiveMessage(e) {
        window.opener.postMessage('authorization:github:success:' + content, e.origin);
      }
      window.addEventListener('message', receiveMessage, false);
      window.opener && window.opener.postMessage('authorizing:github', '*');
    })();
  </script></body></html>`);
}
