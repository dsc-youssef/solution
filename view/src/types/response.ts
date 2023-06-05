export interface ResponseData <D> {
  data: {
    message: string,
    state: boolean,
    data: D
  }
}