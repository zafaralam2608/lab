export const flights = {
  OTA_AirDetailsRS: {
    PrimaryLangID: 'eng',
    Version: '1.0',
    TransactionIdentifier: '',
    FLSNote: 'This XML adds attributes not in the OTA XML spec.  All such attributes start with FLS',
    FLSDevice: 'otaxmlexpanded',
    xmlns: 'http://www.opentravel.org/OTA/2003/05',
    Success: {
      selfclosing: 'true',
    },
    FLSResponseFields: {
      FLSOriginCode: 'PNQ',
      FLSOriginName: 'Lohegaon Airport',
      FLSDestinationCode: 'PAT',
      FLSDestinationName: 'Jayaprakash Narayan Airport',
      FLSStartDate: '20221222',
      FLSEndDate: '20221222',
      FLSResultCount: '3',
      FLSRoutesFound: '10',
      FLSBranchCount: '95',
      FLSTargetCount: '107',
      FLSRecordCount: '6635',
      selfclosing: 'true',
    },
    FlightDetails: [
      {
        TotalFlightTime: 'PT3H35M',
        TotalMiles: '1253',
        TotalTripTime: 'PT4H15M',
        FLSDepartureDateTime: '20221222T05:30:00',
        FLSDepartureTimeOffset: '+0530',
        FLSDepartureCode: 'PNQ',
        FLSDepartureName: 'Lohegaon Airport',
        FLSArrivalDateTime: '20221222T09:45:00',
        FLSArrivalTimeOffset: '+0530',
        FLSArrivalCode: 'PAT',
        FLSArrivalName: 'Jayaprakash Narayan Airport',
        FLSFlightType: 'Connect',
        FLSFlightLegs: '2',
        FLSFlightDays: '...4...',
        FLSDayIndicator: '',
        FlightLegDetails: [
          {
            DepartureDateTime: '20221222T05:30:00',
            FLSDepartureTimeOffset: '+0530',
            ArrivalDateTime: '20221222T07:40:00',
            FLSArrivalTimeOffset: '+0530',
            FlightNumber: '974',
            JourneyDuration: 'PT2H10M',
            SequenceNumber: '1',
            LegDistance: '720',
            FLSMeals: 'M',
            FLSInflightServices: ' ',
            FLSUUID: 'PNQDEL20221222UK974',
            DepartureAirport: {
              CodeContext: 'IATA',
              LocationCode: 'PNQ',
              FLSLocationName: 'Lohegaon Airport',
              Terminal: ' ',
              FLSDayIndicator: '"/',
              selfclosing: 'true',
            },
            ArrivalAirport: {
              CodeContext: 'IATA',
              LocationCode: 'DEL',
              FLSLocationName: 'Indira Gandhi International Airport',
              Terminal: '3',
              FLSDayIndicator: '"/',
              selfclosing: 'true',
            },
            MarketingAirline: {
              Code: 'UK',
              CodeContext: 'IATA',
              CompanyShortName: 'Vistara',
              selfclosing: 'true',
            },
            Equipment: {
              AirEquipType: '320',
              selfclosing: 'true',
            },
          },
          {
            DepartureDateTime: '20221222T08:20:00',
            FLSDepartureTimeOffset: '+0530',
            ArrivalDateTime: '20221222T09:45:00',
            FLSArrivalTimeOffset: '+0530',
            FlightNumber: '717',
            JourneyDuration: 'PT1H25M',
            SequenceNumber: '2',
            LegDistance: '533',
            FLSMeals: 'M',
            FLSInflightServices: ' ',
            FLSUUID: 'DELPAT20221222UK717',
            DepartureAirport: {
              CodeContext: 'IATA',
              LocationCode: 'DEL',
              FLSLocationName: 'Indira Gandhi International Airport',
              Terminal: '3',
              FLSDayIndicator: '"/',
              selfclosing: 'true',
            },
            ArrivalAirport: {
              CodeContext: 'IATA',
              LocationCode: 'PAT',
              FLSLocationName: 'Jayaprakash Narayan Airport',
              Terminal: ' ',
              FLSDayIndicator: '"/',
              selfclosing: 'true',
            },
            MarketingAirline: {
              Code: 'UK',
              CodeContext: 'IATA',
              CompanyShortName: 'Vistara',
              selfclosing: 'true',
            },
            Equipment: {
              AirEquipType: '320',
              selfclosing: 'true',
            },
          },
        ],
      },
      {
        TotalFlightTime: 'PT2H15M',
        TotalMiles: '864',
        TotalTripTime: 'PT2H15M',
        FLSDepartureDateTime: '20221222T12:05:00',
        FLSDepartureTimeOffset: '+0530',
        FLSDepartureCode: 'PNQ',
        FLSDepartureName: 'Lohegaon Airport',
        FLSArrivalDateTime: '20221222T14:20:00',
        FLSArrivalTimeOffset: '+0530',
        FLSArrivalCode: 'PAT',
        FLSArrivalName: 'Jayaprakash Narayan Airport',
        FLSFlightType: 'NonStop',
        FLSFlightLegs: '1',
        FLSFlightDays: '...4...',
        FLSDayIndicator: '',
        FlightLegDetails: {
          DepartureDateTime: '20221222T12:05:00',
          FLSDepartureTimeOffset: '+0530',
          ArrivalDateTime: '20221222T14:20:00',
          FLSArrivalTimeOffset: '+0530',
          FlightNumber: '757',
          JourneyDuration: 'PT2H15M',
          SequenceNumber: '1',
          LegDistance: '864',
          FLSMeals: '',
          FLSInflightServices: ' ',
          FLSUUID: 'PNQPAT20221222SG757',
          DepartureAirport: {
            CodeContext: 'IATA',
            LocationCode: 'PNQ',
            FLSLocationName: 'Lohegaon Airport',
            Terminal: ' ',
            FLSDayIndicator: '"/',
            selfclosing: 'true',
          },
          ArrivalAirport: {
            CodeContext: 'IATA',
            LocationCode: 'PAT',
            FLSLocationName: 'Jayaprakash Narayan Airport',
            Terminal: ' ',
            FLSDayIndicator: '"/',
            selfclosing: 'true',
          },
          MarketingAirline: {
            Code: 'SG',
            CodeContext: 'IATA',
            CompanyShortName: 'SpiceJet',
            selfclosing: 'true',
          },
          Equipment: {
            AirEquipType: '737',
            selfclosing: 'true',
          },
        },
      },
      {
        TotalFlightTime: 'PT2H20M',
        TotalMiles: '864',
        TotalTripTime: 'PT2H20M',
        FLSDepartureDateTime: '20221222T16:40:00',
        FLSDepartureTimeOffset: '+0530',
        FLSDepartureCode: 'PNQ',
        FLSDepartureName: 'Lohegaon Airport',
        FLSArrivalDateTime: '20221222T19:00:00',
        FLSArrivalTimeOffset: '+0530',
        FLSArrivalCode: 'PAT',
        FLSArrivalName: 'Jayaprakash Narayan Airport',
        FLSFlightType: 'NonStop',
        FLSFlightLegs: '1',
        FLSFlightDays: '...4...',
        FLSDayIndicator: '',
        FlightLegDetails: {
          DepartureDateTime: '20221222T16:40:00',
          FLSDepartureTimeOffset: '+0530',
          ArrivalDateTime: '20221222T19:00:00',
          FLSArrivalTimeOffset: '+0530',
          FlightNumber: '653',
          JourneyDuration: 'PT2H20M',
          SequenceNumber: '1',
          LegDistance: '864',
          FLSMeals: 'F',
          FLSInflightServices: ' ',
          FLSUUID: 'PNQPAT202212226E653',
          DepartureAirport: {
            CodeContext: 'IATA',
            LocationCode: 'PNQ',
            FLSLocationName: 'Lohegaon Airport',
            Terminal: ' ',
            FLSDayIndicator: '"/',
            selfclosing: 'true',
          },
          ArrivalAirport: {
            CodeContext: 'IATA',
            LocationCode: 'PAT',
            FLSLocationName: 'Jayaprakash Narayan Airport',
            Terminal: ' ',
            FLSDayIndicator: '"/',
            selfclosing: 'true',
          },
          MarketingAirline: {
            Code: '6E',
            CodeContext: 'IATA',
            CompanyShortName: 'IndiGo',
            selfclosing: 'true',
          },
          Equipment: {
            AirEquipType: '320',
            selfclosing: 'true',
          },
        },
      },
    ],
  },
};

