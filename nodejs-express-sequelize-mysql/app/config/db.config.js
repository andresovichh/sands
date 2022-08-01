module.exports = {
    HOST: "172.17.0.3",
    USER: "root",
    PASSWORD: "92831942",
    DB: "tutorials",
    dialect: "mysql",
    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000
    }
  };