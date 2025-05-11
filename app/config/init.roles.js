// app/cofig/init.roles.js
export function initialRoles(Role) {
  Role.count().then(count => {
    if (count === 0) {
      Role.bulkCreate([
        { id: 1, name: "user" },
        { id: 2, name: "moderator" },
        { id: 3, name: "admin" }
      ])
      .then(() => console.log("Roles iniciales insertados"))
      .catch(err => console.error("Error al insertar roles:", err));
    }
  });
}
