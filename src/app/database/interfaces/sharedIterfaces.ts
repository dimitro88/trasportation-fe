export interface PersonalInfo {
  firstName: string;
  lastName: string;
  phone?: string;
}

export interface BankDetails {
  cardNumber: string;
}

export interface DriversLicense {
  category: string;
  validUntil: Date;
}

export interface CompanyDetails {
  companyName: string;
  phone: string;
  role: string;
}
