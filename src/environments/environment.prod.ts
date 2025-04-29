export const GATE_WAY_ENDPOINT =  "http://192.168.10.36:8081/";
export const AUTH_SERVICE_REDIRECT_URI  =  "http://192.168.10.36:4200/";
const VERSION_1 = "api/v1/";
export const CLIENT_ID = 'leads-client';
export const CLIENT_SECRET = 'leads-secret';
export const environment = {
    production: true,
    rbacEndPoint : GATE_WAY_ENDPOINT + VERSION_1,
    configurationEndPoint : GATE_WAY_ENDPOINT + 'config/' + VERSION_1,
    hrmEndPoint : GATE_WAY_ENDPOINT + 'hrm/' + VERSION_1,
};
