import { CompanyDetails, PersonalInfo } from './sharedIterfaces';
import { UserTypeEnum } from '../enums/UserType.enum';

export interface ICustomer {
  id: string;
  type: UserTypeEnum.Customer;
  login: string;
  email: string;
  password: string;
  personalInfo: PersonalInfo;
  companyDetails?: CompanyDetails;
}

export interface ICustomerBody {
  login: string;
  email: string;
  password: string;
  personalInfo: PersonalInfo;
}
