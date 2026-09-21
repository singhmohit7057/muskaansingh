export default function handler(req, res) {
  const params = new URLSearchParams({
    client_id: process.env.GITHUB_OAUTH_CLIENT_ID,
    redirect_uri: `${process.env.SITE_URL}/api/callback`,
    scope: 'repo',
  });
  res.redirect(302, `https://github.com/login/oauth/authorize?${params}`);
}
