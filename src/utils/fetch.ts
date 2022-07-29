import axios from "axios"
import { ZodError, ZodType, ZodTypeDef } from "zod"
import { toPascalCase } from "./strings"

type InvalidResponse = {
  entityName: string
  error: ZodError<unknown>
  invalidResponse: unknown
}

type SafeFetch<T, U> = {
  abortSignal: AbortSignal
  defaultValue: U
  entityName: string
  schema: T
  url: string
}

/**
 * Show warning when the API response doesn't respect the expected schema
 * @param InvalidResponse.entityName {string} Entity which schema failed
 * @param InvalidResponse.error {ZodError<unknown>} Error thrown by Zod
 * @param InvalidResponse.invalidResponse {unknown} Object that couldn't pass the schema validation
 * @returns {void}
 */
const invalidResponseWarn = ({
  entityName,
  error,
  invalidResponse,
}: InvalidResponse): void => {
  console.warn(
    `${toPascalCase(
      entityName,
    )} response data doesn't match with the expected type:`,
  )
  console.warn(invalidResponse)
  console.warn(error)
}

/**
 * Fetch data from the API and validate structure with expected schema
 * @param SafeFetch.defaultValue {U} Default value to return when the API couldn't return a value
 * @param SafeFetch.entityName {string} Entity that we are trying to fetch
 * @param SafeFetch.schema {T} Zod schema that is going to be use to validate the API response
 * @param SafeFetch.url {string} API Endpoint url
 * @returns {T} Data returned by the API, it doesn't matter if it passed or not the schema validation
 */
const safeFetch = async <T extends ZodType<unknown, ZodTypeDef, unknown>, U>({
  abortSignal,
  defaultValue,
  entityName,
  schema,
  url,
}: SafeFetch<T, U>): Promise<T["_output"]> => {
  try {
    // TODO: create axios facade
    const rawResponse = (await axios.get(url, { signal: abortSignal }))
      .data as T
    const response = schema.safeParse(rawResponse)

    if (response.success) {
      return response.data ?? defaultValue
    }

    invalidResponseWarn({
      entityName,
      error: response.error,
      invalidResponse: rawResponse,
    })

    if (!(typeof rawResponse === "object") || !("name" in rawResponse)) {
      return defaultValue
    }

    return rawResponse
  } catch (e: unknown) {
    console.log(e)
    return defaultValue
  }
}

export { safeFetch }
