export function formatErrors(errors: any[]): Record<string, any> {
  const result = {};

  for (const error of errors) {
    if (error.children && error.children.length) {
      const childErrors = formatErrors(error.children);
      for (const key in childErrors) {
        result[`${error.property}.${key}`] = childErrors[key];
      }
    } else {
      result[error.property] = {
        code:
          Object.keys(error.constraints || {})[0]?.toUpperCase() ||
          'VALIDATION_ERROR',
        message: Object.values(error.constraints || {}),
      };
    }
  }

  return result;
}
