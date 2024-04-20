import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { FormRegisterTeam } from './_components/FormRegister'

const FormPage = () => {
  return (
    <div className="py-6 mx-auto max-w-[50rem]">
      <Card>
        <CardHeader>
          <CardTitle>Cadastar meu time</CardTitle>
          <CardDescription>
            Cadastrar os dados do meu time no torneio
          </CardDescription>
        </CardHeader>
        <CardContent>
          <FormRegisterTeam />
        </CardContent>
      </Card>
    </div>
  )
}

export default FormPage
