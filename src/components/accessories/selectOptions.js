
import React from "react";


export const stateOptions= ()=>{

    return(

        <React.Fragment>

            <option>Rest of Nigeria</option>
            <option >Ogun</option>
            <option >Imo</option>
            <option >Rivers</option>
            <option >Benue</option>
            <option >Kaduna</option>
            <option >Anambra</option>
            <option >Kano</option>
            <option >Oyo</option>
            <option >Abuja</option>
            <option >Lagos</option>
            <option >Outside of Nigeria</option>

        </React.Fragment>
    )
};

export const jobFunctionOptions=()=>{

    return(

        <React.Fragment>

            <option>Select</option>
            <option>All Job Function</option>
            <option>Accounting</option>
            <option>Admin & Office</option>
            <option>Building & Architecture</option>
            <option>Community & Social Services</option>
            <option>Consulting & Strategy</option>
            <option>Creative & Design</option>
            <option>Customer Service & Support</option>
            <option>Driver & Transport Services</option>
            <option>Engineering & Technology</option>
            <option>Estate Agent & Property Management</option>
            <option>Farming & Agriculture</option>
            <option>Food Services & Catering</option>
            <option>Health & Safety</option>
            <option>Hospitality & Leisure</option>
            <option>Human Resources</option>
            <option>Legal Services</option>
            <option>Management & Business Development</option>
            <option>Medical & Pharmaceutical</option>
            <option>Product & Project Management</option>
            <option>Quality Control & Assurance</option>
            <option>Research, Teaching & Training</option>
            <option>Sales</option>
            <option>Software & Data</option>
            <option>Supply Chain & Procurement</option>
            <option>Trades & Services</option>

        </React.Fragment>
    )

}

var date= new Date().getFullYear()
const daysArray=(array=[],i=1)=>(array.length<30)? daysArray(array=[...array,i],i +=1): array;
const yearArray=(array=[],i=1922)=> (i<=date)? yearArray(array=[...array,i],i +=1): array;


export const randomCountryCode=()=>["gb","au","de","it","nl",'za','es','ch','ae','us'].sort(()=>0.5-Math.random());

export const randomJobFunction=()=> ['science', 'commercial', 'art'].sort(()=>0.5-Math.random());

export const daysOption= ()=> ["Day",...daysArray()].map((number,index)=><option key={index} value={number}>{number}</option>);

export const monthOption= ()=> ['Month','January','February','March','May','June','July','August','September','October','November','December'].map((month,index)=> <option key={index} value={month}>{month}</option>);

export const yearOption= ()=> ['Year',...yearArray()].map((year,index)=><option key={index} value={year}>{year}</option>);

export const genderOption= ()=> ['Male', 'Female'].map((sex,index)=><option key={index} value={sex}>{sex}</option>);


