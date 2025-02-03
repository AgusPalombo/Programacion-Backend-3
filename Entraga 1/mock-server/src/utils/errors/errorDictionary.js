export const EErrors = {
    DUPLICATE_EMAIL: {
      code: "ERR_DUPLICATE_EMAIL",
      message: "El correo ya está registrado",
      status: 400
    },
    INVALID_ROLE: {
      code: "ERR_INVALID_ROLE",
      message: "Rol inválido (solo 'user' o 'admin')",
      status: 400
    },
    DEFAULT: {
      code: "ERR_INTERNAL",
      message: "Error interno del servidor",
      status: 500
    }
  };