'use strict';

module.exports = {
    http_status: {
        OK: 200,
        BadRequest: 400,
        Unauthorized: 401,
        Forbidden: 403,
        NotFound: 404,
        RequestTimeout: 408,
        InternalServerError: 500
    },
    messages: {
        Success: 'api call successful',
        Failure: 'api call failed',
        Forbidden: 'api call forbidden',
        Unauthorized: 'api call forbidden',
        NotFound: 'api call forbidden',
        InternalServerError: 'internal server error',
        DataFormatError: 'data format error'
    }
}