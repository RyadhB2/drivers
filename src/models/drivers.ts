export interface Driver {
  id: string;
  full_name: string;
  phone: string;
  reference: string;
}

export interface DriversResponse {
  drivers: Driver[];
  count: number;
  next: string;
}
