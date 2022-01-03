export interface LoaderState {
  isLoading: boolean;
}
export interface PropertiesList {
  agentInfo?: AgentInfo;
  body: string;
  records: Record[];
  role: string;
  showContactInfo: boolean;
  title: string;
}

export interface Record {
  city: string;
  favorite: boolean;
  floorplans: FloorPlan[];
  geocode: Geocode;
  highValueAmenities: string[];
  highestSentCommissions: number;
  listID: number;
  management: string
  name: string;
  onsiteManager: string;
  order: number;
  paidUtilities: string[];
  pets: boolean;
  photo: string;
  propertyID: number;
  proximity: number;
  section8: boolean;
  seniorHousing: boolean;
  state: string;
  streetAddress: string;
  studentHousting: boolean;
  washerDry: string;
}

export interface AgentInfo {
  accountID: number;
  company: string;
  customHeader: string;
  firstname: string;
  lastname: string;
  splashMessage: string;
}

export interface FloorPlan {
  bedrooms: number;
  price: number;
  type: string;
}

export interface Geocode {
  IsValid: boolean;
  Latitude: string;
  Longitude: string;
  Percision: string;
}

export interface UpdateItemData {
  isFavorite: boolean;
  listID: string;
  propertyID: number;
  token: string;
}

export interface UpdateResponse {
  Success: boolean;
}

export interface ManagementOffice {
  city: string;
  headquarters: boolean;
  phone: string;
  state: string;
  streetAddress: string;
  zip: string;
}

export interface Parking {
  attached: boolean;
  breezeway: boolean;
  covered: boolean;
  coveredFeeMax: number;
  coveredFeeMin: number;
  detached: boolean;
  detachedFeeMax: number;
  detachedFeeMin: number;
  garage: boolean;
  garageFeeMax: number;
  garageFeeMin: number;
  propertyID: number;
  reserved: boolean;
  reservedFeeMax: number;
  reservedFeeMin: number;
}

export interface PetInfo {
  allowed: boolean;
  breedRestriction: boolean;
  extraRent: number;
  limit: number;
  nonRefundableFee: number;
  weight: number;
}

export interface SchoolsInfo {
  district: string;
  elementry: string;
  high: string;
  intermediate: string;
  middle: string;
  propertyID: number;
}


export interface PropertyDetail {
  adminFee: number;
  appFee: number;
  city: string;
  email: string;
  favorite: boolean;
  floorplans: FloorPlan[];
  geocode: Geocode;
  highValueAmenities: string[];
  listID: number;
  management: string;
  managementOffices: ManagementOffice[];
  name: string;
  neighborhood: string;
  notes: string;
  numUnits: number;
  officeHours: string;
  onsiteManager: string;
  paidUtilities: string[];
  parking: Parking;
  petInfo: PetInfo;
  phone: string;
  photos: string[];
  propertyAmenities: string[];
  propertyID: number;
  regionalEmail: string;
  regionalName: string;
  regionalPhone: string;
  role: string;
  schoolsInfo: SchoolsInfo;
  section8: boolean;
  seniorHousing: boolean;
  specials: any;
  streetAddress: string;
  studentHousting: boolean;
  unitAmenities: string[];
  url: string;
  yearBuilt: number;
  yearRenovated: number;
}
