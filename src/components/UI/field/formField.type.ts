type FormField_E = 'text' | 'date' | 'number';

export type FormField_T = {
  name: string;
  label: string;
  placeholder: string;

  className?: string;
  type?: FormField_E;
};