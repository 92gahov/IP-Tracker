import React from 'react';

const Table = ({ data, showErr }) => {

    const { continent_code,
        country,
        country_name,
        region_code,
        region,
        city,
        postal,
        latitude,
        longitude,
        languages,
        timezone,
        utc_offset,
        currency,
        currency_name,
        country_population,
        country_calling_code,
        asn,
        in_eu,
        org,
        ip } = data;

    const continentName = {
        'AS': 'Asia',
        'NA': 'North America',
        'AF': 'Africa',
        'EU': 'Europe',
        'SA': 'South America',
        'AQ': 'Antarctica',
        'OC': 'Australia/Oceania'
    }

    return (
        <div className='main-table'>
            <div className='detected'>
                {
                    showErr && <p>Detected: {ip}</p>
                }
                {
                    !showErr && <p>Invalid IP/Cannot connect to server. Try again.</p>
                }
            </div>
            <div className='table'>
                <table>
                    <thead>
                        <tr>
                            <th>ATTRIBUTES</th>
                            <th>DATA</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Continent</td>
                            <td>{continentName[continent_code]}</td>
                        </tr>
                        <tr>
                            <td>Country</td>
                            <td>{country}/{country_name}</td>
                        </tr>
                        <tr>
                            <td>State</td>
                            <td>{region_code}/{region}</td>
                        </tr>
                        <tr>
                            <td>City</td>
                            <td>{city}</td>
                        </tr>
                        <tr>
                            <td>Postal Code</td>
                            <td>{postal}</td>
                        </tr>
                        <tr>
                            <td>Latitude, Longitude</td>
                            <td><a rel='noopener noreferrer' href={`https://www.google.com/maps?q=${latitude},${longitude}`} target="_blank">{latitude}, {longitude}</a></td>
                        </tr>
                        <tr>
                            <td>Languages</td>
                            <td>{languages}</td>
                        </tr>
                        <tr>
                            <td>Timezone</td>
                            <td>{timezone}</td>
                        </tr>
                        <tr>
                            <td>UTC Offset</td>
                            <td>{utc_offset}</td>
                        </tr>
                        <tr>
                            <td>Currency</td>
                            <td>{currency}</td>
                        </tr>
                        <tr>
                            <td>Currency Name</td>
                            <td>{currency_name}</td>
                        </tr>
                        <tr>
                            <td>Country Population</td>
                            <td>{country_population}</td>
                        </tr>
                        <tr>
                            <td>Calling Code</td>
                            <td>{country_calling_code}</td>
                        </tr>
                        <tr>
                            <td>ASN</td>
                            <td>{asn}</td>
                        </tr>
                        <tr>
                            <td>European Union</td>
                            <td>{!in_eu ? "No" : "Yes"}</td>
                        </tr>
                        <tr>
                            <td>Organization</td>
                            <td>{org}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    )
};

export default Table;