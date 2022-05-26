import { PublicClientApplication } from "@azure/msal-browser";

//login configuration for microsoft
const msalConfig = {
    auth: {
        clientId: "c4615dde-6e3d-4079-aa35-50d7f8400b25",
        authority: "https://login.microsoftonline.com/13ee1f99-2c19-4ffe-8479-7229725bc499",
        redirectUri: "http://localhost:3000/dashboard"
    },
    cache: {
        cacheLocation: "sessionStorage", 
        storeAuthStateInCookie: false, 
    }
};

export const loginRequest = {
    scopes: ["User.Read"]
};

export const graphConfig = {
    graphMeEndpoint: "https://graph.microsoft.com/v1.0/me"
};

export const msalInstance = new PublicClientApplication(msalConfig);