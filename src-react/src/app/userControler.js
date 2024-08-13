import axios from 'axios';

/**
 * @description Fetches the number of stars for a given GitHub repository.
 * @argument {string} repoOwner - The owner of the repository.
 * @argument {string} repoName - The name of the repository.
 * @returns {Promise<number | false>} The number of stars or `false` if the request fails.
 */
export async function getGithubStars(repoOwner, repoName) {
    try {
        const response = await axios.get(
            `https://api.github.com/repos/${repoOwner}/${repoName}`,
        );

        if (response.status !== 200) {
            return false;
        }

        return response.data.stargazers_count;
    } catch (err) {
        console.error(
            `Error fetching stars for ${repoOwner}/${repoName}:`,
            err,
        );
        return false;
    }
}
/**
 * @description get information about a ip address
 * @argument {string} ip
 */

export async function getIpInfo(ip) {
    if (!ip) {
        ip = await getIp();
    }

    const url = `https://ipwho.is/${ip}`;
    const response = await fetch(url);
    const data = await response.json();

    return {
        IP: data.ip || 'N/A',
        City: data.city || 'N/A',
        District: data.region_code || 'N/A',
        ZIP: data.postal || 'N/A',
        Region: data.region || 'N/A',
        Continent: data.continent || 'N/A',
        Country: data.country || 'N/A',
        Timezone: data.timezone?.id || 'N/A',
        ISP: data.connection?.isp || 'N/A',
        ORG: data.connection?.org || 'N/A',
        AS: data.connection?.asn || 'N/A',
        domain: data.connection?.domain || 'N/A',
        proxy: data.security?.proxy || 'N/A',
        hosting: data.security?.hosting || 'N/A',
        flag: data.flag?.img || 'N/A',
        eu: eucheck(data.country),
        nato: natocheck(data.country),
        call: callcode(data.country),
    };
}

export async function getIp() {
    try {
        const response = await fetch('https://api.ipify.org/');
        const data = await response.text();
        return data;
    } catch (error) {
        console.error('Error fetching IP:', error);
        return null;
    }
}

/**
 * @description get call code from given country
 * @argument {string} country
 */

