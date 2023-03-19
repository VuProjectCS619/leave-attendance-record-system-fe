export interface IAdminLogin{
username?: string
  password?: string
}

export interface IUserLogin{
  name: string
  contact: string
  password: string
}

export interface ICreateEmployee{
  name:string
  password: string
  contact:string
  departmentId: string
  salary:number
}