const nationalityList = [
    'Select',
    'Afghan',
    'Albanian',
    'Algerian',
    'American',
    'Andorran',
    'Angolan',
    'Antiguans',
    'Argentinean',
    'Armenian',
    'Australian',
    'Austrian',
    'Azerbaijani',
    'Bahamian',
    'Bahraini',
    'Bangladeshi',
    'Barbadian',
    'Barbudans',
    'Batswana',
    'Belarusian',
    'Belgian',
    'Belizean',
    'Beninese',
    'Bhutanese',
    'Bolivian',
    'Bosnian',
    'Brazilian',
    'British',
    'Bruneian',
    'Bulgarian',
    'Burkinabe',
    'Burmese',
    'Burundian',
    'Cambodian',
    'Cameroonian',
    'Canadian',
    'Cape Verdean',
    'Central African',
    'Chadian',
    'Chilean',
    'Chinese',
    'Colombian',
    'Comoran',
    'Congolese',
    'Costa Rican',
    'Croatian',
    'Cuban',
    'Cypriot',
    'Czech',
    'Danish',
    'Djibouti',
    'Dominican',
    'Dutch',
    'East Timorese',
    'Ecuadorean',
    'Egyptian',
    'Emirian',
    'Equatorial Guinean',
    'Eritrean',
    'Estonian',
    'Ethiopian',
    'Fijian',
    'Filipino',
    'Finnish',
    'French',
    'Gabonese',
    'Gambian',
    'Georgian',
    'German',
    'Ghanaian',
    'Greek',
    'Grenadian',
    'Guatemalan',
    'Guinea-Bissauan',
    'Guinean',
    'Guyanese',
    'Haitian',
    'Herzegovinian',
    'Honduran',
    'Hungarian',
    'I-Kiribati',
    'Icelander',
    'Indian',
    'Indonesian',
    'Iranian',
    'Iraqi',
    'Irish',
    'Israeli',
    'Italian',
    'Ivorian',
    'Jamaican',
    'Japanese',
    'Jordanian',
    'Kazakhstani',
    'Kenyan',
    'Kittian and Nevisian',
    'Kuwaiti',
    'Kyrgyz',
    'Laotian',
    'Latvian',
    'Lebanese',
    'Liberian',
    'Libyan',
    'Liechtensteiner',
    'Lithuanian',
    'Luxembourger',
    'Macedonian',
    'Malagasy',
    'Malawian',
    'Malaysian',
    'Maldivan',
    'Malian',
    'Maltese',
    'Marshallese',
    'Mauritanian',
    'Mauritian',
    'Mexican',
    'Micronesian',
    'Moldovan',
    'Monacan',
    'Mongolian',
    'Moroccan',
    'Mosotho',
    'Motswana',
    'Mozambican',
    'Namibian',
    'Nauruan',
    'Nepalese',
    'New Zealander',
    'Nicaraguan',
    'Nigerian',
    'Nigerien',
    'North Korean',
    'Northern Irish',
    'Norwegian',
    'Omani',
    'Pakistani',
    'Palauan',
    'Panamanian',
    'Papua New Guinean',
    'Paraguayan',
    'Peruvian',
    'Polish',
    'Portuguese',
    'Qatari',
    'Romanian',
    'Russian',
    'Rwandan',
    'Saint Lucian',
    'Salvadoran',
    'Samoan',
    'San Marinese',
    'Sao Tomean',
    'Saudi',
    'Scottish',
    'Senegalese',
    'Serbian',
    'Seychellois',
    'Sierra Leonean',
    'Singaporean',
    'Slovakian',
    'Slovenian',
    'Solomon Islander',
    'Somali',
    'South African',
    'South Korean',
    'Spanish',
    'Sri Lankan',
    'Sudanese',
    'Surinamer',
    'Swazi',
    'Swedish',
    'Swiss',
    'Syrian',
    'Taiwanese',
    'Tajik',
    'Tanzanian',
    'Thai',
    'Togolese',
    'Tongan',
    'Trinidadian/Tobagonian',
    'Tunisian',
    'Turkish',
    'Tuvaluan',
    'Ugandan',
    'Ukrainian',
    'Uruguayan',
    'Uzbekistani',
    'Venezuelan',
    'Vietnamese',
    'Welsh',
    'Yemenite',
    'Zambian',
    'Zimbabwean'
]

export const nationalityOption= ()=> nationalityList.map((nationality,index)=><option key={index} value={nationality}>{nationality}</option>);

const stateList=[
    'Select',
    "Abia",
    "Adamawa",
    "Akwa Ibom",
    "Anambra",
    "Bauchi",
    "Bayelsa",
    "Benue",
    "Borno",
    "Cross River",
    "Delta",
    "Ebonyi",
    "Edo",
    "Ekiti",
    "Enugu",
    "FCT - Abuja",
    "Gombe",
    "Imo",
    "Jigawa",
    "Kaduna",
    "Kano",
    "Katsina",
    "Kebbi",
    "Kogi",
    "Kwara",
    "Lagos",
    "Nasarawa",
    "Niger",
    "Ogun",
    "Ondo",
    "Osun",
    "Oyo",
    "Plateau",
    "Rivers",
    "Sokoto", 
    "Taraba",
    "Yobe",
    "Zamfara"
  ]

export const stateOption=()=> stateList.map((state,index)=><option key={index} value={state}>{state}</option>);


