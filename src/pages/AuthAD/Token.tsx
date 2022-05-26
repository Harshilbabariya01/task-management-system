import { useMsal } from "@azure/msal-react";
import { useState } from "react";
import { loginRequest } from "./Config";
import { graphConfig } from "./Config";

const callMsGraph = async (accessToken: any) => {
    const headers = new Headers();
    const bearer = `Bearer ${accessToken}`;

    headers.append("Authorization", bearer);

    const options = {
        method: "GET",
        headers: headers
    };

    return fetch(graphConfig.graphMeEndpoint, options)
        .then(response => response.json())
        .catch(error => console.log(error));
}

const ProfileContent = () => {
    const { instance, accounts } = useMsal();
    const [graphData, setGraphData] = useState(null);

    const name = accounts[0] && accounts[0].name;

    const RequestProfileData = () => {
        const request = {
            ...loginRequest,
            account: accounts[0]
        };

        // Silently acquires an access token which is then attached to a request for Microsoft Graph data
        instance
            .acquireTokenSilent(request)
            .then(response => {
                callMsGraph(response.accessToken)
                    .then(response => setGraphData(response));
            })
            .catch(() => {
                instance
                    .acquireTokenPopup(request)
                    .then(response => {
                        callMsGraph(response.accessToken)
                            .then(response => setGraphData(response));
                    });
            });
    }

    return (
        <>
            <h2 className="card-title my-4">{name ? `Hello ${name}, You Are Admin.` : `Sign In for Accessing Admin Side Services`}</h2>
        </>
    );
};

export default ProfileContent;