function callcode(country) {
    const country_codes = [
        { country: 'Afghanistan', phone: '93' },
        { country: 'Aland Islands', phone: '358' },
        { country: 'Albania', phone: '355' },
        { country: 'Algeria', phone: '213' },
        { country: 'American Samoa', phone: '1684' },
        { country: 'Andorra', phone: '376' },
        { country: 'Angola', phone: '244' },
        { country: 'Anguilla', phone: '1264' },
        { country: 'Antarctica', phone: '672' },
        { country: 'Antigua and Barbuda', phone: '1268' },
        { country: 'Argentina', phone: '54' },
        { country: 'Armenia', phone: '374' },
        { country: 'Aruba', phone: '297' },
        { country: 'Australia', phone: '61' },
        { country: 'Austria', phone: '43' },
        { country: 'Azerbaijan', phone: '994' },
        { country: 'Bahamas', phone: '1242' },
        { country: 'Bahrain', phone: '973' },
        { country: 'Bangladesh', phone: '880' },
        { country: 'Barbados', phone: '1246' },
        { country: 'Belarus', phone: '375' },
        { country: 'Belgium', phone: '32' },
        { country: 'Belize', phone: '501' },
        { country: 'Benin', phone: '229' },
        { country: 'Bermuda', phone: '1441' },
        { country: 'Bhutan', phone: '975' },
        { country: 'Bolivia', phone: '591' },
        { country: 'Bonaire, Sint Eustatius and Saba', phone: '599' },
        { country: 'Bosnia and Herzegovina', phone: '387' },
        { country: 'Botswana', phone: '267' },
        { country: 'Bouvet Island', phone: '55' },
        { country: 'Brazil', phone: '55' },
        { country: 'British Indian Ocean Territory', phone: '246' },
        { country: 'Brunei Darussalam', phone: '673' },
        { country: 'Bulgaria', phone: '359' },
        { country: 'Burkina Faso', phone: '226' },
        { country: 'Burundi', phone: '257' },
        { country: 'Cambodia', phone: '855' },
        { country: 'Cameroon', phone: '237' },
        { country: 'Canada', phone: '1' },
        { country: 'Cape Verde', phone: '238' },
        { country: 'Cayman Islands', phone: '1345' },
        { country: 'Central African Republic', phone: '236' },
        { country: 'Chad', phone: '235' },
        { country: 'Chile', phone: '56' },
        { country: 'China', phone: '86' },
        { country: 'Christmas Island', phone: '61' },
        { country: 'Cocos (Keeling) Islands', phone: '672' },
        { country: 'Colombia', phone: '57' },
        { country: 'Comoros', phone: '269' },
        { country: 'Congo', phone: '242' },
        { country: 'Congo, Democratic Republic of the Congo', phone: '242' },
        { country: 'Cook Islands', phone: '682' },
        { country: 'Costa Rica', phone: '506' },
        { country: "Cote D'Ivoire", phone: '225' },
        { country: 'Croatia', phone: '385' },
        { country: 'Cuba', phone: '53' },
        { country: 'Curacao', phone: '599' },
        { country: 'Cyprus', phone: '357' },
        { country: 'Czech Republic', phone: '420' },
        { country: 'Denmark', phone: '45' },
        { country: 'Djibouti', phone: '253' },
        { country: 'Dominica', phone: '1767' },
        { country: 'Dominican Republic', phone: '1809' },
        { country: 'Ecuador', phone: '593' },
        { country: 'Egypt', phone: '20' },
        { country: 'El Salvador', phone: '503' },
        { country: 'Equatorial Guinea', phone: '240' },
        { country: 'Eritrea', phone: '291' },
        { country: 'Estonia', phone: '372' },
        { country: 'Ethiopia', phone: '251' },
        { country: 'Falkland Islands (Malvinas)', phone: '500' },
        { country: 'Faroe Islands', phone: '298' },
        { country: 'Fiji', phone: '679' },
        { country: 'Finland', phone: '358' },
        { country: 'France', phone: '33' },
        { country: 'French Guiana', phone: '594' },
        { country: 'French Polynesia', phone: '689' },
        { country: 'French Southern Territories', phone: '262' },
        { country: 'Gabon', phone: '241' },
        { country: 'Gambia', phone: '220' },
        { country: 'Georgia', phone: '995' },
        { country: 'Germany', phone: '49' },
        { country: 'Ghana', phone: '233' },
        { country: 'Gibraltar', phone: '350' },
        { country: 'Greece', phone: '30' },
        { country: 'Greenland', phone: '299' },
        { country: 'Grenada', phone: '1473' },
        { country: 'Guadeloupe', phone: '590' },
        { country: 'Guam', phone: '1671' },
        { country: 'Guatemala', phone: '502' },
        { country: 'Guernsey', phone: '44' },
        { country: 'Guinea', phone: '224' },
        { country: 'Guinea-Bissau', phone: '245' },
        { country: 'Guyana', phone: '592' },
        { country: 'Haiti', phone: '509' },
        { country: 'Heard Island and Mcdonald Islands', phone: '0' },
        { country: 'Holy See (Vatican City State)', phone: '39' },
        { country: 'Honduras', phone: '504' },
        { country: 'Hong Kong', phone: '852' },
        { country: 'Hungary', phone: '36' },
        { country: 'Iceland', phone: '354' },
        { country: 'India', phone: '91' },
        { country: 'Indonesia', phone: '62' },
        { country: 'Iran, Islamic Republic of', phone: '98' },
        { country: 'Iraq', phone: '964' },
        { country: 'Ireland', phone: '353' },
        { country: 'Isle of Man', phone: '44' },
        { country: 'Israel', phone: '972' },
        { country: 'Italy', phone: '39' },
        { country: 'Jamaica', phone: '1876' },
        { country: 'Japan', phone: '81' },
        { country: 'Jersey', phone: '44' },
        { country: 'Jordan', phone: '962' },
        { country: 'Kazakhstan', phone: '7' },
        { country: 'Kenya', phone: '254' },
        { country: 'Kiribati', phone: '686' },
        { country: "Korea, Democratic People's Republic of", phone: '850' },
        { country: 'Korea, Republic of', phone: '82' },
        { country: 'Kosovo', phone: '381' },
        { country: 'Kuwait', phone: '965' },
        { country: 'Kyrgyzstan', phone: '996' },
        { country: "Lao People's Democratic Republic", phone: '856' },
        { country: 'Latvia', phone: '371' },
        { country: 'Lebanon', phone: '961' },
        { country: 'Lesotho', phone: '266' },
        { country: 'Liberia', phone: '231' },
        { country: 'Libyan Arab Jamahiriya', phone: '218' },
        { country: 'Liechtenstein', phone: '423' },
        { country: 'Lithuania', phone: '370' },
        { country: 'Luxembourg', phone: '352' },
        { country: 'Macao', phone: '853' },
        { country: 'Macedonia, the Former Yugoslav Republic of', phone: '389' },
        { country: 'Madagascar', phone: '261' },
        { country: 'Malawi', phone: '265' },
        { country: 'Malaysia', phone: '60' },
        { country: 'Maldives', phone: '960' },
        { country: 'Mali', phone: '223' },
        { country: 'Malta', phone: '356' },
        { country: 'Marshall Islands', phone: '692' },
        { country: 'Martinique', phone: '596' },
        { country: 'Mauritania', phone: '222' },
        { country: 'Mauritius', phone: '230' },
        { country: 'Mayotte', phone: '262' },
        { country: 'Mexico', phone: '52' },
        { country: 'Micronesia, Federated States of', phone: '691' },
        { country: 'Moldova, Republic of', phone: '373' },
        { country: 'Monaco', phone: '377' },
        { country: 'Mongolia', phone: '976' },
        { country: 'Montenegro', phone: '382' },
        { country: 'Montserrat', phone: '1664' },
        { country: 'Morocco', phone: '212' },
        { country: 'Mozambique', phone: '258' },
        { country: 'Myanmar', phone: '95' },
        { country: 'Namibia', phone: '264' },
        { country: 'Nauru', phone: '674' },
        { country: 'Nepal', phone: '977' },
        { country: 'Netherlands', phone: '31' },
        { country: 'Netherlands Antilles', phone: '599' },
        { country: 'New Caledonia', phone: '687' },
        { country: 'New Zealand', phone: '64' },
        { country: 'Nicaragua', phone: '505' },
        { country: 'Niger', phone: '227' },
        { country: 'Nigeria', phone: '234' },
        { country: 'Niue', phone: '683' },
        { country: 'Norfolk Island', phone: '672' },
        { country: 'Northern Mariana Islands', phone: '1670' },
        { country: 'Norway', phone: '47' },
        { country: 'Oman', phone: '968' },
        { country: 'Pakistan', phone: '92' },
        { country: 'Palau', phone: '680' },
        { country: 'Palestinian Territory, Occupied', phone: '970' },
        { country: 'Panama', phone: '507' },
        { country: 'Papua New Guinea', phone: '675' },
        { country: 'Paraguay', phone: '595' },
        { country: 'Peru', phone: '51' },
        { country: 'Philippines', phone: '63' },
        { country: 'Pitcairn', phone: '64' },
        { country: 'Poland', phone: '48' },
        { country: 'Poland', phone: '48' },
        { country: 'Portugal', phone: '351' },
        { country: 'Puerto Rico', phone: '1787' },
        { country: 'Qatar', phone: '974' },
        { country: 'Reunion', phone: '262' },
        { country: 'Romania', phone: '40' },
        { country: 'Russian Federation', phone: '70' },
        { country: 'Rwanda', phone: '250' },
        { country: 'Saint Barthelemy', phone: '590' },
        { country: 'Saint Helena', phone: '290' },
        { country: 'Saint Kitts and Nevis', phone: '1869' },
        { country: 'Saint Lucia', phone: '1758' },
        { country: 'Saint Martin', phone: '590' },
        { country: 'Saint Pierre and Miquelon', phone: '508' },
        { country: 'Saint Vincent and the Grenadines', phone: '1784' },
        { country: 'Samoa', phone: '684' },
        { country: 'San Marino', phone: '378' },
        { country: 'Sao Tome and Principe', phone: '239' },
        { country: 'Saudi Arabia', phone: '966' },
        { country: 'Senegal', phone: '221' },
        { country: 'Serbia', phone: '381' },
        { country: 'Serbia and Montenegro', phone: '381' },
        { country: 'Seychelles', phone: '248' },
        { country: 'Sierra Leone', phone: '232' },
        { country: 'Singapore', phone: '65' },
        { country: 'Sint Maarten', phone: '1' },
        { country: 'Slovakia', phone: '421' },
        { country: 'Slovenia', phone: '386' },
        { country: 'Solomon Islands', phone: '677' },
        { country: 'Somalia', phone: '252' },
        { country: 'South Africa', phone: '27' },
        {
            country: 'South Georgia and the South Sandwich Islands',
            phone: '500',
        },
        { country: 'South Sudan', phone: '211' },
        { country: 'Spain', phone: '34' },
        { country: 'Sri Lanka', phone: '94' },
        { country: 'Sudan', phone: '249' },
        { country: 'Suriname', phone: '597' },
        { country: 'Svalbard and Jan Mayen', phone: '47' },
        { country: 'Swaziland', phone: '268' },
        { country: 'Sweden', phone: '46' },
        { country: 'Switzerland', phone: '41' },
        { country: 'Syrian Arab Republic', phone: '963' },
        { country: 'Taiwan, Province of China', phone: '886' },
        { country: 'Tajikistan', phone: '992' },
        { country: 'Tanzania, United Republic of', phone: '255' },
        { country: 'Thailand', phone: '66' },
        { country: 'Timor-Leste', phone: '670' },
        { country: 'Togo', phone: '228' },
        { country: 'Tokelau', phone: '690' },
        { country: 'Tonga', phone: '676' },
        { country: 'Trinidad and Tobago', phone: '1868' },
        { country: 'Tunisia', phone: '216' },
        { country: 'Turkey', phone: '90' },
        { country: 'Turkmenistan', phone: '7370' },
        { country: 'Turks and Caicos Islands', phone: '1649' },
        { country: 'Tuvalu', phone: '688' },
        { country: 'Uganda', phone: '256' },
        { country: 'Ukraine', phone: '380' },
        { country: 'United Arab Emirates', phone: '971' },
        { country: 'United Kingdom', phone: '44' },
        { country: 'United States', phone: '1' },
        { country: 'United States Minor Outlying Islands', phone: '1' },
        { country: 'Uruguay', phone: '598' },
        { country: 'Uzbekistan', phone: '998' },
        { country: 'Vanuatu', phone: '678' },
        { country: 'Venezuela', phone: '58' },
        { country: 'Viet Nam', phone: '84' },
        { country: 'Virgin Islands, British', phone: '1284' },
        { country: 'Virgin Islands, U.s.', phone: '1340' },
        { country: 'Wallis and Futuna', phone: '681' },
        { country: 'Western Sahara', phone: '212' },
        { country: 'Yemen', phone: '967' },
        { country: 'Zambia', phone: '260' },
        { country: 'Zimbabwe', phone: '263' },
    ];

    const item = country_codes.find((item) => item.country === country);

    return item ? `+${item.phone}` : 'not found';
}

