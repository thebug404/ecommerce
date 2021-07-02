type ValidationResult = string | boolean;

export const rules = {
  required: (value: string | number): ValidationResult =>
    !!value || "Este campo es requerido.",

  name: (value: string): ValidationResult =>
    /^([A-Za-zÁÉÍÓÚñáéíóúÑ]{0}?[A-Za-zÁÉÍÓÚñáéíóúÑ']+[\s])+([A-Za-zÁÉÍÓÚñáéíóúÑ]{0}?[A-Za-zÁÉÍÓÚñáéíóúÑ'])+[\s]?([A-Za-zÁÉÍÓÚñáéíóúÑ]{0}?[A-Za-zÁÉÍÓÚñáéíóúÑ'])?$/.test(
      value
    ) || "El nombre es invalido.",

  email: (value: string): ValidationResult =>
    /^[\w-]+@([\w-]+\.)+[\w-]{2,4}$/g.test(value) || "El email es invalido.",

  password: (value: string): ValidationResult =>
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&])([A-Za-z\d$@$!%*?&]|[^ ]){8,}$/.test(
      value
    ) ||
    "La contraseña debe contener una mayuscula, una minuscula, un numero, un simbolo y al menos 8 caracteres. No debe contener espacios en blanco.",

  maxItems:
    (length: number): ((values: unknown[]) => ValidationResult) =>
    (values: unknown[] = []): ValidationResult =>
      values.length <= length || `Solo puede seleccionar ${length}`,

  maxLength:
    (length: number): ((value: string) => ValidationResult) =>
    (value = ""): string | boolean =>
      value.length <= length || `Debe contener menos de ${length} catacteres`,
};
