export interface Chart
{
  name: string;
  year: number;
  quarter: {};
}

export interface QuarterData {
  quarter_1: number;
  quarter_2: number;
  quarter_3: number;
  quarter_4: number;
}

export interface CompanyReport {
  name: string;
  year: number;
  quarter: QuarterData
}

export interface CompanyReportResponse{
  Chart: CompanyReport[]
}
