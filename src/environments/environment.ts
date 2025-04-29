export const GATE_WAY_ENDPOINT =  "http://localhost:8081/";
export const AUTH_SERVICE_REDIRECT_URI  =  "http://localhost:4200/";
const VERSION_1 = "api/v1/";
export const CLIENT_ID = 'leads-client';
export const CLIENT_SECRET = 'leads-secret';
export const environment = {
    production: false,
    rbacEndPoint : GATE_WAY_ENDPOINT + VERSION_1,
    configurationEndPoint : GATE_WAY_ENDPOINT + 'config/' + VERSION_1,
    hrmEndPoint : GATE_WAY_ENDPOINT + 'hrm/' + VERSION_1,
};
