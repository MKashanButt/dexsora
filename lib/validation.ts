import { z } from "zod";

type ValidationSuccess<T> = {
  success: true;
  data: T;
};

type ValidationError = {
  success: false;
  errors: Record<string, string[]>;
};

type ValidationResult<T> = ValidationSuccess<T> | ValidationError;

export function validate<T extends z.ZodSchema>(
  schema: T,
  data: unknown
): ValidationResult<z.infer<T>> {
  const result = schema.safeParse(data);
  
  if (!result.success) {
    const formatted = result.error.format();
    const errors: Record<string, string[]> = {};

    const extractErrors = (obj: any): string[] => {
      return obj?._errors || [];
    };

    for (const [key, value] of Object.entries(formatted)) {
      if (key === '_errors') continue;
      const errs = extractErrors(value);
      if (errs.length > 0) {
        errors[key] = errs;
      }
    }

    return {
      success: false,
      errors,
    };
  }

  return {
    success: true,
    data: result.data,
  };
}