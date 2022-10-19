export interface IVinApiResponse {
  Count: number;
  Message: string;
  SearchCriteria: string;
  Results: IVinResult[];
}

export interface IVinResult {
  Value: string;
  ValueId: string;
  Variable: string;
  VariableId: number;
}