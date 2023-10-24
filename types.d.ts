interface InputFieldProps {
  label?: string;
  name: string;
  type: string;
  register: UseFormRegister<any>;
  error?: string;
  min?: any;
  isEditMode: boolean;
}

interface DateFieldProps {
  label?: string;
  name: string;
  register: UseFormRegister<any>;
  error?: string;
  min?: any;
  isEditMode: boolean;
  defaultValue?: Date;
}

interface TextAreaFieldProps {
  label: string;
  name: string;
  register: UseFormRegister<any>;
  error?: string;
  isEditMode: boolean;
}

interface RadioFieldProps {
  label: string;
  name: string;
  register: UseFormRegister<any>;
  error?: string;
  isChecked?: boolean;
  isEditMode: boolean;
  defaultValue?: string;
  //   items: any;
}

interface SelectFieldProps {
  label: string;
  name: string;
  //   type: string;
  register: UseFormRegister<any>;
  error?: string;
  items: string[];
  isEditMode: boolean;
}
