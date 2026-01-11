import { query } from "express-validator";
import { buildValidationMessage } from "../../helpers/validation-messages";

export default [
    query("long_name")
        .optional()
        .isString().withMessage(buildValidationMessage("long_name", "string"))
        .bail()
        .isLength({ min: 1 }).withMessage(buildValidationMessage("long_name", "min_length", { min: 1 }))
    ,
    query("nationality_name")
        .optional()
        .isString().withMessage(buildValidationMessage("nationality_name", "string"))
        .bail()
        .isLength({ min: 1 }).withMessage(buildValidationMessage("nationality_name", "min_length", { min: 1 }))
    ,
    query("club_name")
        .optional()
        .isString().withMessage(buildValidationMessage("club_name", "string"))
        .bail()
        .isLength({ min: 1 }).withMessage(buildValidationMessage("club_name", "min_length", { min: 1 }))
    ,
    
];