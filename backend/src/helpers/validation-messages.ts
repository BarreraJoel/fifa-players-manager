import { ValidationErrorType } from "../types/validation-error.type";

export const buildValidationMessage = (
    field: string,
    type: ValidationErrorType,
    options?: { min?: number; max?: number, enumValues?: string[] }
): string => {
    const messages = {
        required: `Es obligatorio`,
        invalid_format: `No tiene un formato válido`,
        empty: `No puede estar vacío`,
        url: `No contiene una url válida`,
        enum: `Debe ser uno de los siguientes valores: ${options?.enumValues?.join(", ")}`,
        array: `Debe ser un array`,
        invalid: `No tiene un valor válido`,
        min_length: `Debe tener al menos ${options?.min} caracteres`,
        max_length: `Debe tener como máximo ${options?.max} caracteres`,
        min_numeric: `Debe tener un valor mínimo de ${options?.min}`,
        max_numeric: `Debe tener un valor máximo de ${options?.max}`,
        already_exists: `El valor ingresado ya está registrado`,
        not_match: `No coincide con el valor requerido`,
        weak_password: `Debe incluir mayúsculas, minúsculas, números y símbolos`,
        alpha: `Solo puede contener caracteres alfabeticos`,
        numeric: `Solo puede contener números`,
        boolean: `Debe ser verdadero o falso`,
        date: `Debe ser una fecha válida`,
        string: `Debe ser una cadena de texto válida`,
    };

    return messages[type];
};