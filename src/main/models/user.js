export const UserEntity = {
    username: {
        type: "string",
        required: true,
        description: "Имя пользователя",
    },
    roleId: {
        type: "string",
        required: true,
        reference: "roles",
        description: "ID роли, ссылается на документ в коллекции roles",
    },
    role: {
        type: "string",
        required: true,
        enum: ["admin", "user"],
        description: "Роль пользователя: admin или user",
    }
};