import { gql } from "@apollo/client";

export const PRODUCTS = gql`
{  
    categories{
       name
       
       products{
         category
         id
         brand
         name
         inStock
         description
         gallery
         
         prices{
           amount
           currency{
             label
             symbol
           }
         }
         
         attributes{
           id
           name
           type
           items{
             value
             displayValue
             id
           }
         }          
       }  
     }
   }
`; 