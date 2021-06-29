export const rules = {
  required: (value: string | number): boolean | string =>
    !!value || "Este campo es requerido.",

  name: (value: string): boolean | string =>
    /^([A-Za-zÁÉÍÓÚñáéíóúÑ]{0}?[A-Za-zÁÉÍÓÚñáéíóúÑ']+[\s])+([A-Za-zÁÉÍÓÚñáéíóúÑ]{0}?[A-Za-zÁÉÍÓÚñáéíóúÑ'])+[\s]?([A-Za-zÁÉÍÓÚñáéíóúÑ]{0}?[A-Za-zÁÉÍÓÚñáéíóúÑ'])?$/.test(
      value
    ) || "El nombre es invalido.",

  email: (value: string): boolean | string =>
    /^[\w-]+@([\w-]+\.)+[\w-]{2,4}$/g.test(value) || "El email es invalido.",

  password: (value: string): boolean | string =>
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&])([A-Za-z\d$@$!%*?&]|[^ ]){8,}$/.test(
      value
    ) ||
    "La contraseña debe contener una mayuscula, una minucula, un numero, un simbolo y al menos 8 caracteres. No debe contener espacios en blanco.",
};
