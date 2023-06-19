// Account Interface
export interface ILogin
{
  email:string,
  password:string
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
}
export interface IUpdateEmployee
{
  name:string,
  email:string,
  password:string,
  contactNumber:string,
  designation:string,
  salary:number
}
export interface IAddEmployeeLeave
{
  leave:number
}
//Employee Interfaces
export interface IApplyForLeave
{
  toDate:string,
  fromDate:string,
  LeaveType:string
  descriptionLeave:string,
  reason:string
}

export interface IUpdateProfileSetting
{
  name:string,
  password:string
}
