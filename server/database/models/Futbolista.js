module.exports = (sequelize, dataTypes) => {
  const Futbolista = sequelize.define(
    "Futbolista",
    (Cols = {
      id: {
        autoIncrement: true,
        primaryKey: true,
        type: dataTypes.INTEGER,
      },
      name: {
        type: dataTypes.STRING,
      },
      age: {
        type: dataTypes.INTEGER,
      },
      squad_number: {
        type: dataTypes.INTEGER,
      },
      position: {
        type: dataTypes.STRING,
      },
      nationality: {
        type: dataTypes.STRING,
      },
      team_id: {
        type: dataTypes.INTEGER,
      },
    }),
    {
      tableName: "futbolista",
      timestamps: false,
    }
  );

  //   Futbolista.associate = (models) => {
  //     Futbolista.belongsTo(models.Equipo, {
  //       as: "Equipo",
  //       foreignKey: "id",
  //     });
  //   };

  return Futbolista;
};
