export interface FeathersError extends Error {
  readonly code: number;
  readonly className: string;
  readonly data?: { [key: string]: any };
  readonly errors: any;
};
