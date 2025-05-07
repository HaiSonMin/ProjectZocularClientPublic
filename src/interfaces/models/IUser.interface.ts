import { BoInterfaceModelsCommon } from 'bodevops-be-common/dist';

export interface IUser extends BoInterfaceModelsCommon.IBaseModel {
  email: string;
  fullName: string;
  password: string;
  phone: string;
  address: string;
  isActive: boolean;
  isRootAdmin: boolean;
  role: string;
  avatar: string;
}
