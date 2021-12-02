type IFormType = 'input' | 'password' | 'select' | 'datepicker'
interface IOption {
  label: string
  value: string | number
}

export interface IFormItem {
  type: IFormType
  label: string
  rules?: any[]
  placeholder?: any
  // select
  options?: IOption[]
  // 特殊属性
  otherOptions?: any
}

export interface IForm {
  formItems: IFormItem[]
  labelWidth?: string
  colLayout?: any
  itemLayout?: any
}
