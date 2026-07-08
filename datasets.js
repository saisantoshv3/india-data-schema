// OpenData Dicts Dataset Registry
const DATASETS = [
  {
    id: "indian-districts-lgd",
    name: "Indian Districts (LGD)",
    category: "Geographic",
    icon: "map",
    description: "Complete Local Government Directory codes for districts, sub-districts, and administrative boundaries provided by the Ministry of Panchayati Raj.",
    rows: "700+ rows",
    updated: "14 days ago",
    tags: ["Admin", "India", "LGD", "Geographic"],
    download: {
      csv: "https://raw.githubusercontent.com/saisantoshv3/electoral_bonds/main/indian_districts_lgd.csv",
      pdf: "https://raw.githubusercontent.com/saisantoshv3/electoral_bonds/main/indian_districts_lgd.pdf",
      json: "https://raw.githubusercontent.com/saisantoshv3/electoral_bonds/main/indian_districts_lgd.json"
    },
    related: [
      { name: "National Census Data 2021", id: "national-census-data-2021" },
      { name: "Urban Infrastructure Index", id: "urban-infrastructure-index" },
      { name: "Regional Demographic Trends", id: "regional-demographic-trends" },
      { name: "State-wise Economic Indicators", id: "state-wise-economic-indicators" }
    ],
    schema: [
      { name: "District Name", type: "STRING", primary: false, desc: "The official name of the administrative district in English.", sample: '"Bangalore Urban"' },
      { name: "LGD Code", type: "INTEGER", primary: true, desc: "Primary Key. Unique ID assigned by the Local Government Directory (LGD) system.", sample: "553" },
      { name: "State Name", type: "STRING", primary: false, desc: "Name of the state or Union Territory the district belongs to.", sample: '"Karnataka"' },
      { name: "Establishment Year", type: "INTEGER", primary: false, desc: "The year the administrative district was formally created.", sample: "1986" }
    ],
    previewHeaders: ["District Name", "LGD Code", "State Name", "Establishment Year"],
    preview: [
      { "District Name": "Ahmedabad", "LGD Code": 442, "State Name": "Gujarat", "Establishment Year": 1949 },
      { "District Name": "Baksa", "LGD Code": 601, "State Name": "Assam", "Establishment Year": 2004 },
      { "District Name": "Chamba", "LGD Code": 18, "State Name": "Himachal Pradesh", "Establishment Year": 1948 },
      { "District Name": "Durg", "LGD Code": 378, "State Name": "Chhattisgarh", "Establishment Year": 1906 },
      { "District Name": "Ernakulam", "LGD Code": 564, "State Name": "Kerala", "Establishment Year": 1958 },
      { "District Name": "Firozabad", "LGD Code": 155, "State Name": "Uttar Pradesh", "Establishment Year": 1989 },
      { "District Name": "Gurugram", "LGD Code": 73, "State Name": "Haryana", "Establishment Year": 1966 },
      { "District Name": "Howrah", "LGD Code": 313, "State Name": "West Bengal", "Establishment Year": 1938 },
      { "District Name": "Indore", "LGD Code": 418, "State Name": "Madhya Pradesh", "Establishment Year": 1948 },
      { "District Name": "Jalna", "LGD Code": 477, "State Name": "Maharashtra", "Establishment Year": 1981 },
      { "District Name": "Kanchipuram", "LGD Code": 603, "State Name": "Tamil Nadu", "Establishment Year": 1997 },
      { "District Name": "Leh Ladakh", "LGD Code": 12, "State Name": "Ladakh", "Establishment Year": 1979 },
      { "District Name": "Mysuru", "LGD Code": 557, "State Name": "Karnataka", "Establishment Year": 1947 },
      { "District Name": "Nashik", "LGD Code": 512, "State Name": "Maharashtra", "Establishment Year": 1869 },
      { "District Name": "Patna", "LGD Code": 230, "State Name": "Bihar", "Establishment Year": 1825 }
    ],
    pythonCode: `import pandas as pd

url = "https://raw.githubusercontent.com/saisantoshv3/electoral_bonds/main/indian_districts_lgd.csv"
df = pd.read_csv(url)

# Filter by state
karnataka_districts = df[df['State Name'] == 'Karnataka']
print(karnataka_districts.head())`,
    curlCode: `curl -X GET "https://raw.githubusercontent.com/saisantoshv3/electoral_bonds/main/indian_districts_lgd.json" \\
     -H "Accept: application/json"`
  },
  {
    id: "mca-companies-registry",
    name: "MCA Companies Registry",
    category: "Government",
    icon: "verified",
    description: "Ministry of Corporate Affairs master data for all registered entities in India including DIN and CIN mappings.",
    rows: "2.4M rows",
    updated: "7 days ago",
    tags: ["Corporate", "Registry", "Finance", "Government"],
    download: {
      csv: "https://raw.githubusercontent.com/saisantoshv3/electoral_bonds/main/mca_companies.csv",
      pdf: "https://raw.githubusercontent.com/saisantoshv3/electoral_bonds/main/mca_companies.pdf",
      json: "https://raw.githubusercontent.com/saisantoshv3/electoral_bonds/main/mca_companies.json"
    },
    related: [
      { name: "Company Directors Registry", id: "company-directors-registry" },
      { name: "GSTIN Registry", id: "gstin-registry" },
      { name: "Startup India Certified Entities", id: "startup-india-entities" }
    ],
    schema: [
      { name: "Company Name", type: "STRING", primary: false, desc: "The official registered name of the corporate entity.", sample: '"Tata Consultancy Services Limited"' },
      { name: "CIN", type: "STRING", primary: true, desc: "Corporate Identification Number. Unique 21-character alphanumeric identifier.", sample: '"L74140MH1995PLC090110"' },
      { name: "Registration Date", type: "DATE", primary: false, desc: "The date when the entity was officially incorporated.", sample: '"1995-07-15"' },
      { name: "Authorized Capital", type: "INTEGER", primary: false, desc: "Maximum capital amount in INR the company can raise via share issuance.", sample: "3,750,000,000" },
      { name: "Paid Up Capital", type: "INTEGER", primary: false, desc: "Actual capital in INR contributed by shareholders.", sample: "3,661,400,000" },
      { name: "Company Status", type: "STRING", primary: false, desc: "Current status of the company (e.g. Active, Strike Off, Amalgamated).", sample: '"Active"' },
      { name: "State", type: "STRING", primary: false, desc: "Indian state in which the company's registered office is situated.", sample: '"Maharashtra"' }
    ],
    previewHeaders: ["Company Name", "CIN", "Registration Date", "Company Status", "State"],
    preview: [
      { "Company Name": "Tata Consultancy Services Limited", "CIN": "L74140MH1995PLC090110", "Registration Date": "1995-07-15", "Company Status": "Active", "State": "Maharashtra" },
      { "Company Name": "Infosys Limited", "CIN": "L85110KA1981PLC013115", "Registration Date": "1981-07-02", "Company Status": "Active", "State": "Karnataka" },
      { "Company Name": "Reliance Industries Limited", "CIN": "L17110MH1973PLC019786", "Registration Date": "1973-05-08", "Company Status": "Active", "State": "Maharashtra" },
      { "Company Name": "HDFC Bank Limited", "CIN": "L65920MH1994PLC080618", "Registration Date": "1994-08-30", "Company Status": "Active", "State": "Maharashtra" },
      { "Company Name": "ICICI Bank Limited", "CIN": "L65190GJ1994PLC021012", "Registration Date": "1994-01-05", "Company Status": "Active", "State": "Gujarat" },
      { "Company Name": "Wipro Limited", "CIN": "L32102KA1945PLC020800", "Registration Date": "1945-12-29", "Company Status": "Active", "State": "Karnataka" },
      { "Company Name": "Bharti Airtel Limited", "CIN": "L74899HR1995PLC095960", "Registration Date": "1995-07-07", "Company Status": "Active", "State": "Haryana" },
      { "Company Name": "Larsen & Toubro Limited", "CIN": "L99999MH1946PLC004768", "Registration Date": "1946-02-07", "Company Status": "Active", "State": "Maharashtra" },
      { "Company Name": "State Bank of India", "CIN": "State Owned Corp", "Registration Date": "1955-07-01", "Company Status": "Active", "State": "Maharashtra" },
      { "Company Name": "Hindustan Unilever Limited", "CIN": "L15140MH1933PLC002030", "Registration Date": "1933-10-17", "Company Status": "Active", "State": "Maharashtra" }
    ],
    pythonCode: `import pandas as pd

url = "https://raw.githubusercontent.com/saisantoshv3/electoral_bonds/main/mca_companies.csv"
df = pd.read_csv(url)

# Print company name and status
print(df[['Company Name', 'Company Status']].head())`,
    curlCode: `curl -X GET "https://raw.githubusercontent.com/saisantoshv3/electoral_bonds/main/mca_companies.json" \\
     -H "Accept: application/json"`
  },
  {
    id: "airline-codes",
    name: "Airline Codes",
    category: "Transport",
    icon: "flight",
    description: "IATA and ICAO airline codes including carrier names, callsigns, and country of origin for global aviation entities.",
    rows: "9k rows",
    updated: "Current",
    tags: ["IATA", "Aviation", "Transport", "Global"],
    download: {
      csv: "https://raw.githubusercontent.com/saisantoshv3/electoral_bonds/main/airline_codes.csv",
      pdf: "https://raw.githubusercontent.com/saisantoshv3/electoral_bonds/main/airline_codes.pdf",
      json: "https://raw.githubusercontent.com/saisantoshv3/electoral_bonds/main/airline_codes.json"
    },
    related: [
      { name: "Airport Directory", id: "airport-directory" },
      { name: "Flight Schedules Database", id: "flight-schedules" },
      { name: "Airspace Sector Boundaries", id: "airspace-sector-boundaries" }
    ],
    schema: [
      { name: "Airline Name", type: "STRING", primary: false, desc: "The official name of the airline company.", sample: '"Air India"' },
      { name: "IATA Code", type: "STRING", primary: false, desc: "2-character IATA carrier code.", sample: '"AI"' },
      { name: "ICAO Code", type: "STRING", primary: true, desc: "3-character ICAO code. Unique identifier.", sample: '"AIC"' },
      { name: "Callsign", type: "STRING", primary: false, desc: "Official radiotelephony callsign.", sample: '"AIRINDIA"' },
      { name: "Country", type: "STRING", primary: false, desc: "Country of registration/base of operations.", sample: '"India"' },
      { name: "Active", type: "BOOLEAN", primary: false, desc: "Indicates whether the airline is currently operational.", sample: "true" }
    ],
    previewHeaders: ["Airline Name", "IATA Code", "ICAO Code", "Callsign", "Country", "Active"],
    preview: [
      { "Airline Name": "Air India", "IATA Code": "AI", "ICAO Code": "AIC", "Callsign": "AIRINDIA", "Country": "India", "Active": true },
      { "Airline Name": "IndiGo", "IATA Code": "6E", "ICAO Code": "IGO", "Callsign": "IFLY", "Country": "India", "Active": true },
      { "Airline Name": "SpiceJet", "IATA Code": "SG", "ICAO Code": "SEJ", "Callsign": "SPICEJET", "Country": "India", "Active": true },
      { "Airline Name": "Vistara", "IATA Code": "UK", "ICAO Code": "VTI", "Callsign": "VISTARA", "Country": "India", "Active": true },
      { "Airline Name": "Akasa Air", "IATA Code": "QP", "ICAO Code": "AKP", "Callsign": "AKASA", "Country": "India", "Active": true },
      { "Airline Name": "British Airways", "IATA Code": "BA", "ICAO Code": "BAW", "Callsign": "SPEEDBIRD", "Country": "United Kingdom", "Active": true },
      { "Airline Name": "Emirates", "IATA Code": "EK", "ICAO Code": "UAE", "Callsign": "EMIRATES", "Country": "United Arab Emirates", "Active": true },
      { "Airline Name": "Lufthansa", "IATA Code": "LH", "ICAO Code": "DLH", "Callsign": "LUFTHANSA", "Country": "Germany", "Active": true },
      { "Airline Name": "Singapore Airlines", "IATA Code": "SQ", "ICAO Code": "SIA", "Callsign": "SINGAPORE", "Country": "Singapore", "Active": true },
      { "Airline Name": "Qatar Airways", "IATA Code": "QR", "ICAO Code": "QTR", "Callsign": "QATARI", "Country": "Qatar", "Active": true }
    ],
    pythonCode: `import pandas as pd

url = "https://raw.githubusercontent.com/saisantoshv3/electoral_bonds/main/airline_codes.csv"
df = pd.read_csv(url)

# Display active airlines in India
indian_active = df[(df['Country'] == 'India') & (df['Active'] == True)]
print(indian_active.head())`,
    curlCode: `curl -X GET "https://raw.githubusercontent.com/saisantoshv3/electoral_bonds/main/airline_codes.json" \\
     -H "Accept: application/json"`
  }
];
