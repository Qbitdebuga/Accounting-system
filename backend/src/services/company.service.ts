import { Company } from '../models/company';

interface CreateCompanyInput {
  name: string;
  default_currency: string;
  timezone: string;
  is_active: boolean;
}

export class CompanyService {
  static async getAll() {
    return await Company.findAll();
  }

  static async create(data: CreateCompanyInput) {
    return await Company.create(data);
  }
}
