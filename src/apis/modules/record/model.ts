/* eslint-disable @typescript-eslint/no-namespace */
      
      /**
      * 修改FaqRecord-Model类库
      */
      export namespace IpostUpdateSpace {

        export class RequestParams{
          
          constructor(){
            
          }
        }
      
      export interface Model {}
      }
            /**
            * FaqRecord分页查询-Model类库
            */
            export namespace IpostPageSpaceList {
      
              export class RequestParams{
                
                constructor(){
                  
                }
              }
      
              export interface List {
                id: string;
                typeId: string;
                title: string;
                content: string;
                status: string;
                source: string;
                createTime: string;
                updateTime: string;
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
            * 保存FaqRecord-Model类库
            */
      export namespace IpostSaveSpace {
      
        export class RequestParams{
          
          constructor(){
            
          }
        }
      
      export interface Model {}
      }
            /**
            * 删除FaqRecord-Model类库
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