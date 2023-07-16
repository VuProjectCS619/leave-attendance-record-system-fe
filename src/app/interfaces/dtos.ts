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
  contactNumber:string,
  designation:string,
  salary:number
  allowedEarnedLeaves: number,
  allowedCasualLeaves: number,
  allowedCompensatoryLeaves: number
}
export interface IUpdateEmployee
{
  name:string,
  password:string,
  contactNumber:string,
  designation:string,
  salary:number,
  allowedEarnedLeaves: number,
  allowedCasualLeaves: number,
  allowedCompensatoryLeaves: number
}
export interface IAddEmployeeLeave
{
  descriptionLeave:string
  leave:number
}
//Employee Interfaces
export interface IApplyForLeave
{
  toDate:string,
  fromDate:string,
  LeaveType:string
  hh?:string,
  mm?:string,
  descriptionLeave:string,
  reason:string
}

export interface IUpdateProfileSetting
{
  name:string,
  password:string
}
