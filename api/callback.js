const ALLOWED_USER = 'singhmohit7057';

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
    res.send(errorPage(error ?? 'OAuth failed'));
    return;
  }

  // Verify the GitHub user is the allowed admin
  const userRes = await fetch('https://api.github.com/user', {
    headers: { Authorization: `Bearer ${access_token}`, 'User-Agent': 'muskaansingh-admin' },
  });
  const { login } = await userRes.json();

  if (login !== ALLOWED_USER) {
    res.status(403).send(`<!doctype html><html><body>
      <h2 style="font-family:sans-serif;color:#c00;text-align:center;margin-top:40vh">
        Access denied.
      </h2>
    </body></html>`);
    return;
  }

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

function errorPage(message) {
  return `<!doctype html><html><body><script>
    window.opener && window.opener.postMessage(
      'authorization:github:error:' + JSON.stringify({ message: ${JSON.stringify(message)} }),
      '*'
    );
    window.close();
  </script></body></html>`;
}
