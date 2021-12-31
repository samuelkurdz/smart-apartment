export interface ListResponse {
  agentInfo: AgentInfo;
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
  management: null
  name: string;
  onsiteManager: null
  order: number;
  paidUtilities: string[];
  pets: true
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