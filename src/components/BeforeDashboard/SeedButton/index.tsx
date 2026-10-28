'use client'

import React, { Fragment, useCallback, useState } from 'react'
import { toast } from '@payloadcms/ui'

import './index.scss'

const SuccessMessage: React.FC = () => (
  <div>
    Banco de dados populado com sucesso! Você já pode{' '}
    <a target="_blank" href="/">
      visitar o site
    </a>
  </div>
)

export const SeedButton: React.FC = () => {
  const [loading, setLoading] = useState(false)
  const [seeded, setSeeded] = useState(false)
  const [error, setError] = useState<null | string>(null)

  const handleClick = useCallback(
    async (e: React.MouseEvent<HTMLButtonElement>) => {
      e.preventDefault()

      if (seeded) {
        toast.info('O banco de dados já foi inicializado.')
        return
      }
      if (loading) {
        toast.info('Inicialização já em andamento.')
        return
      }
      if (error) {
        toast.error(`Ocorreu um erro, recarregue e tente novamente.`)
        return
      }

      setLoading(true)

      try {
        toast.promise(
          new Promise((resolve, reject) => {
            try {
              fetch('/next/seed', { method: 'POST', credentials: 'include' })
                .then((res) => {
                  if (res.ok) {
                    resolve(true)
                    setSeeded(true)
                  } else {
                    reject('Ocorreu um erro durante a inicialização.')
                  }
                })
                .catch((error) => {
                  reject(error)
                })
            } catch (error) {
              reject(error)
            }
          }),
          {
            loading: 'Populando banco com conteúdo Squammata...',
            success: <SuccessMessage />,
            error: 'Ocorreu um erro durante a inicialização.',
          },
        )
      } catch (err) {
        const error = err instanceof Error ? err.message : String(err)
        setError(error)
      }
    },
    [loading, seeded, error],
  )

  let message = ''
  if (loading) message = ' (populando...)'
  if (seeded) message = ' (concluído!)'
  if (error) message = ` (erro: ${error})`

  return (
    <Fragment>
      <button className="seedButton" onClick={handleClick}>
        Inicializar Conteúdo Squammata
      </button>
      {message}
    </Fragment>
  )
}
