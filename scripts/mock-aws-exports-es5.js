// mock aws-exports-es5.js

const awsmobile = {
  Auth: {
    Cognito: {
      userPoolId: "us-east-1_abcdefghi",
      userPoolClientId: "a1b2c3d4e5f6g7h8i9j0k1l2m",
      loginWith: {
        oauth: {
          domain: "YOUR_COGNITO_USER_POOL_HOSTED_UI_DOMAIN_PREFIX.auth.us-east-1.amazoncognito.com",
          scopes: ["email", "openid", "aws.cognito.signin.user.admin"],
          redirectSignIn: ["https://cypress-realworld-oecrsikda-fabio-araujos-projects.vercel.app/"],
          redirectSignOut: ["https://cypress-realworld-oecrsikda-fabio-araujos-projects.vercel.app/"],
          responseType: "token",
        },
      },
    },
  },
};

exports.default = awsmobile;
