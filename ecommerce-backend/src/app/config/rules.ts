import { isValidObjectId } from "mongoose";

export const rules = {
    required: (value: any) => !!value || "Este campo es requerido.",
    isObjectId: (value: string) => isValidObjectId(value) || "El ObjectId no es valido.",
    name: (value: string) => /^([A-Za-zÁÉÍÓÚñáéíóúÑ]{0}?[A-Za-zÁÉÍÓÚñáéíóúÑ\']+[\s])+([A-Za-zÁÉÍÓÚñáéíóúÑ]{0}?[A-Za-zÁÉÍÓÚñáéíóúÑ\'])+[\s]?([A-Za-zÁÉÍÓÚñáéíóúÑ]{0}?[A-Za-zÁÉÍÓÚñáéíóúÑ\'])?$/.test(value) || "El nombre es invalido.",
    email: (value: string) => /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g.test(value) || "El email es invalido.",
    password: (value: string) => /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&])([A-Za-z\d$@$!%*?&]|[^ ]){8,}$/.test(value) || "La contraseña debe contener una mayuscula, una minucula, un numero, un simbolo y al menos 8 caracteres. No debe contener espacios en blanco.",
    maxLength:
    (length: number): ((value: string) => string | boolean) =>
      (value = ""): string | boolean =>
        value.length <= length || `Debe contener menos de ${length} catacteres`
};
