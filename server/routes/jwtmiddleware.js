const jwt = require("express-jwt");
const jwksRsa = require("jwks-rsa");
const authConfig = require("./../../client/src/auth/auth_config.json");	// TODO: riposizionare file di configurazione?

if (
  !authConfig.domain ||
  !authConfig.audience ||
  authConfig.audience === "YOUR_API_IDENTIFIER"
) {
  console.log(
    "API error, check auth_config.json"
  );
  process.exit();
}

const checkJwt = jwt({
  secret: jwksRsa.expressJwtSecret({
    cache: true,
    rateLimit: true,
    jwksRequestsPerMinute: 5,
    jwksUri: `https://${authConfig.domain}/.well-known/jwks.json`,
  }),

  audience: authConfig.audience,
  issuer: `https://${authConfig.domain}/`,
  algorithms: ["RS256"],
});

module.exports = checkJwt;