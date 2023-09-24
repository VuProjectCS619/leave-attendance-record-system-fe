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
  descriptionLeave:string,
  reason:string
}

export interface IUpdateProfileSetting
{
  name:string,
  password:string
  contact:string
}

export interface IAttendanceDate{
  fromDate:Date|string
  toDate:Date|string
}
export interface ILeaveRecordDate{
  fromDate:Date|string
  toDate:Date|string
}