export const airports = [
  {
    iataCode: 'AGR',
    country: 'IN',
    state: 'Uttar Pradesh',
    city: 'Agra',
    airportName: 'Agra Airport',
    latitude: '27.158',
    longitude: '77.963',
  },
  {
    iataCode: 'AGX',
    country: 'IN',
    state: 'Lakshadweep',
    city: 'Agatti Island',
    airportName: 'Agatti Island Airport',
    latitude: '10.824',
    longitude: '72.176',
  },
  {
    iataCode: 'AJL',
    country: 'IN',
    state: 'Mizoram',
    city: 'Aizawl',
    airportName: 'Lengpui Airport',
    latitude: '23.839',
    longitude: '92.625',
  },
  {
    iataCode: 'AMD',
    country: 'IN',
    state: 'Gujarat',
    city: 'Ahmedabad',
    airportName: 'Sardar VallabhBhai Patel Airport',
    latitude: '23.066',
    longitude: '72.624',
  },
  {
    iataCode: 'ATQ',
    country: 'IN',
    state: 'Punjab',
    city: 'Amritsar',
    airportName: 'Sri Guru Ram Dass Jee Airport',
    latitude: '31.71',
    longitude: '74.797',
  },
  {
    iataCode: 'BBI',
    country: 'IN',
    state: 'Orissa',
    city: 'Bhubaneswar',
    airportName: 'Biju Patnaik Airport',
    latitude: '20.244',
    longitude: '85.82',
  },
  {
    iataCode: 'BDQ',
    country: 'IN',
    state: 'Gujarat',
    city: 'Vadodara',
    airportName: 'Vadodara Airport',
    latitude: '22.329',
    longitude: '73.221',
  },
  {
    iataCode: 'BEK',
    country: 'IN',
    state: 'Uttar Pradesh',
    city: 'Bareilly',
    airportName: 'Bareilly Airport',
    latitude: '26.217',
    longitude: '81.233',
  },
  {
    iataCode: 'BHO',
    country: 'IN',
    state: 'Madhya Pradesh',
    city: 'Bhopal',
    airportName: 'Raja Bhoj Airport',
    latitude: '23.285',
    longitude: '77.339',
  },
  {
    iataCode: 'BHU',
    country: 'IN',
    state: 'Gujarat',
    city: 'Bhavnagar',
    airportName: 'Bhavnagar Airport',
    latitude: '21.755',
    longitude: '72.184',
  },
  {
    iataCode: 'BKB',
    country: 'IN',
    state: 'Rajasthan',
    city: 'Bikaner',
    airportName: 'Nal Airport',
    latitude: '28.017',
    longitude: '73.3',
  },
  {
    iataCode: 'BLR',
    country: 'IN',
    state: 'Karnataka',
    city: 'Bengaluru',
    airportName: 'Kempegowda International Airport',
    latitude: '13.199',
    longitude: '77.706',
  },
  {
    iataCode: 'BOM',
    country: 'IN',
    state: 'Maharashtra',
    city: 'Mumbai',
    airportName: 'Chhatrapati Shivaji Maharaj Airport',
    latitude: '19.088',
    longitude: '72.852',
  },
  {
    iataCode: 'CCJ',
    country: 'IN',
    state: 'Kerala',
    city: 'Kozhikode',
    airportName: 'Kozhikode International Airport',
    latitude: '11.137',
    longitude: '75.951',
  },
  {
    iataCode: 'CCU',
    country: 'IN',
    state: 'West Bengal',
    city: 'Kolkata',
    airportName: 'Subhas Chandra Bose Airport',
    latitude: '22.652',
    longitude: '88.449',
  },
  {
    iataCode: 'CDP',
    country: 'IN',
    state: 'Andhra Pradesh',
    city: 'Kadapa',
    airportName: 'Cuddapah Airport',
    latitude: '14.517',
    longitude: '78.783',
  },
  {
    iataCode: 'CJB',
    country: 'IN',
    state: 'Tamil Nadu',
    city: 'Coimbatore',
    airportName: 'Coimbatore International Airport',
    latitude: '11.028',
    longitude: '77.043',
  },
  {
    iataCode: 'CNN',
    country: 'IN',
    state: 'Kerala',
    city: 'Kannur',
    airportName: 'Kannur International Airport',
    latitude: '11.918',
    longitude: '75.546',
  },
  {
    iataCode: 'COK',
    country: 'IN',
    state: 'Kerala',
    city: 'Kochi',
    airportName: 'Kochi International Airport',
    latitude: '10.156',
    longitude: '76.39',
  },
  {
    iataCode: 'DBR',
    country: 'IN',
    state: 'Bihar',
    city: 'Darbhanga',
    airportName: 'Darbhanga Airport',
    latitude: '26.198',
    longitude: '85.911',
  },
  {
    iataCode: 'DED',
    country: 'IN',
    state: 'Uttarakhand',
    city: 'Dehradun',
    airportName: 'Jolly Grant Airport',
    latitude: '30.19',
    longitude: '78.18',
  },
  {
    iataCode: 'DEL',
    country: 'IN',
    state: 'Delhi',
    city: 'New Delhi',
    airportName: 'Indira Gandhi International Airport',
    latitude: '28.574',
    longitude: '77.101',
  },
  {
    iataCode: 'DGH',
    country: 'IN',
    state: 'Jharkhand',
    city: 'Deoghar',
    airportName: 'Deoghar International Airport',
    latitude: '24.447',
    longitude: '86.707',
  },
  {
    iataCode: 'DHM',
    country: 'IN',
    state: 'Himachal Pradesh',
    city: 'Kangra',
    airportName: 'Kangra Airport',
    latitude: '32.165',
    longitude: '76.26',
  },
  {
    iataCode: 'DIB',
    country: 'IN',
    state: 'Assam',
    city: 'Dibrugarh',
    airportName: 'Mohanbari Airport',
    latitude: '27.484',
    longitude: '95.021',
  },
  {
    iataCode: 'DIU',
    country: 'IN',
    state: 'Daman and Diu',
    city: 'Diu',
    airportName: 'Diu Airport',
    latitude: '20.717',
    longitude: '70.917',
  },
  {
    iataCode: 'DMU',
    country: 'IN',
    state: 'Nagaland',
    city: 'Dimapur',
    airportName: 'Dimapur Airport',
    latitude: '25.884',
    longitude: '93.774',
  },
  {
    iataCode: 'GAU',
    country: 'IN',
    state: 'Assam',
    city: 'Guwahati',
    airportName: 'Gopinath Bordoloi International Airport',
    latitude: '26.104',
    longitude: '91.588',
  },
  {
    iataCode: 'GAY',
    country: 'IN',
    state: 'Bihar',
    city: 'Gaya',
    airportName: 'Gaya Airport',
    latitude: '24.747',
    longitude: '84.946',
  },
  {
    iataCode: 'GOI',
    country: 'IN',
    state: 'Goa',
    city: 'Dabolim',
    airportName: 'Dabolim Airport',
    latitude: '15.381',
    longitude: '73.831',
  },
  {
    iataCode: 'GOP',
    country: 'IN',
    state: 'Uttar Pradesh',
    city: 'Gorakhpur',
    airportName: 'Gorakhpur Airport',
    latitude: '26.74',
    longitude: '83.45',
  },
  {
    iataCode: 'GOX',
    country: 'IN',
    state: 'Goa',
    city: 'Mopa',
    airportName: 'Mopa Airport',
    latitude: '15.731',
    longitude: '73.868',
  },
  {
    iataCode: 'GWL',
    country: 'IN',
    state: 'Madhya Pradesh',
    city: 'Gwalior',
    airportName: 'Gwalior Airport',
    latitude: '26.294',
    longitude: '78.23',
  },
  {
    iataCode: 'HBX',
    country: 'IN',
    state: 'Karnataka',
    city: 'Hubli',
    airportName: 'Hubli Airport',
    latitude: '15.361',
    longitude: '75.086',
  },
  {
    iataCode: 'HGI',
    country: 'IN',
    state: 'Arunachal Pradesh',
    city: 'Itanagar',
    airportName: 'Hollongi Airport',
    latitude: '26.966',
    longitude: '93.651',
  },
  {
    iataCode: 'HJR',
    country: 'IN',
    state: 'Madhya Pradesh',
    city: 'Khajuraho',
    airportName: 'Khajuraho Airport',
    latitude: '24.824',
    longitude: '79.923',
  },
  {
    iataCode: 'HYD',
    country: 'IN',
    state: 'Telangana',
    city: 'Hyderabad',
    airportName: 'Rajiv Gandhi International Airport',
    latitude: '17.26',
    longitude: '78.397',
  },
  {
    iataCode: 'IDR',
    country: 'IN',
    state: 'Madhya Pradesh',
    city: 'Indore',
    airportName: 'Devi Ahilya Bai Holkar Airport',
    latitude: '22.723',
    longitude: '75.806',
  },
  {
    iataCode: 'IMF',
    country: 'IN',
    state: 'Manipur',
    city: 'Imphal',
    airportName: 'Imphal Airport',
    latitude: '24.767',
    longitude: '93.9',
  },
  {
    iataCode: 'ISK',
    country: 'IN',
    state: 'Maharashtra',
    city: 'Nasik',
    airportName: 'Ozar Airport',
    latitude: '20.119',
    longitude: '73.913',
  },
  {
    iataCode: 'IXA',
    country: 'IN',
    state: 'Tripura',
    city: 'Agartala',
    airportName: 'Agartala Airport',
    latitude: '23.887',
    longitude: '91.241',
  },
  {
    iataCode: 'IXB',
    country: 'IN',
    state: 'West Bengal',
    city: 'Bagdogra',
    airportName: 'Bagdogra Airport',
    latitude: '26.683',
    longitude: '88.333',
  },
  {
    iataCode: 'IXC',
    country: 'IN',
    state: 'Chandigarh',
    city: 'Chandigarh',
    airportName: 'Chandigarh Airport',
    latitude: '30.672',
    longitude: '76.791',
  },
  {
    iataCode: 'IXD',
    country: 'IN',
    state: 'Uttar Pradesh',
    city: 'Prayagraj',
    airportName: 'Allahabad Airport',
    latitude: '25.44',
    longitude: '81.736',
  },
  {
    iataCode: 'IXE',
    country: 'IN',
    state: 'Karnataka',
    city: 'Mangaluru',
    airportName: 'Mangalore Airport',
    latitude: '12.964',
    longitude: '74.894',
  },
  {
    iataCode: 'IXG',
    country: 'IN',
    state: 'Karnataka',
    city: 'Belagavi',
    airportName: 'Sambre Airport',
    latitude: '15.859',
    longitude: '74.618',
  },
  {
    iataCode: 'IXI',
    country: 'IN',
    state: 'Assam',
    city: 'Lakhimpur',
    airportName: 'Lilabari Airport',
    latitude: '27.29',
    longitude: '94.089',
  },
  {
    iataCode: 'IXJ',
    country: 'IN',
    state: 'Jammu and Kashmir',
    city: 'Jammu',
    airportName: 'Satwari Airport',
    latitude: '32.69',
    longitude: '74.839',
  },
  {
    iataCode: 'IXL',
    country: 'IN',
    state: 'Jammu and Kashmir',
    city: 'Leh',
    airportName: 'Kushok Bakula Rimpoche Airport',
    latitude: '34.167',
    longitude: '77.583',
  },
  {
    iataCode: 'IXM',
    country: 'IN',
    state: 'Tamil Nadu',
    city: 'Madurai',
    airportName: 'Madurai Airport',
    latitude: '9.834',
    longitude: '78.093',
  },
  {
    iataCode: 'IXR',
    country: 'IN',
    state: 'Jharkhand',
    city: 'Ranchi',
    airportName: 'Birsa Munda Airport',
    latitude: '23.314',
    longitude: '85.324',
  },
  {
    iataCode: 'IXS',
    country: 'IN',
    state: 'Assam',
    city: 'Silchar',
    airportName: 'Kumbhirgram Airport',
    latitude: '24.913',
    longitude: '92.979',
  },
  {
    iataCode: 'IXT',
    country: 'IN',
    state: 'Arunachal Pradesh',
    city: 'Pasighat',
    airportName: 'Pasighat Airport',
    latitude: '28.017',
    longitude: '95.333',
  },
  {
    iataCode: 'IXU',
    country: 'IN',
    state: 'Maharashtra',
    city: 'Aurangabad',
    airportName: 'Aurangabad Airport',
    latitude: '19.864',
    longitude: '75.401',
  },
  {
    iataCode: 'IXZ',
    country: 'IN',
    state: 'Andaman and Nicobar Islands',
    city: 'Port Blair',
    airportName: 'Veer Savarkar International Airport',
    latitude: '11.648',
    longitude: '92.744',
  },
  {
    iataCode: 'JAI',
    country: 'IN',
    state: 'Rajasthan',
    city: 'Jaipur',
    airportName: 'Jaipur International Airport',
    latitude: '26.824',
    longitude: '75.812',
  },
  {
    iataCode: 'JDH',
    country: 'IN',
    state: 'Rajasthan',
    city: 'Jodhpur',
    airportName: 'Jodhpur Airport',
    latitude: '26.261',
    longitude: '73.048',
  },
  {
    iataCode: 'JGA',
    country: 'IN',
    state: 'Gujarat',
    city: 'Jamnagar',
    airportName: 'Govardhanpur Airport',
    latitude: '22.463',
    longitude: '70.012',
  },
  {
    iataCode: 'JGB',
    country: 'IN',
    state: 'Chhattisgarh',
    city: 'Jagdalpur',
    airportName: 'Jagdalpur Airport',
    latitude: '19.067',
    longitude: '82.033',
  },
  {
    iataCode: 'JLR',
    country: 'IN',
    state: 'Madhya Pradesh',
    city: 'Jabalpur',
    airportName: 'Jabalpur Airport',
    latitude: '23.178',
    longitude: '80.052',
  },
  {
    iataCode: 'JRG',
    country: 'IN',
    state: 'Orissa',
    city: 'Jharsuguda',
    airportName: 'Veer Surendra Sai Airport',
    latitude: '21.913',
    longitude: '84.05',
  },
  {
    iataCode: 'JRH',
    country: 'IN',
    state: 'Assam',
    city: 'Jorhat',
    airportName: 'Rowriah Airport',
    latitude: '26.729',
    longitude: '94.178',
  },
  {
    iataCode: 'JSA',
    country: 'IN',
    state: 'Rajasthan',
    city: 'Jaisalmer',
    airportName: 'Jaisalmer Airport',
    latitude: '26.917',
    longitude: '70.9',
  },
  {
    iataCode: 'KBK',
    country: 'IN',
    state: 'Uttar Pradesh',
    city: 'Kushinagar',
    airportName: 'Kushinagar lnternational Airport',
    latitude: '26.773',
    longitude: '83.896',
  },
  {
    iataCode: 'KJB',
    country: 'IN',
    state: 'Andhra Pradesh',
    city: 'Kurnool',
    airportName: 'Kurnool Airport',
    latitude: '15.715',
    longitude: '78.178',
  },
  {
    iataCode: 'KLH',
    country: 'IN',
    state: 'Maharashtra',
    city: 'Kolhapur',
    airportName: 'Kolhapur Airport',
    latitude: '16.667',
    longitude: '74.333',
  },
  {
    iataCode: 'KNU',
    country: 'IN',
    state: 'Uttar Pradesh',
    city: 'Kanpur',
    airportName: 'Kanpur Airport',
    latitude: '26.403',
    longitude: '80.412',
  },
  {
    iataCode: 'KUU',
    country: 'IN',
    state: 'Himachal Pradesh',
    city: 'Kullu',
    airportName: 'Bhuntar Airport',
    latitude: '31.983',
    longitude: '77.1',
  },
  {
    iataCode: 'LKO',
    country: 'IN',
    state: 'Uttar Pradesh',
    city: 'Lucknow',
    airportName: 'Chaudhary Charan Singh Airport',
    latitude: '26.761',
    longitude: '80.889',
  },
  {
    iataCode: 'MAA',
    country: 'IN',
    state: 'Tamil Nadu',
    city: 'Chennai',
    airportName: 'Chennai International Airport',
    latitude: '12.994',
    longitude: '80.181',
  },
  {
    iataCode: 'MYQ',
    country: 'IN',
    state: 'Karnataka',
    city: 'Mysuru',
    airportName: 'Mandakalli Airport',
    latitude: '12.23',
    longitude: '76.656',
  },
  {
    iataCode: 'NAG',
    country: 'IN',
    state: 'Maharashtra',
    city: 'Nagpur',
    airportName: 'Dr.Ambedkar International Airport',
    latitude: '21.092',
    longitude: '79.047',
  },
  {
    iataCode: 'PAB',
    country: 'IN',
    state: 'Chhattisgarh',
    city: 'Bilaspur',
    airportName: 'Bilaspur Airport',
    latitude: '31.317',
    longitude: '76.833',
  },
  {
    iataCode: 'PAT',
    country: 'IN',
    state: 'Bihar',
    city: 'Patna',
    airportName: 'Jayaprakash Narayan Airport',
    latitude: '25.591',
    longitude: '85.09',
  },
  {
    iataCode: 'PGH',
    country: 'IN',
    state: 'Uttarakhand',
    city: 'Pantnagar',
    airportName: 'Pantnagar Airport',
    latitude: '29.032',
    longitude: '79.474',
  },
  {
    iataCode: 'PNQ',
    country: 'IN',
    state: 'Maharashtra',
    city: 'Pune',
    airportName: 'Lohegaon Airport',
    latitude: '18.581',
    longitude: '73.921',
  },
  {
    iataCode: 'PNY',
    country: 'IN',
    state: 'Puducherry',
    city: 'Pondicherry',
    airportName: 'Pondicherry Airport',
    latitude: '11.969',
    longitude: '79.81',
  },
  {
    iataCode: 'RAJ',
    country: 'IN',
    state: 'Gujarat',
    city: 'Rajkot',
    airportName: 'Rajkot Airport',
    latitude: '22.306',
    longitude: '70.781',
  },
  {
    iataCode: 'RDP',
    country: 'IN',
    state: 'West Bengal',
    city: 'Durgapur',
    airportName: 'Kazi Nazrul Islam Airport',
    latitude: '23.624',
    longitude: '87.242',
  },
  {
    iataCode: 'RJA',
    country: 'IN',
    state: 'Andhra Pradesh',
    city: 'Rajahmundry',
    airportName: 'Rajahmundry Airport',
    latitude: '17.11',
    longitude: '81.821',
  },
  {
    iataCode: 'RPR',
    country: 'IN',
    state: 'Chhattisgarh',
    city: 'Raipur',
    airportName: 'Swami Vivekananda Airport',
    latitude: '21.18',
    longitude: '81.739',
  },
  {
    iataCode: 'RUP',
    country: 'IN',
    state: 'Assam',
    city: 'Dhubri',
    airportName: 'Rupsi Airport',
    latitude: '26.15',
    longitude: '89.917',
  },
  {
    iataCode: 'SAG',
    country: 'IN',
    state: 'Maharashtra',
    city: 'Shirdi',
    airportName: 'Shirdi Airport',
    latitude: '19.694',
    longitude: '74.394',
  },
  {
    iataCode: 'SDW',
    country: 'IN',
    state: 'Maharashtra',
    city: 'Sindhudurg',
    airportName: 'Sindhudurg Airport',
    latitude: '16.003',
    longitude: '73.531',
  },
  {
    iataCode: 'SHL',
    country: 'IN',
    state: 'Meghalaya',
    city: 'Shillong',
    airportName: 'Barapani Airport',
    latitude: '25.706',
    longitude: '91.975',
  },
  {
    iataCode: 'SLV',
    country: 'IN',
    state: 'Himachal Pradesh',
    city: 'Shimla',
    airportName: 'Shimla Airport',
    latitude: '31.117',
    longitude: '77.15',
  },
  {
    iataCode: 'STV',
    country: 'IN',
    state: 'Gujarat',
    city: 'Surat',
    airportName: 'Surat Airport',
    latitude: '21.114',
    longitude: '72.742',
  },
  {
    iataCode: 'SXR',
    country: 'IN',
    state: 'Jammu and Kashmir',
    city: 'Srinagar',
    airportName: 'Sheikh ul Alam Airport',
    latitude: '33.987',
    longitude: '74.774',
  },
  {
    iataCode: 'TCR',
    country: 'IN',
    state: 'Tamil Nadu',
    city: 'Tuticorin',
    airportName: 'Tuticorin Airport',
    latitude: '8.724',
    longitude: '78.026',
  },
  {
    iataCode: 'TEI',
    country: 'IN',
    state: 'Arunachal Pradesh',
    city: 'Tezu',
    airportName: 'Tezu Airport',
    latitude: '27.95',
    longitude: '96.133',
  },
  {
    iataCode: 'TEZ',
    country: 'IN',
    state: 'Assam',
    city: 'Tezpur',
    airportName: 'Tezpur Airport',
    latitude: '26.711',
    longitude: '92.796',
  },
  {
    iataCode: 'TIR',
    country: 'IN',
    state: 'Andhra Pradesh',
    city: 'Tirupati',
    airportName: 'Tirupati Airport',
    latitude: '13.633',
    longitude: '79.543',
  },
  {
    iataCode: 'TRV',
    country: 'IN',
    state: 'Kerala',
    city: 'Thiruvananthapuram',
    airportName: 'Thiruvananthapuram International Airpor',
    latitude: '8.48',
    longitude: '76.92',
  },
  {
    iataCode: 'TRZ',
    country: 'IN',
    state: 'Tamil Nadu',
    city: 'Tiruchirappalli',
    airportName: 'Tiruchchirappalli Airport',
    latitude: '10.765',
    longitude: '78.713',
  },
  {
    iataCode: 'UDR',
    country: 'IN',
    state: 'Rajasthan',
    city: 'Udaipur',
    airportName: 'Maharana Pratap Airport',
    latitude: '24.618',
    longitude: '73.896',
  },
  {
    iataCode: 'VDY',
    country: 'IN',
    state: 'Karnataka',
    city: 'Bellary',
    airportName: 'Jindal Airport',
    latitude: '15.172',
    longitude: '76.644',
  },
  {
    iataCode: 'VGA',
    country: 'IN',
    state: 'Andhra Pradesh',
    city: 'Vijayawada',
    airportName: 'Vijayawada Airport',
    latitude: '16.531',
    longitude: '80.797',
  },
  {
    iataCode: 'VNS',
    country: 'IN',
    state: 'Uttar Pradesh',
    city: 'Varanasi',
    airportName: 'Lal Bahadur Shastri Airport',
    latitude: '25.452',
    longitude: '82.859',
  },
  {
    iataCode: 'VTZ',
    country: 'IN',
    state: 'Andhra Pradesh',
    city: 'Visakhapatnam',
    airportName: 'Vishakhapatnam Airport',
    latitude: '17.721',
    longitude: '83.225',
  },
];