const countryCodeList = [
    'Select',
    'UK (+44)',
    'USA (+1)',
	'Algeria (+213)',
	'Andorra (+376)',
	'Angola (+244)',
	'Anguilla (+1264)',
	'Antigua & Barbuda (+1268)',
    'Argentina (+54)',
	'Armenia (+374)',
	'Aruba (+297)',
    'Australia (+61)',
    'Austria (+43)',
	'Azerbaijan (+994)',
	'Bahamas (+1242)',
	'Bahrain (+973)',
	'Bangladesh (+880)',
	'Barbados (+1246)',
	'Belarus (+375)',
    'Belgium (+32)',
	'Belize (+501)',
	'Benin (+229)',
	'Bermuda (+1441)',
	'Bhutan (+975)',
	'Bolivia (+591)',
	'Bosnia Herzegovina (+387)',
	'Botswana (+267)',
    'Brazil (+55)',
	'Brunei (+673)',
	'Bulgaria (+359)',
	'Burkina Faso (+226)',
	'Burundi (+257)',
	'Cambodia (+855)',
	'Cameroon (+237)', 
    'Canada (+1)',
	'Cape Verde Islands (+238)',
	'Cayman Islands (+1345)',
	'Central African Republic (+236)',
    'Chile (+56)',
    'China (+86)',
    'Colombia (+57)',
	'Comoros (+269)',
	'Congo (+242)',
	'Cook Islands (+682)',
	'Costa Rica (+506)',
	'Croatia (+385)',
    'Cuba (+53)',
	'Cyprus North (+90392)',
	'Cyprus South (+357)',
    'Czech Republic (+42)',
    'Denmark (+45)',
	'Djibouti (+253)',
	'Dominica (+1809)',
	'Dominican Republic (+1809)',
	'Ecuador (+593)',
    'Egypt (+20)',
	'El Salvador (+503)',
	'Equatorial Guinea (+240)',
	'Eritrea (+291)',
	'Estonia (+372)',
	'Ethiopia (+251)',
	'Falkland Islands (+500)',
	'Faroe Islands (+298)',
	'Fiji (+679)',
	'Finland (+358)',
    'France (+33)',
	'French Guiana (+594)',
	'French Polynesia (+689)',
	'Gabon (+241)',
	'Gambia (+220)',
	'Georgia (+7880)',
    'Germany (+49)',
	'Ghana (+233)',
	'Gibraltar (+350)',
    'Greece (+30)',
	'Greenland (+299)',
	'Grenada (+1473)',
	'Guadeloupe (+590)',
	'Guam (+671)',
	'Guatemala (+502)',
	'Guinea (+224)',
	'Guinea - Bissau (+245)',
	'Guyana (+592)',
	'Haiti (+509)',
	'Honduras (+504)',
	'Hong Kong (+852)',
    'Hungary (+36)',
	'Iceland (+354)',
    'India (+91)',
    'Indonesia (+62)',
    'Iran (+98)',
	'Iraq (+964)',
	'Ireland (+353)',
	'Israel (+972)',
    'Italy (+39)',
	'Jamaica (+1876)',
    'Japan (+81)',
	'Jordan (+962)',
    'Kazakhstan (+7)',
	'Kenya (+254)',
	'Kiribati (+686)',
	'Korea North (+850)',
    'Korea South (+82)',
	'Kuwait (+965)',
	'Kyrgyzstan (+996)',
	'Laos (+856)',
	'Latvia (+371)',
	'Lebanon (+961)',
	'Lesotho (+266)',
	'Liberia (+231)',
	'Libya (+218)',
	'Liechtenstein (+417)',
	'Lithuania (+370)',
	'Luxembourg (+352)',
	'Macao (+853)',
	'Macedonia (+389)',
	'Madagascar (+261)',
	'Malawi (+265)',
    'Malaysia (+60)',
	'Maldives (+960)',
	'Mali (+223)',
	'Malta (+356)',
	'Marshall Islands (+692)',
	'Martinique (+596)',
	'Mauritania (+222)',
	'Mayotte (+269)',
    'Mexico (+52)',
	'Micronesia (+691)',
	'Moldova (+373)',
	'Monaco (+377)',
	'Mongolia (+976)',
	'Montserrat (+1664)',
	'Morocco (+212)',
	'Mozambique (+258)',
    'Myanmar (+95)',
	'Namibia (+264)',
	'Nauru (+674)',
	'Nepal (+977)',
    'Netherlands (+31)',
	'New Caledonia (+687)',
    'New Zealand (+64)',
	'Nicaragua (+505)',
	'Niger (+227)',
	'Nigeria (+234)',
	'Niue (+683)',
	'Norfolk Islands (+672)',
	'Northern Marianas (+670)',
    'Norway (+47)',
	'Oman (+968)',
	'Palau (+680)',
	'Panama (+507)',
	'Papua New Guinea (+675)',
	'Paraguay (+595)',
    'Peru (+51)',
    'Philippines (+63)',
    'Poland (+48)',
	'Portugal (+351)',
	'Puerto Rico (+1787)',
	'Qatar (+974)',
	'Reunion (+262)',
    'Romania (+40)',
    'Russia (+7)',
	'Rwanda (+250)',
	'San Marino (+378)',
	'Sao Tome & Principe (+239)',
	'Saudi Arabia (+966)',
	'Senegal (+221)',
	'Serbia (+381)',
	'Seychelles (+248)',
	'Sierra Leone (+232)',
    'Singapore (+65)',
	'Slovak Republic (+421)',
	'Slovenia (+386)',
	'Solomon Islands (+677)',
	'Somalia (+252)',
    'South Africa (+27)',
    'Spain (+34)',
    'Sri Lanka (+94)',
	'St. Helena (+290)',
	'St. Kitts (+1869)',
	'St. Lucia (+1758)',
	'Sudan (+249)',
	'Suriname (+597)',
	'Swaziland (+268)',
    'Sweden (+46)',
    'Switzerland (+41)',
	'Syria (+963)',
	'Taiwan (+886)',
    'Tajikstan (+7)',
    'Thailand (+66)',
	'Togo (+228)',
	'Tonga (+676)',
	'Trinidad & Tobago (+1868)',
	'Tunisia (+216)',
    'Turkey (+90)',
    'Turkmenistan (+7)',
	'Turkmenistan (+993)',
	'Turks & Caicos Islands (+1649)',
	'Tuvalu (+688)',
	'Uganda (+256)',
	'Ukraine (+380)',
	'United Arab Emirates (+971)',
	'Uruguay (+598)', 
    'Uzbekistan (+7)',
	'Vanuatu (+678)',
	'Vatican City (+379)',
    'Venezuela (+58)',
    'Vietnam (+84)',
    'Virgin Islands - British (+1284)',
    'Virgin Islands - US (+1340)',
	'Wallis & Futuna (+681)',
	'Yemen (North)(+969)',
	'Yemen (South)(+967)',
	'Zambia (+260)',
	'Zimbabwe (+263)',
];

