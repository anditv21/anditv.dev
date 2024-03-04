export default function IpIformationComponent(ipInformations) {
    if (!ipInformations?.ipInformations?.IP) return;

    return (
        <>
            <center>
                <table className="info-table">
                    <tbody>
                        <tr>
                            <th>IP</th>
                            <td>{ipInformations.ipInformations.IP}</td>
                        </tr>
                        <tr>
                        <th>Country</th>
                        <td>
                            {ipInformations.ipInformations.Country}
                            <br></br>
                            <img style={{ maxWidth: '5%', maxHeight: '5%'}} src={ipInformations.ipInformations.flag} alt="Country Flag" />
                        </td>
                        </tr>
                        <tr>
                            <th>City</th>
                            <td>{ipInformations.ipInformations.City}</td>
                        </tr>
                        <tr>
                            <th>ZIP</th>
                            <td>{ipInformations.ipInformations.ZIP}</td>
                        </tr>
                        <tr>
                            <th>Region</th>
                            <td>{ipInformations.ipInformations.Region}</td>
                        </tr>
                        <tr>
                            <th>Continent</th>
                            <td>{ipInformations.ipInformations.Continent}</td>
                        </tr>
                        <tr>
                            <th>Timezone</th>
                            <td>{ipInformations.ipInformations.Timezone}</td>
                        </tr>
                        <tr>
                            <th>ISP</th>
                            <td>{ipInformations.ipInformations.ISP}</td>
                        </tr>
                        <tr>
                            <th>ORG</th>
                            <td>{ipInformations.ipInformations.ORG}</td>
                        </tr>
                        <tr>
                            <th>AS</th>
                            <td>{ipInformations.ipInformations.AS}</td>
                        </tr>
                        <tr>
                            <th>Domain</th>
                            <td>{ipInformations.ipInformations.domain}</td>
                        </tr>
                        <tr>
                            <th>EU Country</th>
                            <td>{ipInformations.ipInformations.eu}</td>
                        </tr>
                        <tr>
                            <th>NATO Country</th>
                            <td>{ipInformations.ipInformations.nato}</td>
                        </tr>
                        <tr>
                            <th>Call Code</th>
                            <td>{ipInformations.ipInformations.call}</td>
                        </tr>
                    </tbody>
                </table>
            </center>
        </>
    );
}
