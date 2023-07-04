import { useFormContext } from 'react-hook-form'
import { ListOption } from './ListOption'
import { Label } from './ui/label'
import {
  RadioGroup as ShadcnRadioGroup,
  RadioGroupItem,
} from './ui/radio-group'

interface RadioGroup {
  options: ListOption[]
  setSelectedOption: (option: string) => void
  selectedOption: string
  formKey: string
}

export function FormRadioGroup({
  options,
  selectedOption,
  setSelectedOption,
  formKey,
}: RadioGroup) {
  const { register } = useFormContext()
  return (
    <ShadcnRadioGroup
      defaultValue={options[0].value}
      onValueChange={(option) => setSelectedOption(option)}
      value={selectedOption}
    >
      {options.map((option) => (
        <div key={option.value} className="flex items-center space-x-2">
          <RadioGroupItem value={option.value} id={option.value} />
          <Label htmlFor={option.value} {...register(formKey)}>
            {option.label}
          </Label>
        </div>
      ))}
    </ShadcnRadioGroup>
  )
}
