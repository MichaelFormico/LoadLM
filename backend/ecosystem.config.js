module.exports = {
  apps: [
    {
      name: "LoadLM",
      script: "./app.mjs",
      instances: 1,
      watch: true,
      env: {
        JWT_SECRET: "^FoxWSn7Ts^69ERD&6yN%@YxJ",
        EMAIL_HOST: "smtp.sendlayer.net",
        EMAIL_PORT: "587",
        EMAIL_SECURE: "true",
        EMAIL_USER: "01784C9718014C72C550BC8853EF3372",
        EMAIL_PASS: "CBA94EBE64B9AC915F189F3A4E291BDA",
        MONGO_URI: "mongodb://127.0.0.1:27017/loadlm",
        FRONTEND_URL: "https://loadlm.com",
      },
    },
  ],
};