export const countryCodeOption=()=>countryCodeList.map((countryCode,index)=><option key={index} value={countryCode}>{countryCode}</option>); 

const qualificationList=[
                        'Select','Degree',
                        'Diploma','High School (S.S.CE)',
                        'HND','MBA/MSC','MBBS', 'MPhill/PHD'
                        ,'N.C.E','OND', 'Others','Vocational'];

export const qualificationOption=()=>qualificationList.map((qualification,index)=><option key={index} value={qualification}>{qualification}</option>);

const experienceList=[
    'Select', 'No Experience/Less than 1 year',
    '1 year', '2 years', '3 years', '4 years',
     '5 years','6 years', '8 years', '9 years',
     '10 years', '10 to 20 years', 'Above 20 years',
];

export const experienceOption=()=>experienceList.map((option,index)=><option key={index} value={option}>{option}</option>);

const availabilityList=[

    'Select', 'immediately', '1 Week',
    '2 Weeks', '3 Weeks', '1 Month',
    '2 Months', 'More than 3 Months'
    
]

export const availabiltyOption=()=>availabilityList.map((time,index)=><option key={index}>{time}</option>)

export const workTypeOption=()=> ['Select', 'Contract', 'Full Time',"Internship & Graduate", 'Part Time'].map((workType, index)=><option key={index} value={workType}>{workType}</option>)

export const moneyOption=()=>['Select','Naira', "Dollar"].map((currency,index)=><option key={index} value={currency}>{currency}</option>)