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
}

interface CustomSelectFieldProps {
  label: string;
  name: string;
  error?: string;
  items: string[];
  value: string;
  isEditMode: boolean;
  onChange: (value: string) => void;
}

type ChipFieldProps = {
  label: string;
  isEditMode: boolean;
  items: string[];
  name: string;
  onChange: (value: string[]) => void;
  value: string[];
  error?: string;
  multiple?: boolean;
};