import { TransportationStatusesEnum } from '../enums/transportationStatuses.enum';

export interface ITransportation {
  id: string;
  customerId: string;
  brokerId: string;
  driverId: string;
  startDateTime: Date;
  endDateTime: Date;
  customerPhone: string;
  addressToBeDelivered: string;
  costOfProducts: number;
  costOfDelivery: number;
  weight: number;
  status: TransportationStatusesEnum;
}
