import { BankDetails, CompanyDetails, DriversLicense, PersonalInfo } from './sharedIterfaces';
import { UserTypeEnum } from '../enums/UserType.enum';

export interface IDriver {
  id: string;
  type: UserTypeEnum.Driver;
  login: string;
  email: string;
  password: string;
  driversLicense: DriversLicense;
  bankDetails?: BankDetails;
  personalInfo: PersonalInfo;
  companyDetails?: CompanyDetails;
}
