import { ZodType } from "zod"

type invalidResponseWarnParams = {
  entity: string
  invalidResponse: unknown
  error: unknown
}

const invalidResponseWarn = ({
  entity,
  invalidResponse,
  error,
}: invalidResponseWarnParams) => {
  console.warn(
    "\x1b[31m%s\x1b[0m",
    `${
      entity.charAt(0).toUpperCase() + entity.slice(1)
    } response data doesn't match with the expected type:`,
  )
  console.warn(invalidResponse)
  console.warn(error)
}

export const safeFetch = async <T extends ZodType<unknown>, U>({
  schema,
  entity,
  url,
  defaultValue,
}: {
  schema: T
  entity: string
  url: string
  defaultValue: U
}): Promise<T["_output"]> => {
  const headers = [["Content-Type", "application/json"]]
  const data = await fetch(url, { method: "GET", headers })
  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
  const rawResponse = await data.json()
  const response = schema.safeParse(rawResponse)

  if (response.success) {
    return response.data ?? defaultValue
  }

  invalidResponseWarn({
    entity,
    invalidResponse: rawResponse,
    error: response.error,
  })

  // eslint-disable-next-line @typescript-eslint/no-unnecessary-condition
  return (rawResponse as unknown as T) ?? defaultValue
}
