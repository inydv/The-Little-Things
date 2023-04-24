// EXPORT USEFULL STATUS CODES
module.exports = {
  // SUCCESSFUL RESPONSES
  SUCCESS: 200,
  CREATED: 201,
  NO_CONTENT: 204,

  // REDIRECTION MESSAGES RESPONSE
  MOVED_PERMANENTLY: 301,
  FOUND: 302,
  TEMPORARY_REDIRECT: 307,
  PERMANENT_REDIRECT: 308,

  // CLIENT ERROR RESPONSE
  BAD: 400,
  UNAUTORIZE: 401,
  FORBIDDEN: 403,
  NOT_FOUND: 404,
  METHOD_NOT_ALLOWED: 405,
  REQUEST_TIMEOUT: 408,
  PAYLOAD_TOO_LARGE: 413,
  URI_TOO_LONG: 414,
  UNSUPPORTED_MEDIA_TYPE: 415,
  UNPROCESSABLE: 422,
  TOO_MANY_REQUESTS: 429,

  // SERVER ERROR RESPONSE
  INTERNAL_SERVER_ERROR: 500,
  BAD_GATEWAY: 502,
  SERVICE_UNAVAILABLE: 503,
  GATEWAY_TIMEOUT: 504,
};