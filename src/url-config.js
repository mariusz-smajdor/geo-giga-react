export const url_prefix =
  !process.env.NODE_ENV || process.env.NODE_ENV === 'development'
    ? '/geo-giga-react'
    : '';
