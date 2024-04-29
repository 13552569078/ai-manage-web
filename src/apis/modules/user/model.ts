export namespace IpostUser {

  export class RequestParams {

    constructor() {

    }
  }

  export interface Data {
    USER_NAME: string;
  }

  export interface Model {
    code: string;
    msg: string;
    data: Data;
  }
}