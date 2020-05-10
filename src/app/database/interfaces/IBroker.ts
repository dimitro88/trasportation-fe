import { BankDetails, CompanyDetails, PersonalInfo } from './sharedIterfaces';
import { UserTypeEnum } from '../enums/UserType.enum';

export interface IBroker {
  id: string;
  type: UserTypeEnum.Broker;
  login: string;
  email: string;
  password: string;
  bankDetails?: BankDetails;
  personalInfo: PersonalInfo;
  companyDetails?: CompanyDetails;
}
