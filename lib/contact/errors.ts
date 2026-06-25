export class ContactValidationError extends Error {
  readonly statusCode = 400;

  constructor(message: string) {
    super(message);
    this.name = "ContactValidationError";
  }
}

export class ContactEmailError extends Error {
  readonly statusCode = 502;

  constructor(message: string) {
    super(message);
    this.name = "ContactEmailError";
  }
}

export class ContactConfigurationError extends Error {
  readonly statusCode = 500;

  constructor(message: string) {
    super(message);
    this.name = "ContactConfigurationError";
  }
}
