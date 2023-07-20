// Account Interface
export interface ILogin
{
  email:string,
  password:string
  isAdmin?:boolean
}
//Admin Interfaces
export interface IAddEmployee
{
  name:string,
  email:string,
  password:string,
  contact:string,
  designation:string,
  salary:number
  allowedEarnedLeaves: number,
  allowedCasualLeaves: number,
  allowedCompensatoryLeaves: number
  consumedCasualLeaves: number;
  consumedCompensatoryLeaves: number;
  consumedEarnedLeaves: number;
}
export interface IUpdateEmployee
{
  name:string,
  password:string,
  contact:string,
  designation:string,
  salary:number,
  allowedEarnedLeaves: number,
  allowedCasualLeaves: number,
  allowedCompensatoryLeaves: number
}

//Employee Interfaces
export interface IApplyForLeave
{
  toDate:string,
  fromDate:string,
  leaveType:string
  hh?:string,
  mm?:string,
  descriptionLeave:string,
  reason:string
}

export interface IUpdateProfileSetting
{
  name:string,
  password:string
  contact:string
}
