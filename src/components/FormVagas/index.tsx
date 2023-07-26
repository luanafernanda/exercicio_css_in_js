import React, { FormEvent, useState } from 'react'
import { FormContainer, PesquisaButton, CampoInput } from './style'

type Props = {
  aoPesquisar: (termo: string) => void
}

const FormVagas = ({ aoPesquisar }: Props) => {
  const [termo, setTermo] = useState<string>('')

  const aoEnviarForm = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    aoPesquisar(termo.toLocaleLowerCase())
  }

  return (
    <FormContainer onSubmit={aoEnviarForm}>
      <CampoInput
        placeholder="Front-end, fullstack, node, design"
        onChange={(e) => setTermo(e.target.value)}
        type="search"
      />
      <PesquisaButton type="submit">Pesquisar</PesquisaButton>
    </FormContainer>
  )
}
export default FormVagas
