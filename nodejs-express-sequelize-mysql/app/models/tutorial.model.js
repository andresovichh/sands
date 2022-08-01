module.exports = (sequelize, Sequelize) => {
    const Tutorial = sequelize.define("tutorial", {
      title: {
        type: Sequelize.STRING,
        allowNull: false,

      },
      description: {
        type: Sequelize.STRING
      },
      published: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
      },
      /*
        deletedAt: {
            type: Sequelize.STRING,
            allowNull: true,
        },
        */
        videoUrl: {
            type: Sequelize.STRING,

        },
        id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true
        }
    });
    return Tutorial;
  };