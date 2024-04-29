/* eslint-disable @typescript-eslint/no-namespace */
      
            /**
            * 删除Faq类型-Model类库
            */
      export namespace IdeleteFSpace {
      
        export class RequestParams{
          id?:number;
          constructor(){
            this.id=0;
          }
        }
      
      export interface Model {}
      }
            /**
            * 保存Faq类型-Model类库
            */
      export namespace IpostSaveSpace {
      
        export class RequestParams{
          
          constructor(){
            
          }
        }
      
      export interface Model {}
      }
            /**
            * Faq类型分页查询-Model类库
            */
      export namespace IpostPageSpace {
      
        export class RequestParams{
          
          constructor(){
            
          }
        }

        export interface List {
          id: string;
          code: string;
          content: string;
          createTime: string;
          department: string;
          title: string;
        }

        export interface Data {
          currPage: number;
          hasNext: boolean
          list: List[];
          pageSize: number;
          pages: number;
          total: number;
        }
      
      export interface Model {
        code: string;
        msg: string;
        data: Data;
      }
      }
            /**
            * 修改Faq类型-Model类库
            */
      export namespace IpostUpdateSpace {
      
        export class RequestParams{
          
          constructor(){
            
          }
        }
      
      export interface Model {}
      }