export interface ILogin
{
  email:string,
  password:string
}

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
