export function fakeApi<Response>(response: Response): Promise<Response> {
  return new Promise((resolve) => setTimeout(() => resolve(response), 500));
}