/**
 * @description check if country is in nato
 * @argument {string} country
 */

function natocheck(country) {
    const nato_members = [
        'Albania',
        'Belgium',
        'Bulgaria',
        'Canada',
        'Croatia',
        'Czech Republic',
        'Denmark',
        'Estonia',
        'Finland',
        'France',
        'Germany',
        'Greece',
        'Hungary',
        'Iceland',
        'Italy',
        'Latvia',
        'Lithuania',
        'Luxembourg',
        'Netherlands',
        'North Macedonia',
        'Norway',
        'Poland',
        'Portugal',
        'Romania',
        'Slovakia',
        'Slovenia',
        'Spain',
        'Turkey',
        'Türkiy',
        'United Kingdom',
        'United States',
    ];

    return nato_members.includes(country) ? 'True' : 'False';
}

/**
 * @description check if country is in eu
 * @argument {string} country
 */

function eucheck(country) {
    const eu_countries = [
        'Austria',
        'Belgium',
        'Bulgaria',
        'Croatia',
        'Cyprus',
        'Czech Republic',
        'Denmark',
        'Estonia',
        'Finland',
        'France',
        'Germany',
        'Greece',
        'Hungary',
        'Ireland',
        'Italy',
        'Latvia',
        'Lithuania',
        'Luxembourg',
        'Malta',
        'Netherlands',
        'Poland',
        'Portugal',
        'Romania',
        'Slovakia',
        'Slovenia',
        'Spain',
        'Sweden',
    ];

    return eu_countries.includes(country) ? 'True' : 'False';
}

/**
 * @description change the page title
 * @argument {string} pageTitle
 */

export function changePageTitle(pageTitle) {
    document.title = pageTitle;
}

/**
 * @description Deletes the provided discord webhook
 * @argument {string} url
 */

export async function deleteWebhook(url) {
    try {
        const response = await fetch(url, {
            method: 'DELETE',
            // Add any necessary headers here
        });

        if (!response.ok) {
            throw new Error(
                `Failed to delete webhook. Status: ${response.status}`,
            );
        }

        console.log('Webhook deleted successfully');
    } catch (error) {
        throw new Error(`Error deleting webhook: ${error.message}`);
    }
}

/**
 * @description Opens a window to download the ISO file for the specified Office version and language.
 * @param {string} version - The version of Office.
 * @param {string} language - The language for the Office version.
 */
export function getISOLink(version, language) {
    return window.open(
        `https://officecdn.microsoft.com/db/492350F6-3A01-4F97-B9C0-C7C6DDF67D60/media/${language}/${version}.img`,
        '_blank',
    );
}
